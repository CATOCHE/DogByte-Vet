const { getDoc, addDoc } = require('../lib/dal-helper')
const { getGlossary } = require('../dal')
const slugify = require('slugify')

module.exports = app => {
  app.get('/glossary', (req, res) => {
    getGlossary({
      include_docs: true,
      startkey: 'entry_',
      endkey: 'entry_\ufff0'
    }).then(glossary => res.send(glossary))
  })
  app.get('/glossary/:id', (req, res) => {
    getDoc(req.params.id).then(doc => res.send(doc))
  })
  app.post('/glossary', (req, res) => {
    req.body.type = 'entry'
    req.body._id = `${req.body.type}_${slugify(req.body.shortName, {
      lower: true
    })}`
    addDoc(req.body).then(doc => res.send(doc))
  })
}
