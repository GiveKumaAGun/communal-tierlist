const express = require("express");
const app = express();

app.use(express.urlencoded());


//knex
const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings

app.set('view engine', 'html');

app.use(express.static(__dirname + '/'));

app.get('/', async (req, res) => {
  console.log('test')

  res.sendFile(__dirname + '/index.html')
})

app.post('/rankings/:topic', async (req, res) => {
  console.log('test')
  console.log(req.body)
  res.sendFile(__dirname + '/tierlist.html')
})

app.get('/rankings/:topic', async (req, res) => {
  //INCOMPLETE. GEt AVERAGE SCOreS

  let average = await database('rankings').select('*').from(req.params.topic).then(rows => rows)
    console.log(average)
    res.sendFile(__dirname + '/tierlist.html')
  })

app.get('/rankings/:topic/:ratingId', async (req, res) => {
  let ratings = await database('rankings').select('*').from(req.params.topic).where('id', req.params.ratingId).then(rows => rows)
})

app.patch('/rankings/:topic/:ratingId', async (req, res) => {

})

app.delete('/rankings/:topic/:ratingId', async (req, res) => {

})



const port = process.env.port || 9999;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})
