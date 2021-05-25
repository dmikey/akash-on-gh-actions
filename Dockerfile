# Container image that runs your code
FROM ghcr.io/ovrclk/akash:0.12.2-rc1


RUN apt-get update && apt-get -y install curl nodejs npm
COPY main.js script.sh ./

ENTRYPOINT ["/script.sh"]