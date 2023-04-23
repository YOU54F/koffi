ARG NODE_VERSION
FROM node:${NODE_VERSION}-slim
RUN apt update --yes && apt install --yes curl
WORKDIR /app
COPY script /app/script
COPY package.json .
COPY FFI_VERSION .
COPY test.js /app
RUN script/download-libs.sh
RUN npm install
CMD ["sh","-c","npm run compile && npm test"]
