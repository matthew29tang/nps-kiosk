import React from 'react';
import { NavLink } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import Selector from './Selector.js';
import ParkSearch from './ParkSearch.js';

const styles = theme => ({
  button: {
    margin: theme.spacing(2),
  },
  input: {
    display: 'none',
  },
  homeImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  homeText: {
    fontSize: 20,
  }
});

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      name: {
        value: '',
      },
      parkCode: {
        value: '',
      },
      allParks: {},
      status: false
    }
    fetch('https://nps-kiosk-server.herokuapp.com/allParks').then(res => res.json()).then(res => this.setState({
      allParks: res.sort((a, b) => a.label.localeCompare(b.label))
    }));
    fetch('https://nps-kiosk-server.herokuapp.com/status').then(res => res.json()).then(res => this.setState({
      status: res
    }));
  }
  onChangeName = (name) => {
    this.setState({ name });
  }

  onChangePark = (park) => {
    this.setState({ parkCode: park })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.homeImage}>
          <img
            src="https://www.nps.gov/common/uploads/hero_home/pwr/promo/1E007390-CB77-7564-C14C2B8B692B1075.jpg?width=2400&height=700&mode=crop&quality=90"
            width="100%"
            alt="" />
        </div>
        <br/>
        National Parks are the gems of the United States. Learn more about any of the U.S. national parks by entering a state or park name. 
        <br/><br/><Divider /><br/>
        <div className={classes.homeText}> Find a Park </div>
        <Selector changeValue={this.onChangeName} />
        <br/>
        {this.state.name.value ?
          <NavLink activeClassName="active" to={"/parks/" + this.state.name.value}>
            <Button variant="contained" color="primary" className={classes.button}>
              Search
          </Button>
          </NavLink>
          : ""}
        <ParkSearch changeValue={this.onChangePark} suggestions={this.state.allParks} />
        <br/>
        {this.state.parkCode.value ?
          <NavLink activeClassName="active" to={"/park/" + this.state.parkCode.value}>
            <Button variant="contained" color="primary" className={classes.button}>
              Search
          </Button>
          </NavLink>
          : ""}
        <br/>
        Please note that some parks do not contain all features.
        <br/><br/>
        Heroku backend server status: {this.state.status ? "online" : "offline. Please wait 1-2mins and refresh while the Heroku server boots up."}
      </div>
    )
  }
}

export default withStyles(styles)(Search);

