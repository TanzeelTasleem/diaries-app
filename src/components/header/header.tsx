import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { clearToken } from '../../features/authSlice/authSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    
    title: {
      flexGrow: 1,
    },
  }),
);

export const Header =()=>{
  const classes = useStyles();
   const dispatch = useDispatch()
   const handleClick=()=>{
     dispatch(clearToken())
   }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Daily Dairy
          </Typography>
          <Button onClick={handleClick} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}