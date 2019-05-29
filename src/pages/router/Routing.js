import React from "react";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {
  Route,
  NavLink,
  HashRouter as Router,
  Switch
} from "react-router-dom";
import Notfound from "./notfound";

import ParkList from '../parkList/ParkList.js';
import ParkDetails from '../parkDetails/ParkDetails.js';
import Search from '../search/Search.js';
const Park = ({ match }) => <ParkDetails parkName={match.params.name} />;
const ListParks = ({ match }) => <ParkList stateCode={match.params.state} />;

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
});

const routing = (
  <Router>
    <div className="Router">
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/parks/:state" component={ListParks} />
        <Route path="/park/:name" component={Park} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

class Routing extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Box width="75%" maxWidth={1000}>
          <Paper className={classes.root}>
            {routing}
          </Paper>
        </Box>
      </Grid>
    );
  }
}

export default withStyles(styles)(Routing);
