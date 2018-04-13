import React from 'react'
import { connect } from 'react-redux'
import PetListItem from '../../components/PetListItem'
import MedRecordListItem from '../../components/MedRecordListItem'
import MenuAppBar from '../../components/MenuAppBar'
import { getPet } from '../../action-creators/pets'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: theme.spacing.unit * 3
  }),
  cleaned: {
    textDecoration: 'none'
  }
})

class Pet extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getPet(id)
  }

  render() {
    const props = this.props
    const { classes } = props
    if (props.pet._id !== props.match.params.id) {
      return <h3>Loading Pet Info...</h3>
    }

    return (
      <div>
        <MenuAppBar {...props} showBackArrow={true} title="Pet Records" />
        <div style={{ marginTop: '34px' }}>
          <div>
            <Paper className={classes.root} elevation={2}>
              <PetListItem pet={props.pet} />
              <MedRecordListItem pet={props.pet} />
              <Button size="medium" color="primary">
                DELETE
              </Button>
            </Paper>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pet: state.pet,
    people: state.people
  }
}

const mapActionsToProps = dispatch => {
  return {
    getPet: id => dispatch(getPet(id))
    //    toggleConfirmDelete: () => dispatch({ type: CONFIRM_DELETE_PET }),
    //    deletePet: (id, history) => dispatch(deletePet(id, history))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(Pet))
