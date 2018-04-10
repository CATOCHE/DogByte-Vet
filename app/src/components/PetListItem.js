import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'
import { split, head } from 'ramda'

const PetListItem = props => {
  const { name, breed, dateOfBirth, species } = props.pet

  // const removeArticles = arrWords => {
  //   return contains(head(arrWords), ['the', 'a', 'an'])
  //     ? drop(1, arrWords)
  //     : arrWords
  // }
  //
  // const avatarLetter = compose(
  //   toUpper,
  //   slice(0, 1),
  //   join(' '),
  //   removeArticles,
  //   split(' '),
  //   toLower
  // )(name)

  const birthYear = Number(head(split('-', dateOfBirth)))
  const currentYear = new Date().getFullYear()
  const age = currentYear - birthYear
  const petPic = species => {
    if (species === 'cat') {
      return '/cat.jpeg'
    } else {
      return '/jr-dog.png'
    }
  }

  return (
    <Link style={{ textDecoration: 'none' }} to={`/pets/${props.pet._id}`}>
      <ListItem>
        <Avatar src={petPic(species)} />
        <ListItemText
          style={{ marginLeft: '15px' }}
          primary={name}
          secondary={`Breed: ${breed}     Age: ${age} `}
        />
      </ListItem>
      <Divider />
    </Link>
  )
}

export default PetListItem
