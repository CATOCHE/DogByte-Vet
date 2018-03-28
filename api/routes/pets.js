const { getPets, getPet, addPet, deletePet, updatePet } = require('../dal')
const pkGen = require('../lib/pkGen')

module.exports = app => {
  app.get('/pets', (req, res) => {
    getPets({
      include_docs: true,
      startkey: 'pet_',
      endkey: 'pet_\ufff0'
    })
      .then(pets => res.send(pets))
      .catch(err => console.log(err))
  })
  app.get('/pets/:id', (req, res) => {
    getPet(req.params.id).then(pet => res.send(pet))
  })

  app.post('/pets', (req, res) => {
    addPet(req.body)
      .then(addedPet => res.status(201).send(addedPet))
      .catch(err => console.log('Post Pet ERROR', err))
  })

  app.delete('/pets/:id', (req, res) => {
    deletePet(req.params.id)
      .then(deletedResult => res.status(200).send(deletedResult))
      .catch(err => console.log('Could not delete item.'))
  })
  app.put('/pets/:id', (req, res) => {
    updatePet(req.body)
      .then(updatedPet => res.status(200).send(updatedPet))
      .catch(err => console.log('Could not update item.'))
  })
}
