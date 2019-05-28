import React from 'react';

class ParkInfo extends React.Component {

  render() {
    return (
      <div className="ParkInfo">
        <div className="Info">
          {(this.props.data[0] || []).map((park, i) =>
            <div className="Info" key={i}>
              <h1>{park.fullName + ", " + (park.addresses[0] ? park.addresses[0].city : '')}</h1>
              <p>{park.description}</p>
              <h2>Directions</h2>
              <p>{park.directionsInfo} See <a href={park.url}>this link </a> for more information. </p>
              <h2>Weather</h2>
              <p>{park.weatherInfo}</p>
            </div>
          )}
        </div>
        <div className="Alerts">
          <h1>Alerts</h1>
          {(this.props.data[1] || []).map((al, i) =>
            <div className="alert" key={i}>
              <h2>{al.category + " - " + al.title}</h2>
              <p>{al.description}</p>
              <p> See <a href={al.url}>this link </a> for more information. </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ParkInfo;