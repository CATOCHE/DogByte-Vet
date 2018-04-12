require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(`${process.env.COUCH_URL}${process.env.COUCH_DBNAME}`)

//console.log(process.env.COUCHDB_URL)

db.bulkDocs([
  {
    _id: 'entry_rabies',
    type: 'entry',
    term: 'Rabies',
    definition:
      'Of all animal diseases, rabies is probably the most feared. The rabies virus attacks the brain and is always fatal. Most pets are exposed to rabies by bites from wild animals, particularly skunks, raccoons, bats and foxes. The disease can be transmitted to humans through the bite or scratch of an infected pet. Vaccination of all dogs and cats is the most effective means of control.'
  },

  {
    _id: 'entry_canine-distemper',
    type: 'entry',
    term: 'Canine Distemper',
    definition:
      'This highly contagious viral disease is found wherever dogs are found. It affects the respiratory and nervous system and is often fatal. Primary vaccination should begin at 6-12 weeks of age since dogs often contract the disease at an early age.'
  },

  {
    _id: 'entry_canine-parvovirus',
    type: 'entry',
    term: 'Canine Parvovirus (CPV)',
    definition:
      'This contagious viral disease usually causes severe diarrhea and vomiting in dogs of all ages, but is especially deadly in puppies.'
  },

  {
    _id: 'entry_canine-coronavirus',
    type: 'entry',
    term: 'Canine Coronavirus',
    definition:
      'Canine Coronavirus (CCV) is highly contagious and can weaken dogs by causing severe diarrhea and vomiting. The disease is sometimes confused with parvovirus. The two diseases may occur simultaneously, in which case symptoms are more severe.'
  },

  {
    _id: 'entry_canine-parainfluenza',
    type: 'entry',
    term: 'Canine Parainfluenza',
    definition:
      'This viral respiratory disease is often partly responsible for "kennel cough" in dogs. Infection can be severe in young puppies. Parainfluenza protection is often included in distemper-parvo vaccines.'
  },

  {
    _id: 'entry_canine-adenovirus-type-1-and-type-2',
    type: 'entry',
    term: 'Canine Adenovirus Type 1 and Type 2',
    definition:
      'Canine Adenovirus Type 1 infection causes infectious hepatitis which may lead to severe kidney damage. Type 2 can be a complicating factor in kennel cough. Vaccines are available that protect against both types of adenovirus.'
  },

  {
    _id: 'entry_canine-leptospirosis',
    type: 'entry',
    term: 'Canine Leptospirosis',
    definition:
      'Leptospirosis is a bacterial disease carried by many wild animals. A dog can contract the disease from infected animals or by drinking contaminated water. Yearly vaccination limits your dogs chances of acquiring the disease.'
  },

  {
    _id: 'entry_canine-bordetella',
    type: 'entry',
    term: 'Canine Bordetella',
    definition:
      'Frequently involved in kennel cough complex, this bacterial infection may occur simultaneously with distemper, adenovirus type 2 infection, parainfluenza and other respiratory infections.'
  },

  {
    _id: 'entry_canine-borreliosis',
    type: 'entry',
    term: 'Canine Borreliosis',
    definition:
      '(Lyme Disease).  Borreliosis, or Lyme Disease, is an infection caused by a bacteria which is spread primarily by the painless bite of an infected tick. Symptoms of Borreliosis in the dog include fever, lethargy, muscle stiffness, depression and lack of appetite. In more severe cases, lameness occurs as a result of severe musculoskeletal or arthritic type joint pain.'
  },

  {
    _id: 'entry_canine-feline-giardiasis',
    type: 'entry',
    term: 'Canine/Feline Giardiasis',
    definition:
      'Giardiasis in dogs, cats and humans is caused by a waterborne parasite called Giardia lamblia. The parasite is found in untreated water, i.e. puddles, ponds and creeks. Symptoms include severe diarrhea, weight loss, fever, dehydration and nausea.'
  },

  {
    _id: 'entry_feline-panleukopenia',
    type: 'entry',
    term: 'Feline Panleukopenia',
    definition:
      'Feline Panleukopenia, sometimes called "feline distemper", causes severe vomiting, diarrhea and dehydration. It is the most widespread disease of cats and causes high death loss, especially among kittens. The disease is caused by a virus and is highly contagious.'
  },

  {
    _id: 'entry_feline-rhinotracheitis',
    type: 'entry',
    term: 'Feline Rhinotracheitis',
    definition:
      'Rhinotracheitis infection is a widespread respiratory disease caused by a virus. It is most severe in small kittens and can cause profuse discharge from the eyes and nose.'
  },

  {
    _id: 'entry_feline-calicivirus',
    type: 'entry',
    term: 'Feline Calicivirus',
    definition:
      'Calicivirus infection causes a variety of symptoms including fever, excess salivation and mouth or tongue ulcers. It is usually less fatal than rhinotracheitis or panleukopenia.'
  },

  {
    _id: 'entry_feline-pneumonitis',
    type: 'entry',
    term: 'Feline Pneumonitis',
    definition:
      'Respiratory infection with symptoms resembling feline viral rhinotracheitis. The disease is caused by the organism Chlamydia psittaci and can be complicated by associated bacterial infections.'
  },
  {
    _id: 'entry_feline-leukemia',
    type: 'entry',
    term: 'Feline Leukemia',
    definition:
      'Feline Leukemia is a form of cancer in cats which is usually fatal. The disease, caused by a virus, can lead to tumor growth nearly anywhere in the body as well as a variety of other symptoms. Infected cats are unable to resist other diseases and may die from associated infections. Testing for the disease is recommended prior to initiating a vaccination program.'
  },

  {
    _id: 'entry_feline-infectious-peritonitis',
    type: 'entry',
    term: 'Feline Infectious Peritonitis',
    definition:
      'FIP is a disease caused by a coronavirus. The virus is spread by direct cat-to-cat contact or by contact with contaminated surfaces. There are 2 manifestations of the disease, wet and dry, and both have nonspecific symptoms such as intermittent inappetence, depression, rough hair coat, weight loss, and fever. There is no cure and the disease is considered fatal.'
  },

  {
    _id: 'person_owner_yarrow-peter',
    type: 'person',
    role: 'owner',
    firstName: 'Peter',
    lastName: 'Yarrow',
    street: '395 Ottawa Road',
    city: 'Summerville',
    state: 'SC',
    zipCode: '29457',
    phone: '843-801-4387',
    email: 'peters@gmail.com'
  },
  {
    _id: 'person_vet_doolittle-john',
    type: 'person',
    role: 'vet',
    firstName: 'John',
    lastName: 'Dolittle',
    street: '2568 Willow Road',
    city: 'Ladson',
    state: 'SC',
    zipCode: '29456',
    phone: '843-734-2891',
    email: 'DrDoolil@gmail.com'
  },
  {
    _id: 'person_owner_travers-mary',
    type: 'person',
    role: 'owner',
    firstName: 'Mary',
    lastName: 'Travers',
    street: '3146 Glenn Street',
    city: 'North Charleston',
    state: 'SC',
    zipCode: '29481',
    phone: '843-351-9847',
    email: 'matrav@gmail.com'
  },
  {
    _id: 'person_owner_brown-charlie',
    type: 'person',
    role: 'owner',
    firstName: 'Charlie',
    lastName: 'Brown',
    street: '1 Pinetree Corners',
    city: 'St. Paul',
    state: 'MN',
    zipCode: '55111',
    phone: '843-351-9847',
    email: 'CBrown@gmail.com'
  },
  {
    _id: 'person_owner_rogers-shaggy-norville',
    type: 'person',
    role: 'owner',
    firstName: 'Norville Shaggy',
    lastName: 'Rogers',
    street: 'always on the move...',
    city: '',
    state: '',
    zipCode: '',
    phone: '800-478-3219',
    email: 'Shaggy@gmail.com'
  },
  {
    _id: 'person_owner_webster-granny-emma',
    type: 'person',
    role: 'owner',
    firstName: 'Granny Emma',
    lastName: 'Webster',
    street: 'Grannys Mansion',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: 'Grannys@gmail.com'
  },
  {
    name: 'Snoopy',
    type: 'pet',
    species: 'dog',
    _id: 'pet_dog_snoopy',
    ownerID: 'person_owner_brown-charlie',
    dateOfBirth: '1968-08-10',
    breed: 'Beagle',
    markings: 'Large spot on the back.',
    gender: 'male',
    breeder: 'Daisy Hill Puppy Farm',
    dateAquired: '1968-10-03',
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
    },
    labTests: [
      {
        date: '',
        type: '',
        result: '',
        injection: '',
        coments: ''
      }
    ],
    surgicalHistory: [
      {
        date: '',
        comments: ''
      }
    ],
    rabiesTag: {
      date: '',
      tagNumber: '',
      comments: ''
    }
  },
  {
    name: 'Scooby Doo',
    type: 'pet',
    species: 'dog',
    _id: 'pet_dog_scooby-doo',
    ownerID: 'person_owner_rogers-shaggy-norville',
    dateOfBirth: '1969-04-16',
    breed: 'Great Dane',
    markings: '',
    gender: 'male',
    breeder: 'unknown',
    dateAquired: '1969-07-03',
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
    },
    labTests: [
      {
        date: '',
        type: '',
        result: '',
        injection: '',
        coments: ''
      }
    ],
    surgicalHistory: [
      {
        date: '',
        comments: ''
      }
    ],
    rabiesTag: {
      date: '',
      tagNumber: '',
      comments: ''
    }
  },
  {
    name: 'Garfield',
    type: 'pet',
    species: 'cat',
    _id: 'pet_cat_garfield',
    ownerID: 'person_owner_arbuckel-jon',
    dateOfBirth: '1978-04-06',
    breed: 'Exotic Shorthair',
    markings: 'Striped',
    gender: 'male',
    breeder: 'unknown',
    dateAquired: '1978-06-19',
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
    },
    labTests: [
      {
        date: '',
        type: '',
        result: '',
        injection: '',
        coments: ''
      }
    ],
    surgicalHistory: [
      {
        date: '',
        comments: ''
      }
    ],
    rabiesTag: {
      date: '',
      tagNumber: '',
      comments: ''
    }
  },
  {
    name: 'Sylvester',
    type: 'pet',
    species: 'cat',
    _id: 'pet_cat_sylvester',
    ownerID: 'person_owner_webster-granny-emma',
    dateOfBirth: '1941-07-28',
    breed: 'Tuxedo Cat',
    markings: 'White Chested',
    gender: 'male',
    breeder: 'unknown',
    dateAquired: '1941-09-20',
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
    },
    labTests: [
      {
        date: '',
        type: '',
        result: '',
        injection: '',
        coments: ''
      }
    ],
    surgicalHistory: [
      {
        date: '',
        comments: ''
      }
    ],
    rabiesTag: {
      date: '',
      tagNumber: '',
      comments: ''
    }
  }
])

