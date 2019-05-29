import React from 'react';
import GetParkDetails from './GetParkDetails.js';
import ContainerTabs from './ContainerTabs.js';

class ParkDetails extends React.Component {
  updateState = (req, data) => {
    this.setState({
      [req]: data
    });
    console.log(req, data);
  }

  render() {
    return (
      <div className="Details">
        <GetParkDetails updateState={this.updateState} parkName={this.props.parkName}/>
        {this.state ?
        <ContainerTabs 
          parkInfo={[(this.state.parks || []), (this.state.alerts || [])]} 
          visitorcenters={(this.state.visitorcenters || [])}
          campgrounds={(this.state.campgrounds || [])}
          news={[(this.state.articles || []), (this.state.events || []), (this.state.newsreleases || [])]}
          education={[(this.state.lessonplans || []), (this.state.people || []), (this.state.places || [])]}
          />
        : ""}
      </div>
    );
  }
}

export default ParkDetails;
