ARG NODE_VERSION
FROM node:${NODE_VERSION}-slim
## https://unix.stackexchange.com/a/743865 started failing on 12 and 15
RUN if [ "$NODE_VERSION" = "12.22.12" ] ; then  echo "deb http://archive.debian.org/debian stretch main" > /etc/apt/sources.list ; else echo 'not switching to archive'; fi
RUN if [ "$NODE_VERSION" = "15.14.0" ] ; then  echo "deb http://archive.debian.org/debian stretch main" > /etc/apt/sources.list ; else echo 'not switching to archive'; fi

RUN apt-get update --yes && apt install --yes curl
WORKDIR /app
COPY . .
RUN script/download-libs.sh
RUN npm install --ignore-scripts
CMD ["sh","-c","npm run compile && npm test"]
