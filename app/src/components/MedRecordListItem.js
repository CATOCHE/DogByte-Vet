import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'

const MedRecordListItem = props => {
  return (
    <div>
      <Link
        style={{ textDecoration: 'none' }}
        to={`/bio/show/${props.pet._id}`}
      >
        <ListItem>
          <Avatar src="/add-in-circle.png" />
          <ListItemText
            style={{ marginLeft: '15px' }}
            primary="Pet & Onwer Bio"
            secondary=""
          />
        </ListItem>
        <Divider />
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        to={`/vacc/show/${props.pet._id}`}
      >
        <ListItem>
          <Avatar src="/injection.png" />
          <ListItemText
            style={{ marginLeft: '15px' }}
            primary="Vaccination Records"
            secondary=""
          />
        </ListItem>
        <Divider />
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        to={`/lab/show/${props.pet._id}`}
      >
        <ListItem>
          <Avatar src="/lab-200.png" />
          <ListItemText
            style={{ marginLeft: '15px' }}
            primary="Laboratory Tests"
            secondary=""
          />
        </ListItem>
        <Divider />
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        to={`/hist/show/${props.pet._id}`}
      >
        <ListItem>
          <Avatar src="/Medical_Chart.png" />
          <ListItemText
            style={{ marginLeft: '15px' }}
            primary="Medical and Surgical History"
            secondary=""
          />
        </ListItem>
        <Divider />
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        to={`/rab/show/${props.pet._id}`}
      >
        <ListItem>
          <Avatar src="/dog-tag.jpeg" />
          <ListItemText
            style={{ marginLeft: '15px' }}
            primary="Rabies Tag Information"
            secondary=""
          />
        </ListItem>
        <Divider />
      </Link>
    </div>
  )
}

export default MedRecordListItem
