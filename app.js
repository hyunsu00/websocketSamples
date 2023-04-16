const express = require("express");
const app = express();
require("./public/websocketServer");

app.use(express.static("public"));

app.listen(8000, () => {
  console.log(`Example app listening on port 8000`);
});


