require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");

import { initializeSockets } from "./sockets";

const port = process.env.PORT || 3003;

app.use(cors());

server.listen(port, () => {
  initializeSockets(server);
  console.log(`Server listening on localhost:${port}.`);
});
