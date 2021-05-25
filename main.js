#!/usr/bin/env node
const { exec } = require("child_process");
const fs = require("fs");

fs.writeFileSync("/tmp/akash_wallet_key.txt", process.env.WALLET_KEY);
fs.writeFileSync("/tmp/akash_wallet_key_pass.txt", process.env.WALLET_KEY_PASS);

exec(
  `akash keys import "AKASH_GROWTH_GROUP" /tmp/akash_wallet_key.txt < /tmp/akash_wallet_key_pass.txt`,
  (err, stdout, stderr) => {
    console.log(err, stdout, stderr);
  }
);
