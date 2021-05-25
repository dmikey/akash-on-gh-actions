#!/usr/bin/env node
const { exec } = require("child_process");

console.log("hello world");
console.log(process.argv);
console.log(process.argv[3].length);
console.log(process.argv[3].length);

exec("echo " + process.argv[3], (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`${stdout}`.length);
});
