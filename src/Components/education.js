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
        width: theme.spacing(8),
        height: theme.spacing(8),
    },
    position: {
        marginLeft: "20px",

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
                    <h3 className={classes.position}>Brunch this weekend?</h3>
                }
                secondary={
                    <List>
                        <ListItem>Single-line item</ListItem>
                        <ListItem>Single-line item</ListItem>
                        <ListItem>Single-line item</ListItem>
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
                    <h3 className={classes.position}>Brunch this weekend?</h3>
                }
                secondary={
                    <List>
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
  
  export default Education;