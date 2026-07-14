const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

// ❗ IMPORTANT: http server create karo
const server = http.createServer(app);

// ❗ Socket.IO attach karo
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// ---------------- SOCKET LOGIC ----------------
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sendMessage", (data) => {
    io.emit("receiveMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// ---------------- EXISTING ROUTES ----------------
// your routes here (student, teacher, course, user etc.)

// ❗ app.listen ki jagah server.listen use karo
server.listen(5000, () => {
  console.log("Server running on port 5000");
});