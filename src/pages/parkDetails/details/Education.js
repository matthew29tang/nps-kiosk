import React from 'react';

class News extends React.Component {

  render() {
    return (
      <div className="Education">
        <div className="LessonPlans">
          <h1>Lesson Plans</h1>
          {(this.props.data[0] || []).map((lesson, i) =>
            <div className="lesson" key={i}>
              <h2>{lesson.title + " - " + lesson.subject}</h2>
              <h4>{"Grade Level: " + lesson.gradeLevel}</h4>
              <h4>{"Duration: " + lesson.duration}</h4>
              <p>{lesson.questionObjective}</p>
            </div>
          )}
        </div>

        <div className="People">
          <h1>People</h1>
          {(this.props.data[1] || []).map((person, i) =>
            <div className="person" key={i}>
              <h2>{person.title}</h2>
              <p>{person.listingdescription}</p>
            </div>
          )}
        </div>

        <div className="Places">
          <h1>Places</h1>
          {(this.props.data[2] || []).map((place, i) =>
            <div className="place" key={i}>
              <h2>{place.title}</h2>
              <p>{place.listingdescription}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default News;