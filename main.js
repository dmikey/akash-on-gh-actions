#!/usr/bin/env node
const { exec } = require("child_process");
const fs = require("fs");

fs.writeFileSync("/tmp/akash_wallet_key.txt", process.env.WALLET_KEY);

exec(
  `yes ${process.env.WALLET_KEY_PASS} | akash keys import "AKASH_GROWTH_GROUP" /tmp/akash_wallet_key.txt`,
  (err, stdout, stderr) => {
    console.log(err, stdout, stderr);
  }
);
