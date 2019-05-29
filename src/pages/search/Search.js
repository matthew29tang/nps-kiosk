import React from 'react';
import { NavLink } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Selector from './Selector.js';

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
        value: ''
      }
    }
  }
  onChangeName = (name) => {
    this.setState({ name });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.homeImage}>
          <img
            src="https://www.nps.gov/common/uploads/hero_home/pwr/promo/1E007390-CB77-7564-C14C2B8B692B1075.jpg?width=2400&height=700&mode=crop&quality=90" 
            width="100%"
            alt=""/>
        </div>
        <br/>
        <div className={classes.homeText}> Find a Park </div>
        <Selector changeValue={this.onChangeName} />
        <br />
        {this.state.name.value ?
          <NavLink activeClassName="active" to={"/parks/" + this.state.name.value}>
            <Button variant="contained" color="primary" className={classes.button}>
              Search
          </Button>
          </NavLink>
          : ""}

      </div>
    )
  }
}

export default withStyles(styles)(Search);

