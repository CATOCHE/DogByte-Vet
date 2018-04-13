import React from 'react'
import { connect } from 'react-redux'
import PetListItem from '../../components/PetListItem'
import LabListItem from '../../components/LabListItem'
//import OwnerBioListItem from '../../components/OwnerBio'
import MenuAppBar from '../../components/MenuAppBar'
//import { getPet, deletePet } from '../../action-creators/pets'
import { getPet } from '../../action-creators/pets'
import { getPerson } from '../../action-creators/owners'
//import { CONFIRM_DELETE_PET } from '../../constants'
import Paper from 'material-ui/Paper'
//import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
//import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { map } from 'ramda'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
//import { Link } from 'react-router-dom'
// import Dialog, {
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle
//   //  withMobileDialog
// } from 'material-ui/Dialog'

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

class LabShow extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getPet(id)
    const ownerId = this.props.pet.ownerID
    this.props.getPerson(ownerId)

    console.log('LAB-Show componentDidMount id:', id)
    console.log('LAB-Show componentDidMount this.props:', this.props)
    //    const ownerID = this.props.pet.ownerID
    //    this.props.getPerson(this.props.pet.ownerID)
  }

  render() {
    const props = this.props
    const { classes } = props
    console.log('LAB-Show before Loading Pet Info PROPS:', props)
    console.log('LAB-Show before Loading Pet Info CLASSES:', classes)
    if (props.pet._id !== props.match.params.id) {
      return <h3>Loading Lab Tests ...</h3>
    }

    return (
      <div>
        <MenuAppBar {...props} showBackArrow={true} title="Laboratory Tests" />
        <div style={{ marginTop: '25px' }}>
          <Paper className={classes.root} elevation={2}>
            <PetListItem pet={props.pet} />
            <Card className={classes.card}>
              <CardContent>
                <Typography gutterBottom variant="subheading" component="h4">
                  Complete Blood Count - CBC
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Type: {this.props.pet.labTests[0].type}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Date: {this.props.pet.labTests[0].date}
                </Typography>
                <Typography variant="body2" component="h5">
                  Result: {this.props.pet.labTests[0].result}
                </Typography>
                <Typography gutterBottom variant="body2" component="h5">
                  Comments:{this.props.pet.labTests[0].comments}
                </Typography>
                <Divider />
                <Typography className={classes.title} color="textSecondary">
                  Type: {this.props.pet.labTests[1].type}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Date: {this.props.pet.labTests[1].date}
                </Typography>
                <Typography variant="body2" component="h5">
                  Result: {this.props.pet.labTests[1].result}
                </Typography>
                <Typography gutterBottom variant="body2" component="h5">
                  Comments:{this.props.pet.labTests[1].comments}
                </Typography>
                <Divider />
                <Typography className={classes.title} color="textSecondary">
                  Type: {this.props.pet.labTests[2].type}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Date: {this.props.pet.labTests[2].date}
                </Typography>
                <Typography variant="body2" component="h5">
                  Result: {this.props.pet.labTests[2].result}
                </Typography>
                <Typography gutterBottom variant="body2" component="h5">
                  Comments:{this.props.pet.labTests[2].comments}
                </Typography>
                <Divider />
                <Typography className={classes.title} color="textSecondary">
                  Type: {this.props.pet.labTests[3].type}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Date: {this.props.pet.labTests[3].date}
                </Typography>
                <Typography variant="body2" component="h5">
                  Result: {this.props.pet.labTests[3].result}
                </Typography>
                <Typography gutterBottom variant="body2" component="h5">
                  Comments:{this.props.pet.labTests[3].comments}
                </Typography>
                <Divider />
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  EDIT
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </div>
      </div>
    )
  }
}

LabShow.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    pet: state.pet,
    people: state.people,
    person: state.person
  }
}

const mapActionsToProps = dispatch => {
  return {
    getPet: id => dispatch(getPet(id)),
    getPerson: id => dispatch(getPerson(id))
    //    toggleConfirmDelete: () => dispatch({ type: CONFIRM_DELETE_PET }),
    //    deletePet: (id, history) => dispatch(deletePet(id, history))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(LabShow))

/*

            <LabListItem test={props.pet.labTests} />

<List>
  {map(r => <LabListItem test={r} />, props.pet.labTests)}
</List>




This is the definition of the Edit and Delete Buttons that were on line 57

<Link
  style={{ textDecoration: 'none' }}
  to={`/pets/${props.pet._id}/edit`}
>
  <Button>Edit</Button>
</Link>

<Button color="secondary" onClick={props.toggleConfirmDelete}>
  Delete
</Button>
*/

/* This is the whole Dialog for the Delete Button from line 59
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

*/
