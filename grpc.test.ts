import { PactKoffi } from './PactKoffi';
import { PactFfi } from './types';

PactKoffi().loggerInit();
PactKoffi().loggerAttachSink(
  'stdout',
  PactFfi.LevelFilterValue.LevelFilter_Info
);
PactKoffi().loggerApply();
PactKoffi().logMessage(
  'pact-koffi',
  'INFO',
  `hello from ffi version: ${PactKoffi().version()}`
);
const PactTestGrpc = async () => {
  console.log('🚀 Running Pact Protobuf Plugin Test with gRPC 🚀');
  const contents = {
    'pact:proto': `${process.cwd()}/proto/area_calculator.proto`,
    'pact:proto-service': 'Calculator/calculateOne',
    'pact:content-type': 'application/protobuf',
    request: {
      rectangle: { length: 'matching(number, 3)', width: 'matching(number, 4)' }
    },
    response: { value: ['matching(number, 12)'] }
  };

  // Setup pact for testing

  const pact = PactKoffi().newPact(
    'grpc-consumer-bun',
    'area-calculator-provider'
  );
  console.log('pact');
  console.log(pact);
  PactKoffi().logMessage(
    'pact-koffi',
    'INFO',
    `new_pact: ${pact}`
  );
  const with_pact_metadata_res =
    PactKoffi().withPactMetadata(
      pact,
      'pact-koffi',
      'ffi',
      PactKoffi().version()
    );
  console.log('with_pact_metadata_res');
  console.log(with_pact_metadata_res);
  const message_pact = PactKoffi().newSyncMessageInteraction(
    pact,
    'A gRPC calculateOne request'
  );
  console.log('message_pact');
  console.log(message_pact);
  PactKoffi().logMessage(
    'pact-koffi',
    'INFO',
    `new_sync_message_interaction: ${message_pact}`
  );
  console.log('try with_specification');
  const with_specification_res =
    PactKoffi().withSpecification(
      pact,
      PactFfi.PactSpecificationValue.PactSpecification_V4
    );
  console.log('with_specification_res');
  console.log(with_specification_res);
  // Start mock server
  const using_plugin_res = PactKoffi().usingPlugin(
    pact,
    'protobuf',
    '0.1.17'
  );
  console.log('using_plugin_res', contents);
  console.log(using_plugin_res);
  console.log('setting interaction_contents_res');

  const interaction_contents_res =
    PactKoffi().interactionContents(
      message_pact,
      PactFfi.InteractionPartValue.InteractionPart_Request,
      'application/grpc',
      JSON.stringify(contents)
    );
  console.log('interaction_contents_res');
  console.log(interaction_contents_res);
  const mock_server_port =
    PactKoffi().createMockServerForTransport(
      pact,
      '0.0.0.0',
      0,
      'grpc',
      null
    );
  console.log('mock_server_port');
  console.log(mock_server_port);
  PactKoffi().logMessage(
    'pact-koffi',
    'INFO',
    `create_mock_server_for_transport: ${mock_server_port}`
  );

  // This is where we would make our client request and assert the results

  // check results and write pact

  const matched = PactKoffi().mockServerMatched(mock_server_port);
  PactKoffi().logMessage(
    'pact-koffi',
    'INFO',
    `mock_server_matched: ${matched}`
  );

  if (!matched) {
    const mismatches =
      PactKoffi().mockServerMismatches(mock_server_port);
    console.log('🚨 tests failed, check out the errors below 👇');
    console.log(mismatches);
    console.log(JSON.stringify(JSON.parse(mismatches), null, '\t'));
  } else {
    console.log('✅ tests passed 👌');
    const PACT_FILE_DIR = './pacts';
    const res_write_pact = PactKoffi().writePactFile(
      mock_server_port,
      PACT_FILE_DIR,
      0
    );
    PactKoffi().logMessage(
      'pact-koffi',
      'INFO',
      `write_pact_file: ${res_write_pact}`
    );
  }

  const cleanup_mock_server_result =
    PactKoffi().cleanupMockServer(mock_server_port);
  PactKoffi().logMessage(
    'pact-koffi',
    'INFO',
    `cleanup_mock_server: ${cleanup_mock_server_result}`
  );
  PactKoffi().cleanupPlugins(pact);
  console.log('🧹 Cleaned up Pact processes');
};

console.log(
  'Hello from Pact Bun FFI - Version',
  PactKoffi().version()
);

PactTestGrpc();
