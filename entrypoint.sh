#!/bin/sh -l

export AKASH_NET="https://raw.githubusercontent.com/ovrclk/net/master/mainnet"
export AKASH_VERSION="$(curl -s "$AKASH_NET/version.txt")"
export AKASH_NODE="$(curl -s "$AKASH_NET/rpc-nodes.txt" | shuf -n 1)"

echo "::set-output name=cli-version::"$(akash version)
echo "::set-output name=network::"$AKASH_NET
echo "::set-output name=network-version::"$AKASH_VERSION
echo "::set-output name=network-node::"$AKASH_NODE

echo $1 $2 $3

echo "$1" >> /tmp/akash_wallet_key.txt

yes $2 | akash keys import $3 /tmp/akash_wallet_key.txt

akash keys show "$3" -a