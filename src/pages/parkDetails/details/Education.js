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
      <div className="Education">
        <div className="LessonPlans">
          <h1>Lesson Plans</h1>
          {(this.props.data[0] || []).map((lesson, i) =>
            <ExpansionPanel key={i}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
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

        <div className="People">
          <h1>People</h1>
          {(this.props.data[1] || []).map((person, i) =>
            <ExpansionPanel key={i}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
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

        <div className="Places">
          <h1>Places</h1>
          {(this.props.data[2] || []).map((place, i) =>
            <ExpansionPanel key={i}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
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
      </div>
    );
  }
}

export default withStyles(styles)(News);