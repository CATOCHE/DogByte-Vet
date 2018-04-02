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

const GlossaryListItem = props => {
  console.log('COMPONENT GlossaryListItem props: ', props)
  const { term, definition, _id } = props.entry

  const removeArticles = arrWords => {
    return contains(head(arrWords), ['the', 'a', 'an'])
      ? drop(1, arrWords)
      : arrWords
  }

  const glossaryLetter = compose(
    toUpper,
    slice(0, 1),
    join(' '),
    removeArticles,
    split(' '),
    toLower
  )(term)

  return (
    <Link
      to={`/glossary/${_id}`}
      style={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
      <Link
        style={{ textDecoration: 'none' }}
        to={`/glossary/${props.entry._id}`}
      >
        <ListItem>
          <Avatar> {glossaryLetter} </Avatar>
          <ListItemText
            style={{ marginLeft: '15px' }}
            primary={term}
            secondary={definition}
          />
        </ListItem>
      </Link>
      <Divider />
    </Link>
  )
}

export default GlossaryListItem
