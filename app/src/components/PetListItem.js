import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'
import {
  toLower,
  split,
  head,
  compose,
  toUpper,
  slice,
  join,
  drop,
  contains
} from 'ramda'

const dogPic = 'app/src/images/dog.jpg'

const PetListItem = props => {
  const { name, breed, dateOfBirth, _id } = props.pet

  const removeArticles = arrWords => {
    return contains(head(arrWords), ['the', 'a', 'an'])
      ? drop(1, arrWords)
      : arrWords
  }

  const avatarLetter = compose(
    toUpper,
    slice(0, 1),
    join(' '),
    removeArticles,
    split(' '),
    toLower
  )(name)

  const birthYear = Number(head(split('-', dateOfBirth)))
  const currentYear = new Date().getFullYear()
  const age = currentYear - birthYear

  return (
    <Link
      to={`/pets/${_id}`}
      style={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
      <Link style={{ textDecoration: 'none' }} to={`/pets/${props.pet._id}`}>
        <ListItem>
          <Avatar>{avatarLetter}</Avatar>
          <ListItemText
            style={{ marginLeft: '15px' }}
            primary={name}
            secondary={`Breed: ${breed}  Age: ${age} `}
          />
        </ListItem>
      </Link>
      <Divider />
    </Link>
  )
}

export default PetListItem
