import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import MenuAppBar from '../../components/MenuAppBar'
import Drawer from '../../components/Drawer'

const Welcome = () => (
  <center>
    <img
      alt="JRS Dogbyte Veterinary"
      style={{ paddingTop: '16px' }}
      src="/dog&cat.png"
    />

    <Typography style={{ padding: '16px' }} variant="display1">
      JRS Dogbyte Veterinary's Pet Health Management System
    </Typography>

    <Link to="/pets">
      <Button variant="raised" color="primary">
        Browse Pets
      </Button>
    </Link>
  </center>
)

const Home = props => {
  return (
    <div style={{ padding: '60px' }}>
      <MenuAppBar title="Home" />
      <Welcome />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    home: state.appData
  }
}

const connector = connect(mapStateToProps)

export default Drawer(connector(Home))
