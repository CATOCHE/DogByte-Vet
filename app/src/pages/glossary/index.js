import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import GlossaryListItem from '../../components/GlossaryListItem'
import List from 'material-ui/List'
import withDrawer from '../../components/Drawer'
import MenuAppBar from '../../components/MenuAppBar'
//import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
//import AddIcon from 'material-ui-icons/Add'
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

const Glossary = props => {
  //////////// props.toggleDrawer()
  //  const { classes, glossary } = props
  const { glossary } = props
  console.log('PAGES GLOSSARY INDEX props', props)
  return (
    <div>
      <MenuAppBar title="Glossary" />
      <div style={{ marginTop: '56px' }}>
        <List>{map(e => <GlossaryListItem entry={e} />, glossary)}</List>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    glossary: state.glossary
  }
}

const connector = connect(mapStateToProps)

export default withDrawer(connector(withStyles(styles)(Glossary)))
//export default connector(withStyles(styles)(Glossary))

// {
//   /* <Link to="/pets/new">
//   <Button
//     className={classes.button}
//     variant="fab"
//     color="primary"
//     aria-label="add"
//   >
//     <AddIcon />
//   </Button>
// </Link> */
// }
