import React from 'react';
import {makeStyles,Avatar,ListItem,List,ListItemText,ListItemAvatar}  from '@material-ui/core';
import * as Constants from '../theme'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft: "5%",
    },
    title: {
        color: Constants.TITLE_COLOR,
        fontSize: "40px",
        marginLeft: "5%",
    },
    expAva: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    position: {
        marginLeft: "20px",
        fontFamily: "Gill Sans, sans-serif",
        fontSize: "25px",
        display: "inline-block"
    },
    description: {
        fontSize: "16px",
        color: Constants.PRIMARY_COLOR,
        fontFamily: "Helvetica, Arial, sans-serif",
    },
    date: {
        marginLeft: "60px",
        fontFamily: "Gill Sans, sans-serif",
    }
}));
  
function Education() {
    const classes = useStyles();
    return (
        <div>
        <h2 className={classes.title}>EDUCATION</h2>
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar className={classes.expAva} alt="UCLA" src="https://brand.ucla.edu/images/identity/logos-and-marks/script-logo.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary={
                    <div>
                        <h3 className={classes.position}>University of California, Los Angeles</h3>
                        <label className={classes.date}>09/2019 - 12/2021</label>
                    </div>
                }
                secondary={
                    <List className={classes.description}>
                        <ListItem>Bachelor's degree in Computer Science</ListItem>
                        
                        <ListItem>C++ Data Structure, Human-Computer Interaction, Introduction to Computer Graphics, Computer Architecture, Assembly Language, Algorithms and Complexity, Operating Systems, Computer Network Fundamentals, Programming Languages, Introduction to Computer Security, Database Systems, Web Applications, Introduction to Machine Learning, Computer Systems Architecture, Introduction to Formal Languages and Automata Theory</ListItem>
                    </List>
                }
                />
            </ListItem>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar className={classes.expAva} alt="UCLA" src="https://d1qy7wmw5fq66c.cloudfront.net/media/1397923/evc-logo.jpg?type=Special-2" />
                </ListItemAvatar>
                <ListItemText
                primary={
                    <div>
                        <h3 className={classes.position}>Evergreen Valley College</h3>
                        <label className={classes.date}>09/2016 - 06/2019</label>
                    </div>
                }
                secondary={
                    <List className={classes.description}>
                        <ListItem>Former member of Computer Science Club</ListItem>
                        <ListItem>Java, C++, Mathematics, Physics, Javascript</ListItem>
                    </List>
                }
                />
            </ListItem>
        </List>
    </div>
    );
  }
  
  export default Education;