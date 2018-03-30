import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import PetListItem from '../../components/PetListItem'
import List from 'material-ui/List'
//import withDrawer from '../../components/Drawer'
//import MenuAppBar from '../../components/MenuAppBar'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AddIcon from 'material-ui-icons/Add'
// import Button from 'material-ui/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    display: 'inlineBlock',
    position: 'fixed',
    right: '15px',
    bottom: '15px',
    padding: 0
  },
  pageMargin: { marginTop: '56px' }
})

const Pets = props => {
  //////////// props.toggleDrawer()
  const { classes } = props
  return (
    <div>
      <div style={{ marginTop: '44px' }}>
        <List>{map(r => <PetListItem pet={r} />, props.pets)}</List>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    pets: state.pets
  }
}

const connector = connect(mapStateToProps)

//export default withDrawer(connector(withStyles(styles)(Pets)))
export default connector(withStyles(styles)(Pets))

//      <MenuAppBar title="Pets" />

{
  /* <Link to="/pets/new">
  <Button
    className={classes.button}
    variant="fab"
    color="primary"
    aria-label="add"
  >
    <AddIcon />
  </Button>
</Link> */
}
