import React from 'react'
import { connect } from 'react-redux'
import PetListItem from '../../components/PetListItem'
import MenuAppBar from '../../components/MenuAppBar'
import { getPet } from '../../action-creators/pets'
import { getPerson } from '../../action-creators/owners'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

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

class VaccShow extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getPet(id)
    const ownerId = this.props.pet.ownerID
    this.props.getPerson(ownerId)
  }

  render() {
    const props = this.props
    const { classes } = props
    if (props.pet._id !== props.match.params.id) {
      return <h3>Loading Rabies Tag Info ...</h3>
    }

    return (
      <div>
        <MenuAppBar {...props} showBackArrow={true} title="Rabies Tag Info" />
        <div style={{ marginTop: '25px' }}>
          <Paper className={classes.root} elevation={2}>
            <PetListItem pet={props.pet} />

            <Card className={classes.card}>
              <CardContent>
                <Typography gutterBottom variant="subheading" component="h4">
                  Rabies Tag
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  date: {this.props.pet.rabiesTag.date}
                </Typography>
                <Typography gutterBottom variant="body2" component="h5">
                  Number: {this.props.pet.rabiesTag.tagNumber}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Comments: {this.props.pet.rabiesTag.comments}
                </Typography>
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

VaccShow.propTypes = {
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
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(VaccShow))
