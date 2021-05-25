#!/usr/bin/env node
const { exec } = require("child_process");
const fs = require("fs");

exec(
  `string=${process.env.WALLET_KEY_PASS}; echo echo \${#string}`,
  (err, stdout, stderr) => {
    console.log({ stdout, stderr });
  }
);
