const express = require('express');
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send({ greeting: 'hello' });
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
})