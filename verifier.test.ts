import { PactKoffi } from './PactKoffi';
import { PactFfi } from './types';

const pact = PactKoffi()
pact.loggerInit();
pact.loggerAttachSink(
  'stdout',
  PactFfi.LevelFilterValue.LevelFilter_Trace
);
pact.loggerApply();
pact.logMessage(
  'pact-koffi',
  'INFO',
  `hello from ffi version: ${pact.version()}`
);

console.log('🚀 Pact Verifier Test 🚀');
const verificationHandle = pact.verifierNewForApplication('pact-koffi','0.0.1')
console.log("handle",verificationHandle);

pact.verifierSetProviderInfo(verificationHandle,'foobar','http','localhost',0,'/')
// pact.verifierSetProviderInfo(verificationHandle,scheme: string, host: string, port: string, path: string)

pact.verifierShutdown(verificationHandle)

