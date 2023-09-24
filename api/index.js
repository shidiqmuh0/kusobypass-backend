// api/index.js
const express = require("express");
const app = express();
const yourEndpoint = require("./endpoint"); // Import kode Express.js yang telah Anda ubah

app.use(yourEndpoint); // Gunakan kode Express.js sebagai middleware

module.exports = app;
