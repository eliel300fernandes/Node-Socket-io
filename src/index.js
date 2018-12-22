const express = require("express")();
const http = require("http").createServer(express);
const io = require("socket.io")(http);

express.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", socket => {
  console.log("new connection", socket.id);
  socket.on("mensagem", mensagem => {
    console.log(mensagem);
  });
});

http.listen(8080, function() {
  console.log("ouvindo a porta 3000");
});
