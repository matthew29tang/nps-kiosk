import React from 'react';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import styles from './cardStyles.js';

class Campgrounds extends React.Component {

  render() {
    const { classes } = this.props;
    return (
        <div className="Campgrounds">
          <h1>Campgrounds</h1>
          <Divider />
          <br />
          {(this.props.data || []).map((cg, i) =>
            <Card className={classes.card} key={i}>
              <h1>{cg.name}</h1>
              <p>{cg.description}</p>
            </Card>
          )}
        </div>
    );
  }
}

export default withStyles(styles)(Campgrounds);