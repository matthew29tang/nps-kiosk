import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';

import styles from './cardStyles.js';

class ParkInfo extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className="ParkInfo">
        <div className={classes.root}>
        </div>
        <div className="Info">
          {(this.props.data[0] || []).map((park, i) =>
            <div className="Info" key={i}>
              <h1>{park.fullName + ", " + (park.addresses ? (park.addresses[0] ? park.addresses[0].city : '') : '')}</h1>
              <p>{park.description}</p>
              {park.directionsInfo ? <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography className={classes.heading}>Directions</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    {park.directionsInfo} See <a href={park.url}>this link </a> for more information.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
                : <ExpansionPanel disabled />}

              {park.weatherInfo ? <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Weather</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    {park.weatherInfo}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
                : <ExpansionPanel disabled />}
            </div>
          )}
        </div>
        <br />
        <Divider />
        <div className="Alerts">
          {(this.props.data[1] || []).length > 0 ? <h1>Alerts</h1> : ''}
          {(this.props.data[1] || []).map((al, i) =>
            <Card className={classes.card} key={i}>
              <h2>{al.category + " - " + al.title}</h2>
              <p>{al.description}</p>
            </Card>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ParkInfo);