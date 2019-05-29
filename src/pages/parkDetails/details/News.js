import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import styles from './cardStyles.js';

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'none'
    }
  }

  updateView = (view) => {
    this.setState({
      view: view
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="News">
        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.updateView('articles')}
          disabled={this.props.data && this.props.data[0].length === 0}>
          Articles
          </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.updateView('events')}
          disabled={this.props.data && this.props.data[1].length === 0}>
          Events
          </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.updateView('newsreleases')}
          disabled={this.props.data && this.props.data[2].length === 0}>
          News Releases
          </Button>
        <br />
        {this.state ?
          (() => {
            switch (this.state.view) {
              case 'articles': return (
                <div className="Articles">
                  <h1>Articles</h1>
                  {(this.props.data[0] || []).map((article, i) =>
                    <ExpansionPanel key={i}>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
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
              );
              case 'events': return (
                <div className="Events">
                  <h1>Events</h1>
                  {(this.props.data[1] || []).map((event, i) =>
                    <ExpansionPanel key={i}>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
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
              );
              case 'newsreleases': return (
                <div className="NewsReleases">
                  <h1>News Releases</h1>
                  {(this.props.data[2] || []).map((nr, i) =>
                    <ExpansionPanel key={i}>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
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
              );
              default: return "";
            }
          })()
          : ""}
      </div>
    );
  }
}

export default withStyles(styles)(News);