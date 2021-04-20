var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello world and beyond!\n');
});

app.listen(8080, function () {
  console.log('web app listening on port 8080!');
});

