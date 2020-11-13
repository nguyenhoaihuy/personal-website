import React from 'react';
import {makeStyles,Avatar, MenuList, MenuItem} from '@material-ui/core';
import * as Constants from '../theme';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: '-webkit-sticky',
        position: 'sticky',
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        margin: "30px auto",
    },
    medium: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        margin: "30px auto",
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: "30px auto",
    },
    menuitem: {
        height: "60px",
        width: "100%", 
        '&:hover': {
            background: Constants.SECONDARY_BACKGROUND,
            color: Constants.HOVER_COLOR,
        },
    }
}));



function SideBar() {
    const classes = useStyles();
    function onclickHandle(id){
        var element =document.getElementById(id);
        element.scrollIntoView({behavior: 'smooth'});
    }
    return (
      <div className={classes.root}>  
        <Avatar src="https://ca.slack-edge.com/T010MBR22KU-U019QV28AD8-b9e116383a90-512" className={classes.large}></Avatar>
        <MenuList>
            <MenuItem onClick={()=>onclickHandle("experience")} className={classes.menuitem}>EXPERIENCE</MenuItem>
            <MenuItem onClick={()=>onclickHandle("education")} className={classes.menuitem}>EDUCATION</MenuItem>
            <MenuItem onClick={()=>onclickHandle("skill")} className={classes.menuitem}>SKILL</MenuItem>
            <MenuItem onClick={()=>onclickHandle("project")} className={classes.menuitem}>PROJECT</MenuItem>
        </MenuList>
      </div>
    );
  }
  
  export default SideBar;