import React from 'react'
import Form from '../../components/Form'
import { connect } from 'react-redux'
import { addPet, chgPet } from '../../action-creators/pets'

const NewPet = props => {
  console.log('NewPet props', props)
  return (
    <div>
      <h3>Add a New Pet</h3>
      <Form
        cancelUrl="/pets"
        onChange={props.onChange}
        onSubmit={e => props.onSubmit(props.history, props.currentPet)}
        {...props.currentPet}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentPet: state.currentPet
  }
}

function mapActionsToProps(dispatch) {
  return {
    onChange: (field, value) => dispatch(chgPet(field, value)),
    onSubmit: (history, resource) => e => {
      e.preventDefault()
      dispatch(addPet(resource, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(NewPet)
