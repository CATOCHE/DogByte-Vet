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
import Divider from 'material-ui/Divider'

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

class BioShow extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getPet(id)
  }

  render() {
    const props = this.props
    const { classes } = props
    if (props.pet._id !== props.match.params.id) {
      return <h3>Loading PET-BIO Info...</h3>
    }

    return (
      <div>
        <MenuAppBar {...props} showBackArrow={true} title="Pet & Owner Bio" />
        <div style={{ marginTop: '25px' }}>
          <Paper className={classes.root} elevation={2}>
            <PetListItem pet={props.pet} />

            <Card className={classes.card}>
              <CardContent>
                <Typography gutterBottom variant="subheading" component="h4">
                  Owner's Bio
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  name
                </Typography>
                <Typography gutterBottom variant="body2" component="h5">
                  {this.props.person.firstName} {this.props.person.lastName}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  address
                </Typography>
                <Typography gutterBottom variant="body2" component="h5">
                  {this.props.person.street}, {this.props.person.city},{' '}
                  {this.props.person.state} {this.props.person.zipCode}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  phone
                </Typography>
                <Typography gutterBottom variant="body2" component="h5">
                  {this.props.person.phone}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  email
                </Typography>
                <Typography gutterBottom variant="body2" component="h5">
                  {this.props.person.email}
                </Typography>
                <Divider />
                <Typography gutterBottom variant="subheading" component="h4">
                  Pet's Bio
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  date of birth
                </Typography>
                <Typography gutterBottom variant="body2" component="h5">
                  {this.props.pet.dateOfBirth}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  date aquired
                </Typography>
                <Typography gutterBottom variant="body2" component="h5">
                  {this.props.pet.dateAquired}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  gender
                </Typography>
                <Typography gutterBottom variant="body2" component="h5">
                  {this.props.pet.gender}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  breeder
                </Typography>
                <Typography gutterBottom variant="body2" component="h5">
                  {this.props.pet.breeder}
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

BioShow.propTypes = {
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

export default connector(withStyles(styles)(BioShow))
