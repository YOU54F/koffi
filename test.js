console.log({ arch: process.arch, platform: process.platform });
const koffi = require('koffi');
const path = require('path');
const libPath = path.join(
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
console.log(libPath);
const lib = koffi.load(libPath);
const version = lib.func('const char *pactffi_version(void)');
console.log(`Hello Ffi!\n ${version()}`);
