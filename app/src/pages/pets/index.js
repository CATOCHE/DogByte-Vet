import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import PetListItem from '../../components/PetListItem'
import List from 'material-ui/List'
import withDrawer from '../../components/Drawer'
import MenuAppBar from '../../components/MenuAppBar'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'

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
  console.log('PAGES PETS props: ', props)
  return (
    <div>
      <MenuAppBar title="Pets" />
      <div style={{ marginTop: '56px' }}>
        <List>{map(r => <PetListItem pet={r} />, props.pets)}</List>
        <Link to="/pets/new">
          <Button
            className={classes.button}
            variant="fab"
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('PAGES PETS MAPSTATETOPROPS state: ', state)
  return {
    pets: state.pets
  }
}

const connector = connect(mapStateToProps)

export default withDrawer(connector(withStyles(styles)(Pets)))
//export default connector(withStyles(styles)(Pets))

// {
//   /* */
// }
