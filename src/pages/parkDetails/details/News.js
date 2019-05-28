import React from 'react';

class News extends React.Component {

  render() {
    return (
      <div className="News">
        <div className="Articles">
          <h1>Articles</h1>
          {(this.props.data[0] || []).map((article, i) =>
            <div className="article" key={i}>
              <h2>{article.title}</h2>
              <p>{article.listingdescription}</p>
            </div>
          )}
        </div>

        <div className="Events">
          <h1>Events</h1>
          {(this.props.data[1] || []).map((event, i) =>
            <div className="event" key={i}>
              <h2>{event.title + " - " + event.date.slice(5) }</h2>
              <p>{event.description}</p>
            </div>
          )}
        </div>

        <div className="NewsReleases">
          <h1>News Releases</h1>
          {(this.props.data[2] || []).map((nr, i) =>
            <div className="newsrelease" key={i}>
              <h2>{nr.title + " - " + nr.releaseDate}</h2>
              <p>{nr.abstract}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default News;