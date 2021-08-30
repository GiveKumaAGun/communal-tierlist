const express = require("express");
const app = express();
const knex = require('../knex.js')
app.use(express.static('./'))

app.get('/', async (req, res) => {
  console.log('test')

  res.sendFile(__dirname + '/index.html')
})

app.get('/:title', (req, res) => {
  res.send()
})





const port = process.env.port || 9999;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})
