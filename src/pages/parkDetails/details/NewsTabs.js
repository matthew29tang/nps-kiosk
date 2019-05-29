import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,

  },
}));

function ContainerTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          {(props.parkInfo && (props.parkInfo[0].length > 0 || props.parkInfo[1].length > 0)) ?
          <Tab label="Park Info" /> : <Tab label="Park Info" disabled/>}

          {(props.visitorcenters && props.visitorcenters.length > 0) ?
          <Tab label="Visitor Centers" /> : <Tab label="Visitor Centers" disabled/>}

          {(props.campgrounds && props.campgrounds.length > 0) ? 
          <Tab label="Campgrounds" /> : <Tab label="Campgrounds" disabled/>}

          {(props.news && (props.news[0].length > 0 || props.news[1].length > 0 || props.news[2].length > 0)) ?
          <Tab label="News" /> : <Tab label="News" disabled/>}

          {(props.education && (props.education[0].length > 0 || props.education[1].length > 0 || props.education[2].length > 0)) ?
          <Tab label="Education" /> : <Tab label="Education" disabled/>}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {(props.parkInfo && (props.parkInfo[0].length > 0 || props.parkInfo[1].length > 0)) ?
          <TabContainer dir={theme.direction}>
            {value === 0 ? <ParkInfo data={props.parkInfo} /> : ''}
          </TabContainer>
          : <TabContainer dir={theme.direction} disabled></TabContainer>}

        {(props.visitorcenters && props.visitorcenters.length > 0) ?
          <TabContainer dir={theme.direction}>
            {value === 1 ? <VisitorCenters data={props.visitorcenters} /> : ''}
          </TabContainer>
          : <TabContainer dir={theme.direction} disabled></TabContainer>}

        {(props.campgrounds && props.campgrounds.length > 0) ?
          <TabContainer dir={theme.direction}>
            {value === 2 ? <Campgrounds data={props.campgrounds} /> : ''}
          </TabContainer>
          : <TabContainer dir={theme.direction}></TabContainer>}

        {(props.news && (props.news[0].length > 0 || props.news[1].length > 0 || props.news[2].length > 0)) ?
          <TabContainer dir={theme.direction}>
            {value === 3 ? <News data={props.news} /> : ''}
          </TabContainer>
          : <TabContainer dir={theme.direction} disabled></TabContainer>}

        {(props.education && (props.education[0].length > 0 || props.education[1].length > 0 || props.education[2].length > 0)) ?
          <TabContainer dir={theme.direction}>
            {value === 4 ? <Education data={props.education} /> : ''}
          </TabContainer>
          : <TabContainer dir={theme.direction} disabled></TabContainer>}

      </SwipeableViews>
    </div>
  );
}

export default ContainerTabs;