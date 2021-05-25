#!/usr/bin/env node
const { exec } = require("child_process");
const fs = require("fs");
fs.writeFileSync("/tmp/akash_wallet_key.txt", process.argv[2]);

// console.log(process.argv);
// console.log(process.argv[3].length);
// console.log(process.argv[3].length);

exec(`akash version `, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
});

exec(
  `yes ${process.argv[3]} | akash keys import AKASH_GROWTH_GROUP /tmp/akash_wallet_key.txt`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(stdout);
  }
);
