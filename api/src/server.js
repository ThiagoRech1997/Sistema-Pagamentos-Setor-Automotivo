const express = require('express')
const routes = require('./routes')
const cors = require('cors')

require('./database')

const app = express()

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://yoursite.com");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(express.json())
app.use(routes)

app.use(cors())

app.listen(3001)

module.exports = app