const { getDoc, addDoc } = require('../lib/dal-helper')
const { getPeople } = require('../dal')
const slugify = require('slugify')

module.exports = app => {
  app.get('/people', (req, res) => {
    getPeople({
      include_docs: true,
      startkey: 'person_',
      endkey: 'person_\ufff0'
    }).then(people => res.send(people))
  })
  app.get('/people/:id', (req, res) => {
    getDoc(req.params.id).then(doc => res.send(doc))
  })
  app.post('/people', (req, res) => {
    req.body.type = 'person'
    req.body._id = `${req.body.type}_${slugify(req.body.shortName, {
      lower: true
    })}`
    addDoc(req.body).then(doc => res.send(doc))
  })
}
