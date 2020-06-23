import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(1),
  },
  groupRight: {
    marginLeft: 'auto',
  }
}));

const Navbar = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Hello</Typography>
          <div className={classes.groupRight}>
            There
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;