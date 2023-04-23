import koffi,{KoffiFunction} from 'koffi';
import { PactFfi } from "./types";


const lib = koffi.load('libpact_ffi.so');
const PactFfi_SYMBOLS =   {
    pactffi_version: {
      name: "pactffi_version",
      parameters: [],
      result: "string",
    },
   
  } ;

  const versionIdiomatic = lib.func(PactFfi_SYMBOLS.pactffi_version.name, PactFfi_SYMBOLS.pactffi_version.result, PactFfi_SYMBOLS.pactffi_version.parameters);
  const versionNative = lib.func('const char *pactffi_version(void)');
  

console.log(`Hello Ffi!\n ${versionIdiomatic()}`);
console.log(`Hello Ffi!\n ${versionNative()}`);
