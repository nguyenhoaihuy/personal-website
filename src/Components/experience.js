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
                            <h3 className={classes.position}>Website Developer at UCLA</h3>
                            <label className={classes.date}>Since 10/2019</label>
                        </div>
                    }
                    secondary={
                        <List className={classes.description}>
                            <ListItem>Created Customer Relationship Management tool using PHP, JavaScript, and MySQL to automate process for over 3000 contributors to input data using HashMap data structure</ListItem>
                            <ListItem>Deployed websites on cloud AWS using Docker and Kubernetes</ListItem>
                            <ListItem>Maintained and improved performance of existing websites</ListItem>
                        </List>
                    }
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar className={classes.expAva} alt="PURK" src={process.env.PUBLIC_URL + "/purk.png"} />
                    </ListItemAvatar>
                    <ListItemText
                    primary={
                        <div>
                            <h3 className={classes.position}>Web Development Intern at Purk</h3>
                            <label className={classes.date}>10/2018 - 5/2019</label>
                        </div>
                    }
                    secondary={
                        <List className={classes.description}>
                            <ListItem>Developed navigation system to closest available parking spots applying Dijkstra's algorithm using React for front-end, and Firebase for backend</ListItem>
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
                            <h3 className={classes.position}>Reach Intern at Cyber Defenders</h3>
                            <label className={classes.date}>6/2018 - 8/2018</label>
                        </div>
                    }
                    secondary={
                        <List className={classes.description}>
                            <ListItem>Processed 18 malware datasets using Python open source libraries: NumPy. Pandas, Mathplotlob</ListItem>
                            <ListItem>Utilized TensorFlow framework to improve classification of furture malwares</ListItem>
                        </List>
                    }
                    />
                </ListItem>
            </List>
        </div>
    );
  }
  
  export default Experience;