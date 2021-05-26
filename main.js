#!/usr/bin/env node
const { exec } = require("child_process");
const fs = require("fs");

fs.writeFileSync("/tmp/key.key", process.env.WALLET_KEY);

exec(
  `${process.env.WALLET_KEY_PASS} | akash keys import "TEST_KEY" /tmp/key.key`,
  (err, stdout, stderr) => {
    console.log({ stdout, stderr });
  }
);
