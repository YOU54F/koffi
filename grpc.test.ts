import { PactFfiLib } from './PactFfi';
import { PactFfi } from './types';

PactFfiLib().pactffi_logger_init();
PactFfiLib().pactffi_logger_attach_sink(
  'stdout',
  PactFfi.LevelFilterValue.LevelFilter_Info
);
PactFfiLib().pactffi_logger_apply();
PactFfiLib().pactffi_log_message(
  'pact-bun',
  'INFO',
  `hello from ffi version: ${PactFfiLib().pactffi_version()}`
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

  const pact = PactFfiLib().pactffi_new_pact(
    'grpc-consumer-bun',
    'area-calculator-provider'
  );
  console.log('pact');
  console.log(pact);
  PactFfiLib().pactffi_log_message(
    'pact-bun',
    'INFO',
    `pactffi_new_pact: ${pact}`
  );
  const pactffi_with_pact_metadata_res =
    PactFfiLib().pactffi_with_pact_metadata(
      pact,
      'pact-bun',
      'ffi',
      PactFfiLib().pactffi_version()
    );
  console.log('pactffi_with_pact_metadata_res');
  console.log(pactffi_with_pact_metadata_res);
  const message_pact = PactFfiLib().pactffi_new_sync_message_interaction(
    pact,
    'A gRPC calculateOne request'
  );
  console.log('message_pact');
  console.log(message_pact);
  PactFfiLib().pactffi_log_message(
    'pact-bun',
    'INFO',
    `pactffi_new_sync_message_interaction: ${message_pact}`
  );
  console.log('try pactffi_with_specification');
  const pactffi_with_specification_res =
    PactFfiLib().pactffi_with_specification(
      pact,
      PactFfi.PactSpecificationValue.PactSpecification_V4
    );
  console.log('pactffi_with_specification_res');
  console.log(pactffi_with_specification_res);
  // Start mock server
  const pactffi_using_plugin_res = PactFfiLib().pactffi_using_plugin(
    pact,
    'protobuf',
    '0.1.17'
  );
  console.log('pactffi_using_plugin_res', contents);
  console.log(pactffi_using_plugin_res);
  console.log('setting pactffi_interaction_contents_res');

  const pactffi_interaction_contents_res =
    PactFfiLib().pactffi_interaction_contents(
      message_pact,
      PactFfi.InteractionPartValue.InteractionPart_Request,
      'application/grpc',
      JSON.stringify(contents)
    );
  console.log('pactffi_interaction_contents_res');
  console.log(pactffi_interaction_contents_res);
  const mock_server_port =
    PactFfiLib().pactffi_create_mock_server_for_transport(
      pact,
      '0.0.0.0',
      0,
      'grpc',
      null
    );
  console.log('mock_server_port');
  console.log(mock_server_port);
  PactFfiLib().pactffi_log_message(
    'pact-bun',
    'INFO',
    `pactffi_create_mock_server_for_transport: ${mock_server_port}`
  );

  // This is where we would make our client request and assert the results

  // check results and write pact

  const matched = PactFfiLib().pactffi_mock_server_matched(mock_server_port);
  PactFfiLib().pactffi_log_message(
    'pact-bun',
    'INFO',
    `pactffi_mock_server_matched: ${matched}`
  );

  if (!matched) {
    const mismatches =
      PactFfiLib().pactffi_mock_server_mismatches(mock_server_port);
    console.log('🚨 tests failed, check out the errors below 👇');
    console.log(mismatches);
    console.log(JSON.stringify(JSON.parse(mismatches), null, '\t'));
  } else {
    console.log('✅ tests passed 👌');
    const PACT_FILE_DIR = './pacts';
    const res_write_pact = PactFfiLib().pactffi_write_pact_file(
      mock_server_port,
      PACT_FILE_DIR,
      0
    );
    PactFfiLib().pactffi_log_message(
      'pact-bun',
      'INFO',
      `pactffi_write_pact_file: ${res_write_pact}`
    );
  }

  const pactffi_cleanup_mock_server_result =
    PactFfiLib().pactffi_cleanup_mock_server(mock_server_port);
  PactFfiLib().pactffi_log_message(
    'pact-bun',
    'INFO',
    `pactffi_cleanup_mock_server: ${pactffi_cleanup_mock_server_result}`
  );
  PactFfiLib().pactffi_cleanup_plugins(pact);
  console.log('🧹 Cleaned up Pact processes');
};

console.log(
  'Hello from Pact Bun FFI - Version',
  PactFfiLib().pactffi_version()
);

PactTestGrpc();
