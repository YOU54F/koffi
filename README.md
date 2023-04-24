# Pact-Koffi

<img src="https://user-images.githubusercontent.com/19932401/206557102-f5141b7d-a4f4-441b-84f6-ede3552c4696.png" height="120" width="120"><img src="https://user-images.githubusercontent.com/19932401/233866546-f599a993-dc81-4485-b923-c843a8464a22.png" height="120" width="120">



Pact-Koffi requires a recent Node.js version with N-API version 8 support, see the compatibility matrix for currently tested versions.

Pact-Koffi uses Koffi.js, it supports pre-built binaries for several platforms. Pre-built binaries means you can use `pact-koffi` straight out of the box, even with `--ignore-scripts` enabled.

On platforms that do not have pre-built binaries, you will need an appropriate build chain.

- Windows Users
  -  https://koffi.dev/contribute#windows
- Other Platforms
  - https://koffi.dev/contribute#other-platforms

`pact-koffi` will come pre-packaged with the `pact_ffi` binaries matching those pre-built by `koffi`. 

Additional platform support may be available, using cargo plaform targets.

See 
- https://github.com/YOU54F/pact-reference/blob/additional_arch/COMPATIBILITY.md
- https://github.com/YOU54F/pact-reference/blob/additional_arch/.github/workflows/ffi.yml

# Requirements

## Koffi.js

