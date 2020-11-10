import React from 'react';
import {makeStyles,Avatar,ListItem,List,ListItemText,ListItemAvatar,Typography} from '@material-ui/core';
import * as Constants from '../theme';

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
  
function Experience() {
    const classes = useStyles();
    return (
        <div>
            <h2 className={classes.title}>EXPERIENCE</h2>
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar className={classes.expAva} alt="UCLA" src="https://brand.ucla.edu/images/identity/logos-and-marks/script-logo.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary={
                        <div>
                            <h3 className={classes.position}>Brunch this weekend?</h3>
                            <label className={classes.date}>Hello</label>
                        </div>
                    }
                    secondary={
                        <List className={classes.description}>
                            <ListItem>Single-line item</ListItem>
                            <ListItem>Single-line item</ListItem>
                            <ListItem>Single-line item</ListItem>
                        </List>
                    }
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar className={classes.expAva} alt="UCLA" src="https://pbs.twimg.com/profile_images/1017178471213068289/gxAdnKeD_400x400.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary={
                        <div>
                            <h3 className={classes.position}>Brunch this weekend?</h3>
                            <label className={classes.date}>Hello</label>
                        </div>
                    }
                    secondary={
                        <List className={classes.description}>
                            <ListItem>Single-line item</ListItem>
                            <ListItem>Single-line item</ListItem>
                            <ListItem>Single-line item</ListItem>
                        </List>
                    }
                    />
                </ListItem>
            </List>
        </div>
    );
  }
  
  export default Experience;