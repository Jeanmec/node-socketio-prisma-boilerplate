import { Server, Socket } from "socket.io";

export default function initializeUserSocket(io: Server) {
  io.on("connection", (socket: Socket) => {
    socket.on("sendMessage", async (message) => {
      console.log("Message get by server : " + message);

      io.emit("receiveMessage", [{ message }]);
    });
  });
}
