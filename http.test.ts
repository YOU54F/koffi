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

const PactTestHttp = () => {
  console.log('🚀 Pact Mock Server Test - HTTP 🚀');

  const pact = {
    consumer: { name: 'pact-bun' },
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
      'pact-bun': { ffi: PactFfiLib().pactffi_version(), version: '1.0.0' },
      pactRust: { mockserver: '0.9.5', models: '1.0.0' },
      pactSpecification: { version: '1.0.0' }
    },
    provider: { name: 'Alice Service' }
  };
  const mock_server_port = PactFfiLib().pactffi_create_mock_server(
    JSON.stringify(pact),
    '127.0.0.1:4432',
    0
  );
  PactFfiLib().pactffi_log_message(
    'pact-bun',
    'INFO',
    `mock_server_port: ${mock_server_port}`
  );

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
  console.log('🧹 Cleaned up Pact processes');
};

PactTestHttp();
