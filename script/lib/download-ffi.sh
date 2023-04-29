#!/bin/bash -eu
LIB_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")"; pwd)" # Figure out where the script is running
. "${LIB_DIR}/robust-bash.sh"
. "${LIB_DIR}/download-file.sh"

require_binary curl
require_binary gunzip

require_env_var FFI_VERSION

BASEURL=https://github.com/you54f/pact-reference/releases/download
FFI_DIR="${LIB_DIR}/../../ffi"

# if [[ $(find "${FFI_DIR}" -name "${FFI_VERSION}*") ]]; then
#   log "Skipping download of FFI libraries ${FFI_VERSION}, as they exist"
#   exit 0
# fi

warn "Cleaning ffi directory $FFI_DIR"
rm -rf "$FFI_DIR"
mkdir -p "$FFI_DIR/win32-x64"
mkdir -p "$FFI_DIR/linux-x64"
mkdir -p "$FFI_DIR/darwin-x64"
mkdir -p "$FFI_DIR/win32-arm64"
mkdir -p "$FFI_DIR/linux-arm64"
mkdir -p "$FFI_DIR/darwin-arm64"

function download_ffi_file {
  if [ -z "${1:-}" ]; then
    error "${FUNCNAME[0]} requires the filename to download"
    exit 1
  fi
  if [ -z "${2:-}" ]; then
    error "${FUNCNAME[0]} requires the output filename to download"
    exit 1
  fi
  FFI_FILENAME="$1"
  OUTPUT_FILENAME="$2"

  URL="${BASEURL}/libpact_ffi-${FFI_VERSION}/${FFI_FILENAME}"
  DOWNLOAD_LOCATION="$FFI_DIR/${OUTPUT_FILENAME}"

  log "Downloading ffi $FFI_VERSION for $FFI_FILENAME"
  download_to "$URL" "$DOWNLOAD_LOCATION"
  debug_log " ... downloaded to '$DOWNLOAD_LOCATION'"
}

function download_ffi {
  if [ -z "${1:-}" ]; then
    error "${FUNCNAME[0]} requires the environment filename suffix"
    exit 1
  fi
  SUFFIX="$1"
  PREFIX="${2:-}"
  OUTPUT_FILENAME="${3:-}"

  download_ffi_file "${PREFIX}pact_ffi-$SUFFIX" "${OUTPUT_FILENAME}"
  debug_log " ... unzipping '$DOWNLOAD_LOCATION'"
  gunzip "$DOWNLOAD_LOCATION"
}

# detected_os=$(uname -sm)
# echo detected_os = $detected_os
# case ${detected_os} in
# 'Darwin arm64')
#     echo "downloading of osx aarch64 FFI libs"
#     os='osx-aarch64'
#     ;;
# 'Darwin x86' | 'Darwin x86_64' | "Darwin"*)
#     echo "downloading of osx x86_64 FFI libs"
#     download_ffi "osx-aarch64-apple-darwin.dylib.gz" "lib" "libpact_ffi.dylib.gz"
#     download_ffi "osx-x86_64.dylib.gz" "lib" "libpact_ffi.dylib.gz"
#     download_ffi "linux-aarch64.so.gz" "lib" "libpact_ffi.so.gz"
#     download_ffi "linux-x86_64.so.gz" "lib" "libpact_ffi.so.gz"
#     download_ffi "windows-x86_64.dll.gz" "" "pact_ffi.dll.gz"
#     os='osx-x86_64'
#     ;;
# "Linux aarch64"* | "Linux arm64"*)
#     echo "downloading of linux aarch64 FFI libs"
#     os='linux-aarch64'
#     ;;
# 'Linux x86_64' | "Linux"*)
#     echo "downloading of linux x86_64 FFI libs"
#     os='linux-x86_64'
#     ;;
# "Windows"* | "MINGW64"*)
#     echo "downloading of windows x86_64 FFI libs"
#     download_ffi "windows-x86_64.dll.lib.gz" "" "pact_ffi.dll.lib.gz"
#     os='win32'
#     ;;
#   *)
#   echo "Sorry, you'll need to install the pact-ruby-standalone manually."
#   echo "or add your os to the list"
#   exit 1
#     ;;
# esac

download_ffi_file "pact.h" "pact.h"
download_ffi_file "pact-cpp.h" "pact-cpp.h"

download_ffi "x86_64-apple-darwin.dylib.gz" "lib" "darwin-x64/libpact_ffi.dylib.gz"
download_ffi "aarch64-apple-darwin.dylib.gz" "lib" "darwin-arm64/libpact_ffi.dylib.gz"

# download_ffi "freebsd-x86.so.gz" "lib" "freebsd-ia32/libpact_ffi.so.gz"
# download_ffi "freebsd-x86_64.so.gz" "lib" "freebsd-x64/libpact_ffi.so.gz"

# download_ffi "linux-x86.so.gz" "lib" "linux-ia32/libpact_ffi.so.gz"
download_ffi "x86_64-unknown-linux-gnu.so.gz" "lib" "linux-x64/libpact_ffi.so.gz"
download_ffi "aarch64-unknown-linux-gnu.so.gz" "lib" "linux-arm64/libpact_ffi.so.gz"
# download_ffi "linux-arm7.so.gz" "lib" "linux-arm32hf/libpact_ffi.so.gz"
# download_ffi "linux-riscv64hf64.so.gz" "lib" "linux-riscv64hf64/libpact_ffi.so.gz"

# download_ffi "openbsd-x86.so.gz" "lib" "openbsd-ia32/libpact_ffi.so.gz"
# download_ffi "openbsd-x86_64.so.gz" "lib" "openbsd-x64/libpact_ffi.so.gz"

# download_ffi "windows-x86.dll.gz" "" "win32-ia32/pact_ffi.dll.gz"
download_ffi "x86_64-pc-windows-msvc.dll.gz" "" "win32-x64/pact_ffi.dll.gz"
download_ffi "aarch64-pc-windows-msvc.dll.gz" "" "win32-arm64/pact_ffi.dll.gz"
# Write readme in the ffi folder
cat << EOF > "$FFI_DIR/README.md"
# FFI binaries

This folder is automatically populated during build by /script/download-ffi.sh
EOF
