import React from 'react';

import Divider from '@material-ui/core/Divider';

class About extends React.Component {

  render() {
    return (
        <div className="About">
          <h1>About</h1>
          <Divider />
          <br/>
          This project was created for the National Park MindSumo project. More details can be found 
          <a href="https://www.mindsumo.com/contests/national-park-api"> here.</a>
          <br/><br/>
          Users search for a list of parks by state and can browse the list for a park of their choice or search by park name.
          Upon clicking that park, there are several tabs listed so the user can access information about that park,
          nearby visitor centers and campgrounds, articles/events/news, and educational resources about the park.
          I created a backend server which provides a smaller JSON payload to reduce park listing delays.
          <br/><br/>
          The goal was to provide a clean, sleek interface for the user to access such information. Material UI was used for the theme.
          <br/><br/>
          Some challenges included making the API requests. 
          The park listing by state loads slowly on this site due to the large size of the JSON response payload from the API.
          The endpoints are configured such that it is impossible to only request certain attributes about each park (there are default parameters which cannot be removed),
          making the delay time very noticeable. To mitigate this issue, I created a custom backend server for park listing by state.
        </div>
    );
  }
}

export default About;