require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(`${process.env.COUCH_URL}${process.env.COUCH_DBNAME}`)

//console.log(process.env.COUCHDB_URL)

db.bulkDocs([
  {
    _id: 'person_owner_yarrow-peter',
    type: 'person',
    role: 'owner',
    firstName: 'Peter',
    lastName: 'Yarrow',
    Address: {
      street: '395 Ottawa Road',
      city: 'Summerville',
      state: 'SC',
      zipCode: '29457'
    },
    phone: '843-801-4387',
    email: 'peters@gmail.com'
  },
  {
    _id: 'person_vet_doolittle-john',
    type: 'person',
    role: 'vet',
    firstName: 'John',
    lastName: 'Dolittle',
    Address: {
      street: '2568 Willow Road',
      city: 'Ladson',
      state: 'SC',
      zipCode: '29456'
    },
    phone: '843-734-2891',
    email: 'DrDoolil@gmail.com'
  },
  {
    _id: 'person_owner_travers-mary',
    type: 'person',
    role: 'owner',
    firstName: 'Mary',
    lastName: 'Travers',
    Address: {
      street: '3146 Glenn Street',
      city: 'North Charleston',
      state: 'SC',
      zipCode: '29481'
    },
    phone: '843-351-9847',
    email: 'matrav@gmail.com'
  },
  {
    _id: 'person_owner_brown-charlie',
    type: 'person',
    role: 'owner',
    firstName: 'Charlie',
    lastName: 'Brown',
    Address: {
      street: '1 Pinetree Corners',
      city: 'St. Paul',
      state: 'MN',
      zipCode: '55111'
    },
    phone: '843-351-9847',
    email: 'CBrown@gmail.com'
  },
  {
    _id: 'person_owner_rogers-shaggy-norville',
    type: 'person',
    role: 'owner',
    firstName: 'Norville Shaggy',
    lastName: 'Rogers',
    Address: {
      street: 'Always the move.',
      city: '',
      state: '',
      zipCode: ''
    },
    phone: '800-478-3219',
    email: 'Shaggy@gmail.com'
  },
  {
    _id: 'person_owner_webster-granny-emma',
    type: 'person',
    role: 'owner',
    firstName: 'Granny Emma',
    lastName: 'Webster',
    Address: {
      street: 'Grannys Mansion',
      city: '',
      state: '',
      zipCode: ''
    },
    phone: '',
    email: 'Grannys@gmail.com'
  },
  {
    _id: 'pet_dog_snoopy',
    ownerID: 'person_owner_brown-charlie',
    name: 'Snoopy',
    dateOfBirth: '1968-08-10',
    breed: 'Beagle',
    markings: 'Large spot on the back.',
    gender: 'male',
    breeder: 'Daisy Hill Puppy Farm',
    dateAquired: '1968-10-03',
    type: 'dog',
    vaccinations: {
      vaccinationDate: '1969-03-24',
      ageAtVaccination: '7 months',
      vaccinationsGiven: {
        lymeDisease: 'true',
        distemper: 'true',
        adenovirus2: 'true',
        parvovirus: 'true',
        leptospira: 'true',
        coronavirus: 'true',
        bordetella: 'true',
        giardiasis: 'true',
        rabies: 'true'
      }
    }
  },
  {
    _id: 'pet_dog_scooby_doo',
    ownerID: 'person_owner_rogers-shaggy-norville',
    name: 'Scooby Doo',
    dateOfBirth: 'unknown',
    breed: 'Great Dane',
    markings: '',
    gender: 'male',
    breeder: 'unknown',
    dateAquired: '1969-07-03',
    type: 'dog',
    vaccinations: {
      vaccinationDate: '1969-09-17',
      ageAtVaccination: '10 weeks',
      vaccinationsGiven: {
        lymeDisease: 'true',
        distemper: 'true',
        adenovirus2: 'false',
        parvovirus: 'true',
        leptospira: 'false',
        coronavirus: 'true',
        bordetella: 'true',
        giardiasis: 'true',
        rabies: 'true'
      }
    }
  },
  {
    _id: 'pet_cat_garfield',
    ownerID: 'person_owner_arbuckel-jon',
    name: 'Garfield',
    dateOfBirth: 'unknown',
    breed: 'Exotic Shorthair',
    markings: 'Striped',
    gender: 'male',
    breeder: 'unknown',
    dateAquired: '1978-06-19',
    type: 'cat',
    vaccinations: {
      vaccinationDate: '1978-08-05',
      ageAtVaccination: '6 weeks',
      vaccinationsGiven: {
        leukemiaVirus: 'true',
        panleukopenia: 'true',
        calicivirus: 'true',
        rhinortracheitis: 'true',
        pneumonitis: 'true',
        fip: 'true',
        rabies: 'true'
      }
    }
  },
  {
    _id: 'pet_cat_sylvester',
    ownerID: 'person_owner_webster-granny-emma',
    name: 'Sylvester',
    dateOfBirth: 'unknown',
    breed: 'Tuxedo Cat',
    markings: 'White Chested',
    gender: 'male',
    breeder: 'unknown',
    dateAquired: '1941-09-20',
    type: 'cat',
    vaccinations: {
      vaccinationDate: '1942-02-14',
      ageAtVaccination: 'unknown',
      vaccinationsGiven: {
        leukemiaVirus: 'false',
        panleukopenia: 'false',
        calicivirus: 'true',
        rhinortracheitis: 'true',
        pneumonitis: 'true',
        fip: 'true',
        rabies: 'true'
      }
    }
  }
])
