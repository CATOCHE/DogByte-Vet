require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const pets = require('./routes/pets')
const people = require('./routes/people')

app.use(bodyParser.json())
app.use(cors({ credentials: true }))

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Dogbyte Veterinary API.')
})

pets(app)
people(app)

app.listen(PORT, () => console.log('VETERINARY API UP!! on ', PORT))
