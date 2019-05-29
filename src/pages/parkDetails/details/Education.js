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
      <div className="Education">
        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.updateView('lessonplans')}
          disabled={this.props.data && this.props.data[0].length === 0}>
          Lesson Plans
          </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.updateView('people')}
          disabled={this.props.data && this.props.data[1].length === 0}>
          People
          </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.updateView('places')}
          disabled={this.props.data && this.props.data[2].length === 0}>
          Places
          </Button>
        <br />
        {this.state ?
          (() => {
            switch (this.state.view) {
              case 'lessonplans': return (
                <div className="LessonPlans">
                  <h1>Lesson Plans</h1>
                  {(this.props.data[0] || []).map((lesson, i) =>
                    <ExpansionPanel key={i}>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <Typography className={classes.heading} >{lesson.title}</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails className={classes.details}>
                        <Typography>{lesson.subject ? "Subject: " + lesson.subject : ''}</Typography>
                        <Typography>{lesson.gradeLevel ? "Grade Level: " + lesson.gradeLevel : ''}</Typography>
                        <Typography>{lesson.duration ? "Duration: " + lesson.duration : ''}</Typography>
                        <Typography>{lesson.questionObjective ? lesson.questionObjective : ''}</Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  )}
                </div>
              );
              case 'people': return (
                <div className="People">
                  <h1>People</h1>
                  {(this.props.data[1] || []).map((person, i) =>
                    <ExpansionPanel key={i}>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <Typography className={classes.heading} >{person.title}</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails className={classes.details}>
                        <Typography>
                          {person.listingdescription}
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  )}
                </div>
              );
              case 'places': return (
                <div className="Places">
                  <h1>Places</h1>
                  {(this.props.data[2] || []).map((place, i) =>
                    <ExpansionPanel key={i}>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <Typography className={classes.heading} >{place.title}</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails className={classes.details}>
                        <Typography>
                          {place.listingdescription}
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