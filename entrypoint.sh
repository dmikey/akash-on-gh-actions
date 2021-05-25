#!/bin/sh -l

export AKASH_NET="https://raw.githubusercontent.com/ovrclk/net/master/mainnet"
export AKASH_VERSION="$(curl -s "$AKASH_NET/version.txt")"
export AKASH_NODE="$(curl -s "$AKASH_NET/rpc-nodes.txt" | shuf -n 1)"

echo "::set-output name=cli-version::"$(akash version)
echo "::set-output name=network::"$AKASH_NET
echo "::set-output name=network-version::"$AKASH_VERSION
echo "::set-output name=network-node::"$AKASH_NODE

export AKASH_WALLET_KEY_PASSWORD = $(echo $2 | sed 's/./& /g')
export AKASH_KEY_NAME = $(echo $3 | sed 's/./& /g')

echo "$1" >> /tmp/akash_wallet_key.txt

yes $AKASH_WALLET_KEY_PASSWORD | akash keys import $3 /tmp/akash_wallet_key.txt

akash keys show "$AKASH_KEY_NAME" -a