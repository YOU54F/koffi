#!/bin/bash

platform="linux"
for arch in arm64 amd64; do 
    for version in 12 14 16 18 19 20; do 
        docker build . \
            --build-arg=NODE_VERSION=$version \
            -t pact-$platform-$arch-$version \
            --platform=linux/$arch
        docker run --rm -it pact-$platform-$arch-$version 
    done
done