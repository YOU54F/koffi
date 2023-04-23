import path from 'path';
import { PactFfi } from './types';
import {PactFfi_SYMBOLS} from './symbols'
console.log({ arch: process.arch, platform: process.platform });

const libPath = path.join(
  __dirname,
  'ffi',
  `${process.platform}-${process.arch}`,
  `${process.platform !== 'win32' ? 'lib' : ''}pact_ffi.${
    process.platform === 'win32'
      ? 'dll'
      : process.platform === 'darwin'
      ? 'dylib'
      : 'so'
  }`
);

console.log('libPath', libPath);
console.log('trying to load koffi');
import koffi, { KoffiFunction } from 'koffi';
console.log('koffi loaded');
const lib = koffi.load(libPath);

const foo = (): typeof PactFfi =>{
  return  {
      pactffi_version: lib.func(PactFfi_SYMBOLS.pactffi_version.name, PactFfi_SYMBOLS.pactffi_version.result, PactFfi_SYMBOLS.pactffi_version.arguments)
  }
}

foo().pactffi_version()


console.log(`Hello Ffi!\n ${foo().pactffi_version()}`);
