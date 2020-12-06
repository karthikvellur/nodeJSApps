var express = require('express');
var app = express();


process.env.MESSAGE_STYLE="uppercase";

console.log(process.env.MESSAGE_STYLE);

const msg = "Hello Json";

app.get("/json", (req, res) => {
  if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({
      message: msg.toUpperCase()
    });
  } else{
      res.json({
      message: msg
    });
  }
});

































 module.exports = app;
