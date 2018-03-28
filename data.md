[Home](/) | [User Stories](/pet/)

# Pet Health Record Data

## Owner Biographical Data

- Owner ID - Primary Key. Represented as either an `_id` key in CouchDB.  `ID` table column MySQL database.
- Owner Name
- Owner Address
- Owner Phone

## Pet Biographical Data

  - Pet ID - Primary Key. Represented as either an `_id` key in CouchDB.  `ID` table column MySQL database.
  - Owner ID
  - Pet Name
  - Pet Date of Birth
  - Pet Breed
  - Pet Markings
  - Pet Gender
  - Breeder
  - Date Acquired

## Vaccination Record Data

As a veterinarian, I want to update a pet's vaccination record with the following information:

- Pet ID - Primary Key. Represented as either an `_id` key in CouchDB.  `ID` table column MySQL database.
- Vaccination Date
- Age at vaccination in either Weeks or Years
- Vaccination (Canine)
  - Lyme Disease  (True or False)
  - Distemper (True or False)
  - Adenovirus 2 (True or False)
  - Parvovirus (True or False)
  - Leptospira (True or False)
  - Coronavirus (True or False)
  - Bordetella (True or False)
  - Giardiasis (True or False)
- Vaccination (Feline)
  - Leukemia Virus (True or False)
  - Panleukopenia (True or False)
  - Calicivirus (True or False)
  - Rhinortracheitis (True or False)
  - Pneumonitis (True or False)
  - FIP (True or False)
- Other
  - Rabies (True or False)

## Lab Test Data

As a veterinarian, I want to update a pet's lab tests with the following information:

- Lab Test ID - Primary Key. Represented as either an `_id` key in CouchDB.  `ID` table column MySQL database.
- Pet ID
- Date
- Lab Test Type (Heartworm, Leukemia/FIV, Lyme Disease, Deworming)
- Test Result (Positive or Negative)
- Injection (True or False)
- Comments

## Medical and Surgical History Data

As a veterinarian, I want to update a pet's medical and surgical history with the following information:
- History ID - Primary Key. Represented as either an `_id` key in CouchDB.  `ID` table column MySQL database.
- Pet ID
- Date
- Comments

## Rabies Tag Data

As a veterinarian, I want to update a pet's rabies tag information:

- Rabies Tag ID - Primary Key. Represented as either an `_id` key in CouchDB.  `ID` table column MySQL database.
- Pet ID
- Date
- Tag Number
- Comments


## Glossary

- **Rabies**.  Of all animal diseases, rabies is probably the most feared. The rabies virus attacks the brain and is always fatal. Most pets are exposed to rabies by bites from wild animals, particularly skunks, raccoons, bats and foxes. The disease can be transmitted to humans through the bite or scratch of an infected pet. Vaccination of all dogs and cats is the most effective means of control.
- **Canine Distemper**. This highly contagious viral disease is found wherever dogs are found. It affects the respiratory and nervous system and is often fatal. Primary vaccination should begin at 6-12 weeks of age since dogs often contract the disease at an early age.
- **Canine Parvovirus (CPV)**.  This contagious viral disease usually causes severe diarrhea and vomiting in dogs of all ages, but is especially deadly in puppies.  
- **Canine Coronavirus (CCV)**.  Coronavirus is highly contagious and can weaken dogs by causing severe diarrhea and vomiting. The disease is sometimes confused with parvovirus. The two diseases may occur simultaneously, in which case symptoms are more severe.
- **Canine Parainfluenza**.  This viral respiratory disease is often partly responsible for "kennel cough" in dogs. Infection can be severe in young puppies. Parainfluenza protection is often included in distemper-parvo vaccines.
- **Canine Adenovirus Type 1 and Type 2**.  Canine Adenovirus Type 1 infection causes infectious hepatitis which may lead to severe kidney damage. Type 2 can be a complicating factor in kennel cough. Vaccines are available that protect against both types of adenovirus.
- **Canine Leptospirosis**.  Leptospirosis is a bacterial disease carried by many wild animals. A dog can contract the disease from infected animals or by drinking contaminated water. Yearly vaccination limits your dog's chances of acquiring the disease.
- **Canine Bordetella**. Frequently involved in kennel cough complex, this bacterial infection may occur simultaneously with distemper, adenovirus type 2 infection, parainfluenza and other respiratory infections.
- **Canine Borreliosis** (Lyme Disease).  Borreliosis, or Lyme Disease, is an infection caused by a bacteria which is spread primarily by the painless bite of an infected tick. Symptoms of Borreliosis in the dog include fever, lethargy, muscle stiffness, depression and lack of appetite. In more severe cases, lameness occurs as a result of severe musculoskeletal or arthritic type joint pain.
- **Canine/Feline Giardiasis**. Giardiasis in dogs, cats and humans is caused by a waterborne parasite called Giardia lamblia. The parasite is found in untreated water, i.e. puddles, ponds and creeks. Symptoms include severe diarrhea, weight loss, fever, dehydration and nausea.
- **Feline Panleukopenia**.  Feline Panleukopenia, sometimes called "feline distemper", causes severe vomiting, diarrhea and dehydration. It is the most widespread disease of cats and causes high death loss, especially among kittens. The disease is caused by a virus and is highly contagious.
- **Feline Rhinotracheitis**.  Rhinotracheitis infection is a widespread respiratory disease caused by a virus. It is most severe in small kittens and can cause profuse discharge from the eyes and nose.
- **Feline Calicivirus**. Calicivirus infection causes a variety of symptoms including fever, excess salivation and mouth or tongue ulcers. It is usually less fatal than rhinotracheitis or panleukopenia.
- **Feline Pneumonitis**.  Respiratory infection with symptoms resembling feline viral rhinotracheitis. The disease is caused by the organism Chlamydia psittaci and can be complicated by associated bacterial infections.
- **Feline Leukemia** - Feline Leukemia is a form of cancer in cats which is usually fatal. The disease, caused by a virus, can lead to tumor growth nearly anywhere in the body as well as a variety of other symptoms. Infected cats are unable to resist other diseases and may die from associated infections. Testing for the disease is recommended prior to initiating a vaccination program.
- **Feline Infectious Peritonitis (FIP)**.  FIP is a disease caused by a coronavirus. The virus is spread by direct cat-to-cat contact or by contact with contaminated surfaces. There are 2 manifestations of the disease, wet and dry, and both have nonspecific symptoms such as intermittent inappetence, depression, rough hair coat, weight loss, and fever. There is no cure and the disease is considered fatal.
