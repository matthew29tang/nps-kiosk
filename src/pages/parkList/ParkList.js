import React from 'react';
import { NavLink } from "react-router-dom";

const token = 'xLzbrpcuMwDXar76GlDLcIZrzRu7Cv1KJHz7yZZX';

function objToQueryString(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
  }

class ParkList extends React.Component {
    constructor(props) {
        super(props);
        this.getRequest('parks', {stateCode: this.props.stateCode, limit: 10, fields : ['addresses']});
    }

    updateState = (req, data) => {
      this.setState({
        [req]: data
        });
    }

    getRequest = (req, params) => {
        console.log("making a request");
        params.api_key = token;
        const url = `https://developer.nps.gov/api/v1/${req}?` + objToQueryString(params);
        fetch(url).then(res => res.json())
        .then(res => {
            this.updateState(req, res.data)
            console.log(res.data[1]);
        });
        }

    render() {
      return (
        <div className="App">
          <h1>Parks </h1>
          {this.state ? 
            (this.state.parks ? this.state.parks.map((park, i) => 
              (park.description ? <div className={park} key={i}>
                <NavLink activeClassName="active" to={"/park/" + park.parkCode}>
                  <h1>{park.fullName}</h1>
                </NavLink>
                <p>{park.description}</p>
              </div>
              : "")
            ): "") 
          : "Loading..."}
        </div>
      );
    }
  }

export default ParkList;
