import React from 'react';

import Divider from '@material-ui/core/Divider';

class About extends React.Component {

  render() {
    return (
      <div className="About">
        <h1>About</h1>
        <Divider />
        <br />
        <div align="left" word-wrap="break-word">
          This project was created for the National Park MindSumo project. More details can be found <a href='https://www.mindsumo.com/contests/national-park-api'> here</a>. 
          The goal was to provide a clean, sleek interface for the user to access information about national parks.
          <br />
          <h2>Features</h2>
          <ul>
            <li>Search by state (with autocomplete, flil list of states)</li>
            <li>Search by park name (with autocomplete, flil list of parks) [Uses custom backend server]</li>
            <li>Park information</li>
            <li>Nearby visitor centers and campgrounds</li>
            <li>Articles/events/news</li>
            <li>Educational resources about the park.</li>
          </ul>
          <h2>Technologies used</h2>
          <ul>
            <li>Frontend: ReactJS</li>
              <li style={{marginLeft:"2em"}}>Theme: Material UI</li>
              <li style={{marginLeft:"2em"}}>Deployment: Github pages</li>
            <li>Backend: NodeJS</li>
              <li style={{marginLeft:"2em"}}>Deployment: Heroku (nps-kiosk-server.herokuapp.com)</li>
              <li style={{marginLeft:"2em"}}>Endpoints: See <a href="https://github.com/matthew29tang/nps-kiosk/blob/master/README.md"> this link</a> for documentation</li>
          </ul>
          <br />
          I created a backend server which provides a smaller JSON payload to reduce park listing delays.
        </div>
      </div>
    );
  }
}

export default About;