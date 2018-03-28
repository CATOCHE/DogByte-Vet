require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(`${process.env.COUCH_URL}${process.env.COUCH_DBNAME}`)

//console.log(process.env.COUCHDB_URL)

db.bulkDocs([
  {
    _id: 'resource_one80-place',
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'One80 Place',
    formalName: 'One80 Place',
    shortDesc: 'Homeless service provider with daily hot meals.',
    purpose:
      'One80 Place is the largest homeless service provider in South Carolina, serving a hot meal daily in the Charleston-area homeless shelter and the Palmetto House shelter in Summerville, SC. One80 Place staff are certified to oversee comprehensive case management for all clients, including military veterans, civilians, individuals and families.',
    website: 'www.one80place.org',
    primaryPhone: '843-723-9477',
    contacts: [
      {
        name: 'Selena Wilson',
        office: null,
        title: 'Chief Program Officer',
        phone: '843-723-9477',
        email: 'swilson@one80place.org',
        isPrimary: true
      }
    ],
    addresses: [
      {
        location: 'Charleston Homeless Shelter',
        street: '35 Walnut Street',
        city: 'Charleston',
        state: 'SC',
        zip: '29401',
        isPrimary: true
      }
    ]
  },
  {
    _id: 'resource_church-mobilization-hub',
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'Church Mobilization Hub',
    formalName: 'Church Mobilization Hub of Charleston',
    shortDesc:
      'Ministry and marketplace partners helping to revitalize churches.',
    purpose:
      'The Hub is a team of ministry and marketplace partners who work to help vitalize and revitalize churches in the Charleston area through a relational process of formation and mobilization that leads to Gospel saturation, and city-wide church collaboration.',
    website: 'www.thehubcharleston.com',
    primaryPhone: '843-345-6370',
    contacts: [
      {
        name: 'Craig Tuck',
        office: null,
        title: 'Strategic Development',
        phone: '843-345-6370',
        email: 'craig@thehubcharleston.com ',
        isPrimary: true
      }
    ],
    addresses: [
      {
        location: null,
        street: null,
        city: 'Charleston',
        state: 'SC',
        zip: '29401',
        isPrimary: true
      }
    ]
  },
  {
    _id: 'resource_origin-sc',
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'Origin SC',
    formalName: 'Origin SC',
    shortDesc: 'Provides financial assistance and stability to families.',
    purpose:
      'Family Services, Inc. has existed since 1888, bringing hope and quality customer service to the Charleston community and beyond. Our goal is to empower individuals and families to achieve financial independence and sustainability at a cost comparable to industry standards.',
    website: 'www.originsc.org',
    primaryPhone: '843-735-7802',
    contacts: [
      {
        name: 'David Geer',
        office: null,
        title: 'CEO',
        phone: '843-735-7802',
        email: 'dgeer@originsc.org',
        isPrimary: true
      }
    ],
    addresses: [
      {
        location: null,
        street: '4925 Lacross Road',
        city: 'North Charleston',
        state: 'SC',
        zip: '29406',
        isPrimary: true
      }
    ]
  },
  {
    _id: 'resource_fleet-and-family-support-center',
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'Family Support',
    formalName: 'Fleet & Family Support Center (FFSC)',
    shortDesc: 'assist finding skills and knowledge for transition',
    purpose:
      "The Fleet and Family Support Center (FFSC), Naval Weapons Station is the military community's primary resource for information and services. We are recognized by commands in the area as vital to the success of their mission. We serve with pride and distinction and are renowned for our superb performance. The Fleet and Family support Center assists all Reserves, Active Duty, National Guard, retired veterans and civilian employees regardless of service branch. The Transition Assistance Program (TAP) assists and prepares members separating, retiring, or demobilizing service members and their families with skills and knowledge to facilitate a successful transition from life in the military to the civilian sector. Each Family Readiness Center is staffed to provide personalized assistance for all transition related needs of armed services members.",
    website:
      'http://www.jbcharleston.com/youth-and-family/weapons-stations/fleet-a-family-support',
    primaryPhone: '843-794-7427 or 843-794-7840',
    contacts: [
      {
        name: null,
        office: 'Naval Weapons Station',
        title: null,
        phone: '843-794-7427 or 843-794-7840',
        email: null,
        isPrimary: true
      }
    ],
    addresses: [
      {
        location: '1005',
        street: 'Jefferson Ave.',
        city: 'Goose Creek',
        state: 'SC',
        zip: '29445',
        isPrimary: true
      }
    ]
  },
  {
    _id: 'resource_goodwill-industries-of-lower-south-carolina',
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'Goodwill',
    formalName: 'Goodwill Industries of Lower South Carolina',
    shortDesc: 'employment training, job placement vocational assessments...',
    purpose:
      'The Palmetto Goodwill mission is to help people “achieve their full potential through the dignity and power of work. This mission is achieved through employment training and job placement in 18 counties across South Carolina, helping recent graduates of work training programs face the challenges of preparing for the work force and maintaining steady employment to improve financial stability and well-being. Palmetto Goodwill staff offer assistance in career coaching, vocational assessment, skills training and job placement, case management,and training.',
    website: 'http://www.palmettogoodwill.org/',
    primaryPhone: '843-556-0072',
    contacts: [
      {
        name: 'Manish Mazyck',
        office: 'Palmetto Goodwill',
        title: 'Veteran Employment Specialist',
        phone: '843-556-0072',
        email: 'eborzendowski@palmettogoodwill.org',
        isPrimary: false
      }
    ],
    addresses: [
      {
        location: '2150',
        street: 'Eagle Drive',
        city: ' North Charleston',
        state: 'SC',
        zip: '29406',
        isPrimary: true
      }
    ]
  },
  {
    _id: "resource_my-sister's-house",
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: "My Sister's House",
    formalName: "My Sister's House, Inc",
    shortDesc: "women's shelter",
    purpose:
      'To provide a safe haven for women and children looking to escape the cycle of domestic violence and other forms of abuse. An emergency shelter is available 24 hours per day with 36 beds for women and children throughout Berkeley, Charleston, and Dorchester counties.',
    website: 'http://mysistershouse.org/',
    primaryPhone: '1-800-273-HOPE',
    contacts: [
      {
        name: null,
        office: null,
        title: null,
        phone: '843-767-4069 or 800-767-4069',
        email: 'hope@mysistershouse.com',
        isPrimary: false
      }
    ],
    addresses: [
      {
        location: null,
        street: null,
        city: 'Charleston',
        state: 'SC',
        zip: null,
        isPrimary: true
      }
    ]
  },
  {
    _id: 'resource_transition-assistance-program',
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'Transition Assistance Program',
    formalName:
      'Airman & Family Readiness Center-Transition Assistance Program (TAP)',
    shortDesc: 'Walk in clinic, re-housing assistance',
    purpose:
      'The Airman & Family Readiness Center assists all Reserves, Active Duty, National Guard, retired veterans and civilian employees regardless of branch. The Transition Assistance Program (TAP) assists those associated specifically with the United States Air Force and prepares separating, retiring, and demobilizing service members and their families with skills and knowledge to facilitate a successful transition from life in the military to the civilian sector. The first step in the transition process is to complete the congressionally-mandated pre-separation counseling session, which provides detailed information on the various benefits and services available to separating members. Each Family Readiness Center is staffed to provide personalized assistance for all transition-related needs ofarmed services members.',
    website:
      'http://www.jbcharleston.com/youth-and-family/air-base/airman-a-family-readiness',
    primaryPhone: '843-963-7231',
    contacts: [
      {
        name: null,
        office: 'Building 500 Joint Base Charleston',
        title: null,
        phone: '843-963-7231',
        email: null,
        isPrimary: true
      }
    ],
    addresses: [
      {
        location: 'Building 500 Joint Base Charleston',
        street: '104 E. Simpson Street',
        city: 'Charleston',
        state: 'SC',
        zip: '29404',
        isPrimary: true
      }
    ]
  },
  {
    _id: 'resource_american-red-cross',
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'American Red Cross',
    formalName: 'American Red Cross of Lowcountry –SC',
    shortDesc: 'Emergency communication across the globe',
    purpose:
      'The American Red Cross provides emergency communication services to military (active duty, National Guard, Reserves, retired, and veterans) and their families, helping them locate and send messages to their loved ones across the globe. When service members return home, they have access to several programs and American Red Cross volunteers who are ready and willing to ease the transition from deployment or discharge into the civilian sector. Programs provided include, but are not limited to, emergency financialassistance referrals,disaster preparedness and response, reconnection and family mental health education, resiliency training to cope with the challenges of life in the military, and supportive transitional services for wounded soldiers and their family members. We also offer volunteer opportunities in all lines of service. To initiate an Emergency Communication Message, call (1-877-272-7337) when you need to contact a service member in the event of a family emergency.',
    website: 'http://www.redcross.org/what-we-do/support-military-families',
    primaryPhone: '843-764-2323',
    contacts: [
      {
        name: 'Jeanne Carmichae',
        office: '2424 City Hall Lane, Suite A',
        title: 'Manager',
        phone: '843-764-2323',
        email: 'Jeanne.Carmichael@redcross.org',
        isPrimary: true
      }
    ],
    addresses: [
      {
        location: 'Suite A',
        street: '2424 City Hall Lane,',
        city: 'North Charleston',
        state: 'SC',
        zip: '29406',
        isPrimary: true
      }
    ]
  },
  {
    _id: 'resource_ausa',
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'AUSA',
    formalName:
      'Association of the U.S. Army (AUSA), Charleston, SC Sub-Chapter of the Columbia SC Chapter',
    shortDesc: 'Skills for finding employment',
    purpose:
      'AUSA is a not-for-profit, professional, education organization devoted to helping troops, veterans, their families, and all of our armed services communities in the Low Country, SC. AUSA’s Charleston Sub-Chapter (of the Palmetto –Fort Jackson SC Chapter) helps troops and vets write resumes and cover letters, learn to network and interview effectively, follow up after interviews, and helps find suitable employment. The AUSA Charleston Sub-Chapter also adopts Army (Regular, Reserve, and National Guard) unitsto help identify short-term housing, ships supplies and comfort items to troops overseas, helps industries find reliable employees, hosts social events for troops and their families, distributes helpful publications for parents and spouses, and adopts thewidows and widowers of troops killed in the war on terror. ',
    website: 'www.ausa.org',
    primaryPhone: '843-276-7164',
    contacts: [
      {
        name: 'LTC W. Larry Dandridge',
        office: null,
        title: 'AUSA Charleston SC Chapter VP for Veterans Affairs',
        phone: '843-276-7164',
        email: 'LDandridge@earthlink.net',
        isPrimary: true
      }
    ],
    addresses: [
      {
        location: 'Suite A',
        street: '236 North Ainsdale Drive',
        city: 'North Charleston',
        state: 'SC',
        zip: '29414',
        isPrimary: true
      }
    ]
  },
  {
    _id: 'resource_navy-narine-corps-relief-society',
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'Navy-Marine Corps Relief Society',
    formalName: 'Navy-Marine Corps Relief Society',
    shortDesc: 'Interest-free loans, grants or a combination of the two.',
    purpose:
      'Potential clients must have an active military ID. The NMCRS is unable to assist non-military civilians. Agency provides military assistance to military personnel, their immediate family members who have ID, and military 20 (or more) year retirees. Interest-free loans, grants or a combination of the two may provide: Emergency transportation, Food, Funeral Expenses, Medical/Dental Needs, Rental & utility bill assistance. Eligibility for NMCRS services covers Sailors, Marines, and Army currently on active duty and their immediate families ONLY. Retirees with 20 or more years of active military service and widows of eligible service members and retirees also may qualify.',
    website: ' http://www.nmcrs.org/',
    primaryPhone: null,
    contacts: [
      {
        name: null,
        office: 'Naval Weapons Station',
        title: null,
        phone: '843-794-7662',
        email: null,
        isPrimary: true
      }
    ],
    addresses: [
      {
        location: 'Naval Weapons Station, Building 717',
        street: '1004 Jefferson Avenue',
        city: 'Goose Creek',
        state: 'SC',
        zip: '29445',
        isPrimary: true
      }
    ]
  },
  {
    _id: 'resource_nmcrs-visiting-nurse-program',
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'NMCRS Visiting Nurse Program',
    formalName:
      'Navy-Marine Corps Relief Society (NMCRS) Combat Casualty Assistance Visiting Nurse Program',
    shortDesc:
      'Registered nurses who make face to face visits at no cost to our service members, veterans and families.',
    purpose:
      'The Combat Casualty Assistance (CCA) Visiting Nurse Program is available for both active duty and veteran Marines and Sailors and families that have been affected by their Post 9-11 wartime service in Iraq or Afghanistan. Our program is unique in that we have registered nurses who are able to make face to face visits at no cost to our service members, veterans and families regardless of their location and discharge status.  Since the stresses of combat may not become obvious for many years, our nurses are available to help whenever needed, however we find the transition and reintegration phase to be most challenging for the Marine/Sailor and family.  Our program is also available to help anyone who may have lost a loved one as a result of their combat service. ',
    website: ' http://www.nmcrs.org/',
    primaryPhone: '843-577-5011',
    contacts: [
      {
        name: 'Kim Bradley',
        office: 'Naval Weapons Station',
        title: 'Combat Casualty Visiting Nurse',
        phone: '571-216-6329',
        email: 'Kim.Bradley@nmcrs.org',
        isPrimary: true
      }
    ],
    addresses: [
      {
        location: 'Naval Weapons Station, Building 717',
        street: '1004 Jefferson Avenue',
        city: 'Goose Creek',
        state: 'SC',
        zip: '29445',
        isPrimary: true
      }
    ]
  },
  {
    _id: 'resource_the-salvation-army',
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'The Salvation Army',
    formalName: 'The Salvation Army',
    shortDesc: 'The Salvation Army provides food, clothing and shelter.',
    purpose:
      'The Salvation Army provides food, clothing, shelter, financial assistance, and after school programs to all those in need without discrimination. ',
    website: 'http://www.salvationarmycarolinas.org/charleston/home',
    primaryPhone: '843-747-5271',
    contacts: [
      {
        name: null,
        office: null,
        title: null,
        phone: '843-747-5271',
        email: null,
        isPrimary: true
      }
    ],
    addresses: [
      {
        location: null,
        street: '4248 Dorchester Rd.',
        city: 'North Charleston',
        state: 'SC',
        zip: '29407',
        isPrimary: true
      }
    ]
  },
  {
    _id: 'resource_navy-narine-corps-relief-society',
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'Navy-Marine Corps Relief Society',
    formalName: 'Navy-Marine Corps Relief Society',
    shortDesc: 'Interest-free loans, grants or a combination of the two.',
    purpose:
      'Potential clients must have an active military ID. The NMCRS is unable to assist non-military civilians. Agency provides military assistance to military personnel, their immediate family members who have ID, and military 20 (or more) year retirees. Interest-free loans, grants or a combination of the two may provide: Emergency transportation, Food, Funeral Expenses, Medical/Dental Needs, Rental & utility bill assistance. Eligibility for NMCRS services covers Sailors, Marines, and Army currently on active duty and their immediate families ONLY. Retirees with 20 or more years of active military service and widows of eligible service members and retirees also may qualify.',
    website: ' http://www.nmcrs.org/',
    primaryPhone: null,
    contacts: [
      {
        name: null,
        office: 'Naval Weapons Station',
        title: null,
        phone: '843-794-7662',
        email: null,
        isPrimary: true
      }
    ],
    addresses: [
      {
        location: 'Naval Weapons Station, Building 717',
        street: '1004 Jefferson Avenue',
        city: 'Goose Creek',
        state: 'SC',
        zip: '29445',
        isPrimary: true
      }
    ]
  },
  {
    _id: 'resource_nmcrs-visiting-nurse-program',
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'NMCRS Visiting Nurse Program',
    formalName:
      'Navy-Marine Corps Relief Society (NMCRS) Combat Casualty Assistance Visiting Nurse Program',
    shortDesc:
      'Registered nurses who make face to face visits at no cost to our service members, veterans and families.',
    purpose:
      'The Combat Casualty Assistance (CCA) Visiting Nurse Program is available for both active duty and veteran Marines and Sailors and families that have been affected by their Post 9-11 wartime service in Iraq or Afghanistan. Our program is unique in that we have registered nurses who are able to make face to face visits at no cost to our service members, veterans and families regardless of their location and discharge status.  Since the stresses of combat may not become obvious for many years, our nurses are available to help whenever needed, however we find the transition and reintegration phase to be most challenging for the Marine/Sailor and family.  Our program is also available to help anyone who may have lost a loved one as a result of their combat service. ',
    website: ' http://www.nmcrs.org/',
    primaryPhone: '843-577-5011',
    contacts: [
      {
        name: 'Kim Bradley',
        office: 'Naval Weapons Station',
        title: 'Combat Casualty Visiting Nurse',
        phone: '571-216-6329',
        email: 'Kim.Bradley@nmcrs.org',
        isPrimary: true
      }
    ],
    addresses: [
      {
        location: 'Naval Weapons Station, Building 717',
        street: '1004 Jefferson Avenue',
        city: 'Goose Creek',
        state: 'SC',
        zip: '29445',
        isPrimary: true
      }
    ]
  },
  {
    _id: 'resource_the-salvation-army',
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'The Salvation Army',
    formalName: 'The Salvation Army',
    shortDesc: 'The Salvation Army provides food, clothing and shelter.',
    purpose:
      'The Salvation Army provides food, clothing, shelter, financial assistance, and after school programs to all those in need without discrimination. ',
    website: 'http://www.salvationarmycarolinas.org/charleston/home',
    primaryPhone: '843-747-5271',
    contacts: [
      {
        name: null,
        office: null,
        title: null,
        phone: '843-747-5271',
        email: null,
        isPrimary: true
      }
    ],
    addresses: [
      {
        location: null,
        street: '4248 Dorchester Rd.',
        city: 'North Charleston',
        state: 'SC',
        zip: '29407',
        isPrimary: true
      }
    ]
  }
])
