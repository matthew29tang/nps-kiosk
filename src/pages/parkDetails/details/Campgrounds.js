import React from 'react';

class Campgrounds extends React.Component {

  render() {
    return (
        <div className="Campgrounds">
          <h1>Campgrounds</h1>
          {(this.props.data || []).map((cg, i) =>
            <div className="cg" key={i}>
              <h1>{cg.name}</h1>
              <p>{cg.description}</p>
            </div>
          )}
        </div>
    );
  }
}

export default Campgrounds;