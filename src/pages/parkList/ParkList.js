import React from 'react';
import { NavLink } from "react-router-dom";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const token = 'xLzbrpcuMwDXar76GlDLcIZrzRu7Cv1KJHz7yZZX';

const styles = theme => ({
  card: {
    minWidth: 275,
    marginBottom: 20,
    padding: 18,
  },
  title: {
    fontSize: 14,
  },
  header: {
    fontSize: 18,
  }
});

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
    this.getRequest('parks', { stateCode: this.props.stateCode, limit: 25, fields: ['addresses'] });
  }

  updateState = (req, data) => {
    this.setState({
      [req]: data
    });
  }

  getRequest = (req, params) => {
    params.api_key = token;
    const url = `https://developer.nps.gov/api/v1/${req}?` + objToQueryString(params);
    fetch(url).then(res => res.json())
      .then(res => {
        this.updateState(req, res.data)
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="ParkList">
        <div className={classes.header}>
          <h1>Parks </h1>
        </div>
        <Divider />
        <br/>
        {this.state ?
          (this.state.parks ? this.state.parks.map((park, i) =>
            (park.description ? <div className={park.parkCode} key={i}>
              <Card className={classes.card}>
                  <Typography className={classes.title}>
                    <NavLink activeClassName="active" className="link" to={"/park/" + park.parkCode}>
                      <h1>{park.fullName}</h1>
                    </NavLink>
                  </Typography>
                  <p>{park.description}</p>
                  <NavLink activeClassName="active" className="link" to={"/park/" + park.parkCode}>
                    <Button variant="contained" color="primary" className={classes.button}>
                      See more
                    </Button>
                  </NavLink>
              </Card>
            </div>
              : "")
          ) : "")
          : "Loading..."}
      </div>
    );
  }
}

export default withStyles(styles)(ParkList);
