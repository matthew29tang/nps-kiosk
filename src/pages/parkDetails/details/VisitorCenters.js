import React from 'react';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import styles from './cardStyles.js';

class VisitorCenters extends React.Component {

  render() {
    const { classes } = this.props;
    return (
        <div className="VisitorCenters">
          <h1>Visitor Centers</h1>
          <Divider />
          <br />
          {(this.props.data || []).map((vc, i) =>
            <Card className={classes.card} key={i}>
              <h1>{vc.name}</h1>
              <p>{vc.description}</p>
            </Card>
          )}
        </div>
    );
  }
}

export default withStyles(styles)(VisitorCenters);