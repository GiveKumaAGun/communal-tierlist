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
  console.log(req.body.user)
  let [ratings] = await database('sandwich').select('*').from(req.params.topic).where('user', req.body.user)
  console.log(ratings)
  if (!ratings) {
    let id = await database(req.params.topic).returning('id').insert(req.body)
    console.log(id)
    res.redirect(`/rankings/${req.params.topic}/${id.toString()}`)
  } 
  
  res.redirect(`/rankings/${req.params.topic}/${ratings.id}`)
})

app.get('/rankings/:topic', async (req, res) => {
  //TO DO: Get the average of the scores and present them

  // let average = await database('sandwich').select('*').from(req.params.topic)
  //   console.log(average)
    res.sendFile(__dirname + '/tierlist.html')
  })

app.get('/rankings/:topic/:ratingId', async (req, res) => {
  let [ratings] = await database(req.params.topic).select('*').from(req.params.topic).where('id', req.params.ratingId)
  console.log(ratings)
  res.sendFile(__dirname + '/tierlist.html')

})

app.patch('/rankings/:topic/:ratingId', async (req, res) => {
  let [ratings] = await database(req.params.topic).select('*').from(req.params.topic).where('id', req.params.ratingId)

})

app.delete('/rankings/:topic/:ratingId', async (req, res) => {

})



const port = process.env.port || 9999;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})
