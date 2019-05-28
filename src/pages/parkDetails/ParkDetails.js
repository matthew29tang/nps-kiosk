import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GetParkDetails from './GetParkDetails.js';
import ParkInfo from './details/ParkInfo.js';
import VisitorCenters from './details/VisitorCenters.js';
import Campgrounds from './details/Campgrounds.js';
import News from './details/News.js';
import Education from './details/Education.js';

const styles = theme => ({
  button: {
    margin: theme.spacing(2),
  },
  input: {
    display: 'none',
  },
});

class ParkDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'parkinfo'
    }
  }

  updateState = (req, data) => {
    this.setState({
      [req]: data
    });
    console.log(req, data);
  }

  updateView = (view) => {
    this.setState({
      view: view
    })
    console.log("View updated to: " + view);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="Details">
        <GetParkDetails updateState={this.updateState} parkName={this.props.parkName}/>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.updateView('parkinfo')}>
          Park Info
          </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.updateView('visitorcenters')}>
          Visitor Centers
          </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.updateView('campgrounds')}>
          Campgrounds
          </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.updateView('news')}>
          News
          </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.updateView('education')}>
          Education
          </Button>
        <br />
        {this.state ?
          (() => {
            switch (this.state.view) {
              case 'parkinfo': return (<ParkInfo data={[this.state.parks, this.state.alerts]} />);
              case 'visitorcenters': return (<VisitorCenters data={this.state.visitorcenters} />);
              case 'campgrounds': return (<Campgrounds data={this.state.campgrounds} />);
              case 'news': return (<News data={[this.state.articles, this.state.events, this.state.newsreleases]} />);
              case 'education': return (<Education data={[this.state.lessonplans, this.state.people, this.state.places]} />);
              default: return "";
            }
          })()
          : ""}
      </div>
    );
  }
}

export default withStyles(styles)(ParkDetails);
