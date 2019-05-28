import React from 'react';

const token = 'xLzbrpcuMwDXar76GlDLcIZrzRu7Cv1KJHz7yZZX';

class GetParkDetails extends React.Component {
  constructor(props) {
    super(props);
    this.getRequest('parks', { parkCode: this.props.parkName, fields : ['addresses', 'images']});
    this.getRequest('visitorcenters', { parkCode: this.props.parkName });
    this.getRequest('campgrounds', { parkCode: this.props.parkName });
    this.getRequest('alerts', { parkCode: this.props.parkName });
    this.getRequest('articles', { parkCode: this.props.parkName });
    this.getRequest('events', { parkCode: this.props.parkName });
    this.getRequest('newsreleases', { parkCode: this.props.parkName });
    this.getRequest('lessonplans', { parkCode: this.props.parkName });
    this.getRequest('people', { parkCode: this.props.parkName });
    this.getRequest('places', { parkCode: this.props.parkName });
  }

  objToQueryString = (obj) => {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
  }

  getRequest = (req, params) => {
    params.api_key = token;
    const url = `https://developer.nps.gov/api/v1/${req}?` + this.objToQueryString(params);
    fetch(url).then(res => res.json())
      .then(res => {
        this.props.updateState(req, res.data)
      });
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default GetParkDetails;
