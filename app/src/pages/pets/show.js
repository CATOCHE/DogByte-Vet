import React from 'react'
import { connect } from 'react-redux'
import PetListItem from '../../components/PetListItem'
import MenuAppBar from '../../components/MenuAppBar'
import { getPet, deletePet } from '../../action-creators/pets'
import { CONFIRM_DELETE_PET } from '../../constants'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from 'material-ui/Dialog'

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
      return <h1>Loading Pet Info...</h1>
    }

    return (
      <div>
        <MenuAppBar {...props} showBackArrow={true} title="Pet BIO" />
        <div style={{ marginTop: '34px' }}>
          <div>
            <Paper className={classes.root} elevation={2}>
              <PetListItem pet={props.pet} />
              <Typography style={{ paddingTop: '8px' }} component="p">
                {props.pet.purpose}
              </Typography>
            </Paper>

            <Link
              style={{ textDecoration: 'none' }}
              to={`/pets/${props.pet._id}/edit`}
            >
              <Button>Edit</Button>
            </Link>

            <Button color="secondary" onClick={props.toggleConfirmDelete}>
              Delete
            </Button>
          </div>
        </div>
        <Dialog
          open={props.pet.confirmDelete}
          onClose={props.toggleConfirmDelete}
        >
          <DialogTitle>{'Delete'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {`Are you sure you want to delete this pet?`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={props.toggleConfirmDelete}
              color="primary"
              autofocus
            >
              Cancel
            </Button>
            <Button
              onClick={() => props.deletePet(props.pet._id, props.history)}
              color="primary"
              autoFocus
            >
              Confirm Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pet: state.pet
  }
}

const mapActionsToProps = dispatch => {
  return {
    getPet: id => dispatch(getPet(id)),
    toggleConfirmDelete: () => dispatch({ type: CONFIRM_DELETE_PET }),
    deletePet: (id, history) => dispatch(deletePet(id, history))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(Pet))
