#!/usr/bin/env node
const { exec } = require("child_process");
const fs = require("fs");

fs.writeFileSync("/tmp/akash_wallet_key.txt", process.argv[2]);
fs.writeFileSync("/tmp/akash_wallet_key_pass.txt", process.argv[3]);

exec(
  `akash keys import "AKASH_GROWTH_GROUP" /tmp/akash_wallet_key.txt < "${process.argv[3]}"`,
  (err, stdout, stderr) => {
    console.log(err, stdout, stderr);
  }
);
