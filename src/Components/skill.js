import React from 'react';
import {makeStyles,Chip} from '@material-ui/core';
import * as Constants from '../theme';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: "5%",
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
        margin: theme.spacing(0.5),
        },
    },
    title: {
        color: Constants.TITLE_COLOR,
        fontSize: "40px",
        marginLeft: "5%",
    },
}));
  
function Skill() {
    const classes = useStyles();
    return (
      <div>
        <h2 className={classes.title}>SKILL</h2>
        <div className={classes.root}>
            <h3>Programming Languages</h3>
            <Chip
                label="Python"
                style={{backgroundColor:'#ff9100'}}
            />
            <Chip
                label="C/C++"
                style={{backgroundColor:'#ffc400'}}
            />
            <Chip
                label="JavaScript"
                style={{backgroundColor:'#f9a825'}}
            />
            <Chip
                label="PHP"
                style={{backgroundColor:'#9e9d24'}}
            />
            <Chip
                label="Java"
                style={{backgroundColor:'#558b2f'}}
            />
        </div>
        <div className={classes.root}>
            <Chip
                label="HTML"
            />
            <Chip
                label="CSS"
            />
        </div>
        <div className={classes.root}>
            <h3>Database Systems</h3>
            <Chip
                label="MySQL"
                clickable
                color="primary"
            />
            <Chip
                label="MongoDB"
                clickable
                color="primary"
            />
            <Chip
                label="Firebase"
                clickable
                color="primary"
            />
        </div>
        <div className={classes.root}>
            <h3>Tools</h3>
            <Chip
                label="Git/GitHub"
                clickable
                color="primary"
            />
            <Chip
                label="Docker"
                clickable
                color="primary"
            />
            <Chip
                label="Emacs"
                clickable
                color="primary"
            />
        </div>
        <div className={classes.root}>
            <h3>Frameworks</h3>
            <Chip
                label="React"
                clickable
                color="primary"
            />
            <Chip
                label="Express"
                clickable
                color="primary"
            />
            <Chip
                label="WordPress"
                clickable
                color="primary"
            />
        </div>
        
      </div>
    );
  }
  
  export default Skill;