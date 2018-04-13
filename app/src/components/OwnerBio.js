import React from 'react'
import TextField from 'material-ui/TextField'

const OwnerBioListItem = props => {
  const { firstName } = props.person
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
