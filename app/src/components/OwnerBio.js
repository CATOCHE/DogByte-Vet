import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'
//import { split, head } from 'ramda'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'

const OwnerBioListItem = props => {
  const { classes } = props
  console.log('OwnerBioListItem props: ', props)
  const { firstName } = props.person
  console.log('OwnerBioListItem firstName: ', firstName)
  return (
    <div>
      <h3>Owner</h3>
      <h3>Pet</h3>
      <form className="Owner Name" noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className="Owner Name"
          value={firstName}
          margin="normal"
        />
      </form>
    </div>
  )
}

export default OwnerBioListItem

/*
          onChange={this.handleChange('name')}

          <Link
            style={{ textDecoration: 'none' }}
            to={`/bio/show/${props.pet._id}`}
          />

          */
