import React from 'react';
import {makeStyles,Grid,Divider} from '@material-ui/core';
import SideBar from './Components/sidebar';
import Experince from './Components/experience';
import Education from './Components/education';
import Skill from './Components/skill';
import Project from './Components/project';
import * as Constants from './theme';
import { blue } from '@material-ui/core/colors';

// import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
      background: Constants.PRIMARY_BACKGROUND,
      color: Constants.PRIMARY_COLOR,
      fontFamily: "Helvetica, Arial, sans-serif",
  },
  body: {
    background: Constants.SECONDARY_BACKGROUND
  },
  divider: {
    background: Constants.DIVIDER_COLOR,
    marginTop: "50px",
    marginBottom: "50px",
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <SideBar></SideBar>
        </Grid>
        <Grid className={classes.body} item sm={9}>
          <Experince></Experince>
          <Divider className={classes.divider} variant="fullWidth" />
          <Education></Education>
          <Divider className={classes.divider} variant="fullWidth"/>
          <Skill></Skill>
          <Divider className={classes.divider} variant="fullWidth"/>
          <Project></Project>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