Koffi requires a recent [Node.js](https://nodejs.org/) version with [N-API](https://nodejs.org/api/n-api.html) version 8 support:

- Node < 12.22.0 is not supported
- _Node 12.x_: Node 12.22.0 or newer
- _Node 14.x_: Node 14.17.0 or newer
- _Node 15.x_: Node 15.12.0 or newer
- Node 16.0.0 or later versions

You can [NVM](https://github.com/nvm-sh/nvm) to install more recent Node versions on older Linux distributions.

## Koffi.js Supported platforms

The following combinations of OS and architectures __are officially supported and tested__ at the moment:

ISA / OS           | Windows     | Linux    | macOS       | FreeBSD     | OpenBSD
------------------ | ----------- | -------- | ----------- | ----------- | --------
x86 (IA32) [^1]    | ✅ Yes      | ✅ Yes   | ⬜️ _N/A_    | ✅ Yes      | ✅ Yes
x86_64 (AMD64)     | ✅ Yes      | ✅ Yes   | ✅ Yes      | ✅ Yes      | ✅ Yes
ARM32 LE [^2]      | ⬜️ _N/A_    | ✅ Yes   | ⬜️ _N/A_    | 🟨 Probably | 🟨 Probably
ARM64 (AArch64) LE | ✅ Yes      | ✅ Yes   | ✅ Yes      | ✅ Yes      | 🟨 Probably
RISC-V 64 [^3]     | ⬜️ _N/A_    | ✅ Yes   | ⬜️ _N/A_    | 🟨 Probably | 🟨 Probably

[^1]: The following call conventions are supported for forward calls: cdecl, stdcall, MS fastcall, thiscall. Only cdecl and stdcall can be used for C to JS callbacks.
[^2]: The prebuilt binary uses the hard float ABI and expects a VFP coprocessor. Build from source to use Koffi with a different ABI (softfp, soft).
[^3]: The prebuilt binary uses the LP64D (double-precision float) ABI. The LP64 ABI is supported in theory if you build Koffi from source (untested), the LP64F ABI is not supported.

For all fully supported platforms (green check marks), a prebuilt binary is included in the NPM package which means you can install Koffi without a C++ compiler.

## Pact FFI Supported Platforms

`pact-koffi` is attempting to be tested cross-platform/architecture, across multiple node versions. See the
following table for progress.

### Legend

- 🔗 : Pact FFI Binaries officially supported and provided by <https://github.com/pact-foundation/pact-reference/tree/master/rust/pact_ffi>
- ✅ : Automated testing in CI
- 🧪 : Pact FFI Binaries unofficially provided by <https://github.com/you54f/pact-reference/tree/master/rust/pact_ffi>
- 👷🏽 : Locally built FFI Binary
- ❌ : No Pact FFI Binaries currently built
- 🚧 : Awaiting testing
- ⬜️ : Not applicable

### Testing Matrix

ISA / OS           | Node Version | Windows      | Linux    | macOS  | FreeBSD | OpenBSD
------------------ | -------------|------------- | -------- | ------ | ------- | --------
x86_64 (AMD64)     |12.x           | ✅          | ✅     | ✅       | 🧪 🚧    |  ❌
x86_64 (AMD64)     |14.x           | ✅          | ✅     | ✅       | 🧪 🚧    |  ❌
x86_64 (AMD64)     |15.x           | ✅          | ✅     | ✅       | 🧪 🚧    |  ❌
x86_64 (AMD64)     |16.x           | ✅          | ✅     | ✅       | 🧪 🚧    |  ❌
x86_64 (AMD64)     |17.x           | ✅          | ✅     | ✅       | 🧪 🚧    |  ❌
x86_64 (AMD64)     |18.x           | ✅          | ✅     | ✅       | 🧪 🚧    |  ❌
x86_64 (AMD64)     |19.x           | ✅          | ✅     | ✅       | 🧪 🚧    |  ❌
x86_64 (AMD64)     |20.x           | ✅          | ✅     | ✅       | 🧪 🚧    |  ❌
ARM64 (AArch64) LE |12.x           | 🧪 ✅       | ✅     | ✅       | 🚧       |  ❌
ARM64 (AArch64) LE |14.x           | 🧪 ✅       | ✅     | ✅       | 🚧       |  ❌
ARM64 (AArch64) LE |15.x           | 🧪 ✅       | ✅     | ✅       | 🚧       |  ❌
ARM64 (AArch64) LE |16.x           | 🧪 ✅       | ✅     | ✅       | 🚧       |  ❌
ARM64 (AArch64) LE |17.x           | 🧪 ✅       | ✅     | ✅       | 🚧       |  ❌
ARM64 (AArch64) LE |18.x           | 🧪 ✅       | ✅     | ✅       | 👷🏽       |  ❌
ARM64 (AArch64) LE |19.x           | 🧪 ✅       | ✅     | ✅       | 🚧       |  ❌
ARM64 (AArch64) LE |20.x           | 🧪 ✅       | ✅     | ✅       | 🚧       |  ❌
ARM32 LE [^2]      |12.x           | ⬜️          |🧪 👷🏽   | ⬜️       | ❌       |  ❌
ARM32 LE [^2]      |14.x           | ⬜️          |🧪 👷🏽   | ⬜️       | ❌       |  ❌
ARM32 LE [^2]      |15.x           | ⬜️          |🧪 👷🏽   | ⬜️       | ❌       |  ❌
ARM32 LE [^2]      |16.x           | ⬜️          |🧪 👷🏽   | ⬜️       | ❌       |  ❌
ARM32 LE [^2]      |17.x           | ⬜️          |🧪 👷🏽   | ⬜️       | ❌       |  ❌
ARM32 LE [^2]      |18.x           | ⬜️          |🧪 👷🏽   | ⬜️       | ❌       |  ❌
ARM32 LE [^2]      |19.x           | ⬜️          |🧪 👷🏽   | ⬜️       | ❌       |  ❌
ARM32 LE [^2]      |20.x           | ⬜️          |🧪 👷🏽   | ⬜️       | ❌       |  ❌
x86 (IA32) [^1]    |12.x           | 🧪 🚧       |🧪 🚧   | ⬜️       | 🧪 🚧    |  🧪 🚧
x86 (IA32) [^1]    |14.x           | 🧪 🚧       |🧪 🚧   | ⬜️       | 🧪 🚧    |  🧪 🚧
x86 (IA32) [^1]    |15.x           | 🧪 🚧       |🧪 🚧   | ⬜️       | 🧪 🚧    |  🧪 🚧
x86 (IA32) [^1]    |16.x           | 🧪 🚧       |🧪 🚧   | ⬜️       | 🧪 🚧    |  🧪 🚧
x86 (IA32) [^1]    |17.x           | 🧪 🚧       |🧪 🚧   | ⬜️       | 🧪 🚧    |  🧪 🚧
x86 (IA32) [^1]    |18.x           | 🧪 🚧       |🧪 🚧   | ⬜️       | 🧪 🚧    |  🧪 🚧
x86 (IA32) [^1]    |19.x           | 🧪 🚧       |🧪 🚧   | ⬜️       | 🧪 🚧    |  🧪 🚧
x86 (IA32) [^1]    |20.x           | 🧪 🚧       |🧪 🚧   | ⬜️       | 🧪 🚧    |  🧪 🚧
RISC-V 64 [^3]     |ANY            |  ⬜️         |❌      | ⬜️       | ❌       |  ❌
