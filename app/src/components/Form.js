import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import { FormControl } from 'material-ui/Form'
import Button from 'material-ui/Button'

const Form = ({
  // We're adding these as props that we're going to use.  Creating a props object and destructuring it into pieces.
  _id,
  name,
  type,
  species,
  ownerID,
  dateOfBirth,
  breed,
  markings,
  gender,
  breeder,
  dateAquired,
  onChange,
  onSubmit,
  cancelUrl,
  value,
  showValueInput
}) => {
  /* creates a ternary to see whether there's a value field.
   If it's true, it will show the value input.  If false, it returns null. */
  const valueInput = showValueInput ? (
    <div>
      <label className="dib">value</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange('value', e.target.value)}
      />
    </div>
  ) : null
  /* Below, we're showing our name, id, and possibly our value field (if showValueInput is set to true) */
  return (
    /* onSubmit is one of our props. It's defined in our starwars/form.js file
    (or buzzwords/form.js, or cookies/form.js, etc.). When they click submit,
    pass in ID, name, and value to the onSubmit function as an object.

    onChange: on a change, we're going to update our 'name' value in state with the
    value of what's in our text box */

    <form onSubmit={onSubmit({ _id, name, value })}>
      <FormControl>
        <div>
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={e => onChange('name', e.target.value)}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="species"
            label="species: dog or cat"
            value={species}
            onChange={e => onChange('species', e.target.value)}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="ownerID"
            label="owner id"
            value={ownerID}
            onChange={e => onChange('ownerID', e.target.value)}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="dateOfBirth"
            label="date of birth"
            value={dateOfBirth}
            onChange={e => onChange('dateOfBirth', e.target.value)}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="breed"
            label="breed"
            value={breed}
            onChange={e => onChange('breed', e.target.value)}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="markings"
            label="markings"
            value={markings}
            onChange={e => onChange('markings', e.target.value)}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="gender"
            label="gender"
            value={gender}
            onChange={e => onChange('gender', e.target.value)}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="breeder"
            label="breeder"
            value={breeder}
            onChange={e => onChange('breeder', e.target.value)}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="dateAquired"
            label="date aquired"
            value={dateAquired}
            onChange={e => onChange('dateAquired', e.target.value)}
            margin="normal"
          />
        </div>
        {valueInput}
        <div>
          <Button size="medium" color="primary">
            Submit
          </Button>
          <Link to={cancelUrl}>Cancel</Link>
        </div>
      </FormControl>
    </form>
  )
}

export default Form
