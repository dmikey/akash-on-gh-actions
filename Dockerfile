# Container image that runs your code
FROM ghcr.io/ovrclk/akash:0.12.2-rc1

WORKDIR /
RUN apt-get update && apt-get -y install curl nodejs npm
COPY package.json ./package.json
COPY main.js ./main.js
RUN npm i

ENTRYPOINT ["/main.js"]