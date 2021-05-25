#!/usr/bin/env node
const { exec } = require("child_process");
const fs = require("fs");

console.log(btoa(process.env.WALLET_KEY_PASS));
