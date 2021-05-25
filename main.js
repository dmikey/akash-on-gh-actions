#!/usr/bin/env node
const { exec } = require("child_process");

exec(
  `echo ${process.argv[2]} >> /tmp/akash_wallet_key.txt`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    exec(`akash version`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      exec(
        `yes ${process.argv[3]} | akash keys import "AKASH_GROWTH_GROUP" /tmp/akash_wallet_key.txt`,
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
    });
  }
);
