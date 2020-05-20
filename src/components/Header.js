import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import dp from '../imgs/mano.jpg';


const useStyles = makeStyles(theme => ({
    title: {
        paddingLeft : 10,
    },
    titlebar: {
        backgroundColor: "#3f51b5",
    }
  }));
const Header = () => {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="static" className={classes.titlebar}> 
                <ToolBar>
                    <Avatar alt="Remy Sharp" src={dp}/>
                        <Typography variant="title" color="inherit" className={classes.title}>
                            Manogajapathi Velmurugan
                        </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Header;