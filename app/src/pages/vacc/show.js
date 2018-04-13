import React from 'react'
import { connect } from 'react-redux'
import PetListItem from '../../components/PetListItem'
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
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import { FormGroup, FormControlLabel } from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'
import { If, Then, Else } from 'react-if-elseif-else-render'

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

class VaccShow extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getPet(id)
    const ownerId = this.props.pet.ownerID
    this.props.getPerson(ownerId)

    console.log('VACC-Show componentDidMount id:', id)
    console.log('VACC-Show componentDidMount this.props:', this.props)
    //    const ownerID = this.props.pet.ownerID
    //    this.props.getPerson(this.props.pet.ownerID)
  }

  render() {
    const props = this.props
    const { classes } = props
    console.log('BIO-Show before Loading Pet Info PROPS:', props)
    console.log('BIO-Show before Loading Pet Info CLASSES:', classes)
    if (props.pet._id !== props.match.params.id) {
      return <h3>Loading PET-BIO Info...</h3>
    }

    return (
      <div>
        <MenuAppBar
          {...props}
          showBackArrow={true}
          title="Vaccination Records"
        />
        <div style={{ marginTop: '25px' }}>
          <Paper className={classes.root} elevation={2}>
            <PetListItem pet={props.pet} />

            <Card className={classes.card}>
              <CardContent>
                <Typography gutterBottom variant="subheading" component="h4">
                  Vaccination Records
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  vaccination date
                </Typography>
                <Typography gutterBottom variant="body2" component="h5">
                  {this.props.pet.vaccinations.vaccinationDate}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  age at vaccination
                </Typography>
                <Typography gutterBottom variant="body2" component="h5">
                  {this.props.pet.vaccinations.ageAtVaccination}
                </Typography>
                <Divider />

                <If condition={this.props.pet.species === 'cat'}>
                  <Then>
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven
                                .leukemiaVirus
                            }
                          />
                        }
                        label="Leukemia Virus"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven
                                .panleukopenia
                            }
                          />
                        }
                        label="Panleukopenia"
                      />
                    </FormGroup>
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven
                                .calicivirus
                            }
                          />
                        }
                        label="Calici Virus"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven
                                .rhinortracheitis
                            }
                          />
                        }
                        label="Rhinortracheitis"
                      />
                    </FormGroup>
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven
                                .pneumonitis
                            }
                          />
                        }
                        label="Pneumonitis"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven.fip
                            }
                          />
                        }
                        label="FIP"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven
                                .rabies
                            }
                          />
                        }
                        label="Rabies"
                      />
                    </FormGroup>
                  </Then>
                  <Else>
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven
                                .lymeDisease
                            }
                          />
                        }
                        label="Lyme Disease"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven
                                .distemper
                            }
                          />
                        }
                        label="Distemper"
                      />
                    </FormGroup>
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven
                                .adenovirus2
                            }
                          />
                        }
                        label="Adenovirus 2"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven
                                .parvovirus
                            }
                          />
                        }
                        label="Parvo Virus"
                      />
                    </FormGroup>
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven
                                .leptospira
                            }
                          />
                        }
                        label="Leptospira"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven
                                .coronavirus
                            }
                          />
                        }
                        label="CoronaVirus"
                      />
                    </FormGroup>
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven
                                .bordetella
                            }
                          />
                        }
                        label="Bordetella"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven
                                .giardiasis
                            }
                          />
                        }
                        label="Giardiasis"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              this.props.pet.vaccinations.vaccinationsGiven
                                .rabies
                            }
                          />
                        }
                        label="Rabies"
                      />
                    </FormGroup>
                  </Else>
                </If>
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
    //    toggleConfirmDelete: () => dispatch({ type: CONFIRM_DELETE_PET }),
    //    deletePet: (id, history) => dispatch(deletePet(id, history))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(VaccShow))

/*
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
