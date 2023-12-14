// index.ts
import { Server, Socket } from "socket.io";
const socketio = require("socket.io");

import initializeUserSocket from "./message";

export function initializeSockets(server: Server) {
  const io = socketio(server, {
    cors: {
      origin: "*",
    },
  });

  initializeUserSocket(io);
}
