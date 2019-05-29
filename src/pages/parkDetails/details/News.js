import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import styles from './cardStyles.js';

class News extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="News">
        <div className="Articles">
          <h1>Articles</h1>
          {(this.props.data[0] || []).map((article, i) =>
            <ExpansionPanel key={i}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography className={classes.heading}>{article.title}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  {article.listingdescription}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )}
        </div>

        <div className="Events">
          <h1>Events</h1>
          {(this.props.data[1] || []).map((event, i) =>
            <ExpansionPanel key={i}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography className={classes.heading}>{event.title + " [" + event.date.slice(5) + "]"}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <div dangerouslySetInnerHTML={{ __html: event.description }} />
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )}
        </div>

        <div className="NewsReleases">
          <h1>News Releases</h1>
          {(this.props.data[2] || []).map((nr, i) =>
            <ExpansionPanel key={i}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography className={classes.heading}>{nr.title + " [" + nr.releasedate.slice(5, 10) + "]"}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  {nr.abstract}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(News);