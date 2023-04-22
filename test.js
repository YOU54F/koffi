const koffi = require('koffi');
const path = require('path');
const lib = koffi.load(
  path.join(
    'ffi',
    `${process.platform}-${process.arch}`,
    `${process.platform !== 'win32' ? "lib" : ''}pact_ffi.${
      process.platform === 'win32'
        ? 'dll'
        : process.platform === 'darwin'
        ? 'dylib'
        : 'so'
    }`
  )
);
const version = lib.func('const char *pactffi_version(void)');
console.log(`Hello Ffi!\n ${version()}`);
