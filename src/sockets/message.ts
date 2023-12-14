import { Server, Socket } from "socket.io";

export default function initializeSinSocket(io: Server) {
  io.on("connection", (socket: Socket) => {
    socket.on("sendMessage", async (message) => {
      console.log("Message get by server : " + message);

      io.emit("receiveSin", [{ text: message, like: 0, dislike: 0 }]);
    });
  });
}
