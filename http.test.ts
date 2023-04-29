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

const PactTestHttp = () => {
  console.log('🚀 Pact Mock Server Test - HTTP 🚀');

  const pact = {
    consumer: { name: 'pact-koffi' },
    interactions: [
      {
        description: 'a retrieve Mallory request',
        request: {
          method: 'GET',
          path: '/mallory',
          query: 'name=ron&status=good'
        },
        response: {
          body: 'That is some good Mallory.',
          headers: { 'Content-Type': 'text/html' },
          status: 200
        }
      }
    ],
    metadata: {
      'pact-koffi': { ffi: PactKoffi().version(), version: '1.0.0' },
      pactRust: { mockserver: '0.9.5', models: '1.0.0' },
      pactSpecification: { version: '1.0.0' }
    },
    provider: { name: 'Alice Service' }
  };
  const mock_server_port = PactKoffi().createMockServer(
    JSON.stringify(pact),
    '127.0.0.1:4432',
    false
  );
  PactKoffi().logMessage(
    'pact-koffi',
    'INFO',
    `mock_server_port: ${mock_server_port}`
  );

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
  console.log('🧹 Cleaned up Pact processes');
};

PactTestHttp();
