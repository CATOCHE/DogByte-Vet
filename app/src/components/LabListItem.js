import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'

const LabListItem = props => {
  const { date, type, result, comments } = props.pet.labTests
  return (
    <div>
      <ListItem>
        <ListItemText
          style={{ marginLeft: '15px' }}
          primary={date}
          secondary={`type: ${type}  result: ${result} comments: ${comments} `}
        />
      </ListItem>
      <Divider />
    </div>
  )
}

export default LabListItem
