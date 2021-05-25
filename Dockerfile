# Container image that runs your code
FROM ghcr.io/ovrclk/akash:0.12.2-rc1
# InstalL Curl
RUN apt-get update && apt-get -y install curl

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]