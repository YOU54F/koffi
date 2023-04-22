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
console.log("libPath",libPath);
console.log('trying to load koffi')
const koffi = require('koffi');
console.log('koffi loaded')
const path = require('path');
const lib = koffi.load(libPath);
const version = lib.func('const char *pactffi_version(void)');
console.log(`Hello Ffi!\n ${version()}`);
