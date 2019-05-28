import React from 'react';

class VisitorCenters extends React.Component {

  render() {
    return (
        <div className="VisitorCenters">
          <h1>Visitor Centers</h1>
          {(this.props.data || []).map((vc, i) =>
            <div className="vc" key={i}>
              <h1>{vc.name}</h1>
              <p>{vc.description}</p>
            </div>
          )}
        </div>
    );
  }
}

export default VisitorCenters;