import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import PetListItem from '../../components/PetListItem'
import List from 'material-ui/List'
import MenuAppBar from '../../components/MenuAppBar'
import { getPet } from '../../action-creators/pets'

class Pet extends React.Component {
  // props.toggleDrawer()
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getPet(id)
  }

  render() {
    if (this.props.pet._id !== this.props.match.params.id) {
      return <h1>Loading Pet Info...</h1>
    }

    return (
      <div>
        <MenuAppBar title="Pet" />
        <div style={{ marginTop: '44px' }}>
          <PetListItem pet={this.props.pet} />
          <div>{this.props.pet.name}</div>
        </div>
      </div>
    )
  }
}

//<ResourceListItem resource={this.props.resource} />
//<ResourceListItem name={props.name} shortDesc={props.shortDesc} />

const mapStateToProps = state => {
  return {
    pet: state.pet
  }
}

const mapActionsToProps = dispatch => {
  return { getPet: id => dispatch(getPet(id)) }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Resource)
