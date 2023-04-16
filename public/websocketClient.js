const ws = new WebSocket("ws://localhost:8001");

const clearMessage = () => {
  document.getElementById("message").value = "";
};

// 메세지 전송
const sendMessage = () => {
  const nickname = document.getElementById("nickname").value;
  const message = document.getElementById("message").value;
  const fullMessage = `${nickname}: ${message}`;

  ws.send(fullMessage);
  clearMessage();
};

// 메세지 수신
ws.onmessage = (event) => {
  const chat = document.createElement("div");
  const message = document.createTextNode(event.data);
  chat.appendChild(message);

  const chatLog = document.getElementById("chat-log");
  chatLog.appendChild(chat);
};