// ## Lab Test Data
//
// As a veterinarian, I want to update a pet's lab tests with the following information:
//
// - Lab Test ID - Primary Key. Represented as either an `_id` key in CouchDB.  `ID` table column MySQL database.
// - Pet ID
// - Date
// - Lab Test Type (Heartworm, Leukemia/FIV, Lyme Disease, Deworming)
// - Test Result (Positive or Negative)
// - Injection (True or False)
// - Comments
//
// ## Medical and Surgical History Data
//
// As a veterinarian, I want to update a pet's medical and surgical history with the following information:
// - History ID - Primary Key. Represented as either an `_id` key in CouchDB.  `ID` table column MySQL database.
// - Pet ID
// - Date
// - Comments
//
// ## Rabies Tag Data
//
// As a veterinarian, I want to update a pet's rabies tag information:
//
// - Rabies Tag ID - Primary Key. Represented as either an `_id` key in CouchDB.  `ID` table column MySQL database.
// - Pet ID
// - Date
// - Tag Number
// - Comments
//
//
// ## Glossary
//
// - **Rabies**.  Of all animal diseases, rabies is probably the most feared. The rabies virus attacks the brain and is always fatal. Most pets are exposed to rabies by bites from wild animals, particularly skunks, raccoons, bats and foxes. The disease can be transmitted to humans through the bite or scratch of an infected pet. Vaccination of all dogs and cats is the most effective means of control.
// - **Canine Distemper**. This highly contagious viral disease is found wherever dogs are found. It affects the respiratory and nervous system and is often fatal. Primary vaccination should begin at 6-12 weeks of age since dogs often contract the disease at an early age.
// - **Canine Parvovirus (CPV)**.  This contagious viral disease usually causes severe diarrhea and vomiting in dogs of all ages, but is especially deadly in puppies.
// - **Canine Coronavirus (CCV)**.  Coronavirus is highly contagious and can weaken dogs by causing severe diarrhea and vomiting. The disease is sometimes confused with parvovirus. The two diseases may occur simultaneously, in which case symptoms are more severe.
// - **Canine Parainfluenza**.  This viral respiratory disease is often partly responsible for "kennel cough" in dogs. Infection can be severe in young puppies. Parainfluenza protection is often included in distemper-parvo vaccines.
// - **Canine Adenovirus Type 1 and Type 2**.  Canine Adenovirus Type 1 infection causes infectious hepatitis which may lead to severe kidney damage. Type 2 can be a complicating factor in kennel cough. Vaccines are available that protect against both types of adenovirus.
// - **Canine Leptospirosis**.  Leptospirosis is a bacterial disease carried by many wild animals. A dog can contract the disease from infected animals or by drinking contaminated water. Yearly vaccination limits your dog's chances of acquiring the disease.
// - **Canine Bordetella**. Frequently involved in kennel cough complex, this bacterial infection may occur simultaneously with distemper, adenovirus type 2 infection, parainfluenza and other respiratory infections.
// - **Canine Borreliosis** (Lyme Disease).  Borreliosis, or Lyme Disease, is an infection caused by a bacteria which is spread primarily by the painless bite of an infected tick. Symptoms of Borreliosis in the dog include fever, lethargy, muscle stiffness, depression and lack of appetite. In more severe cases, lameness occurs as a result of severe musculoskeletal or arthritic type joint pain.
// - **Canine/Feline Giardiasis**. Giardiasis in dogs, cats and humans is caused by a waterborne parasite called Giardia lamblia. The parasite is found in untreated water, i.e. puddles, ponds and creeks. Symptoms include severe diarrhea, weight loss, fever, dehydration and nausea.
// - **Feline Panleukopenia**.  Feline Panleukopenia, sometimes called "feline distemper", causes severe vomiting, diarrhea and dehydration. It is the most widespread disease of cats and causes high death loss, especially among kittens. The disease is caused by a virus and is highly contagious.
// - **Feline Rhinotracheitis**.  Rhinotracheitis infection is a widespread respiratory disease caused by a virus. It is most severe in small kittens and can cause profuse discharge from the eyes and nose.
// - **Feline Calicivirus**. Calicivirus infection causes a variety of symptoms including fever, excess salivation and mouth or tongue ulcers. It is usually less fatal than rhinotracheitis or panleukopenia.
// - **Feline Pneumonitis**.  Respiratory infection with symptoms resembling feline viral rhinotracheitis. The disease is caused by the organism Chlamydia psittaci and can be complicated by associated bacterial infections.
// - **Feline Leukemia** - Feline Leukemia is a form of cancer in cats which is usually fatal. The disease, caused by a virus, can lead to tumor growth nearly anywhere in the body as well as a variety of other symptoms. Infected cats are unable to resist other diseases and may die from associated infections. Testing for the disease is recommended prior to initiating a vaccination program.
// - **Feline Infectious Peritonitis (FIP)**.  FIP is a disease caused by a coronavirus. The virus is spread by direct cat-to-cat contact or by contact with contaminated surfaces. There are 2 manifestations of the disease, wet and dry, and both have nonspecific symptoms such as intermittent inappetence, depression, rough hair coat, weight loss, and fever. There is no cure and the disease is considered fatal.
//
