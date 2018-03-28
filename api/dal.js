const {
  allDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc
} = require('./lib/dal-helper')
const pkGen = require('./lib/pkGen')

const getPets = options => allDocs(options || { include_docs: true })

const getPet = petId => getDoc(petId)

const getPeople = options => allDocs(options || { include_docs: true })

const addPet = doc => {
  doc.type = 'pet'
  doc._id = pkGen(doc)
  return addDoc(doc)
}

const deletePet = doc => {
  return deleteDoc(doc)
}

const updatePet = doc => {
  return updateDoc(doc)
}

const dal = {
  getPet,
  getPets,
  getPeople,
  addPet,
  deletePet,
  updatePet
}

module.exports = dal
