import React from 'react';
import Selector from './Selector.js';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing(2),
  },
  input: {
    display: 'none',
  },
});

class Search extends React.Component {
  constructor(){
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
        <Selector changeValue={this.onChangeName} />
        {this.state.name.value ? 
        <NavLink activeClassName="active" to={"/parks/" + this.state.name.value}>
          <Button variant="contained" color="primary" className={classes.button}>
            Search
          </Button>
        </NavLink>
        : "" }
        
      </div>
    )
  }
}

export default withStyles(styles)(Search);

