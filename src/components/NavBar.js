import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

// TODO: Add dynamic NabBar Title based on route
// TODO: remove 'New Animal' button. Nest inside animals page instead
export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}> 
            <Button color="inherit" component={NavLink} to="/">Wild Wish</Button>
          </Typography>
          <Button color="inherit" component={NavLink} to="/animals">Animals</Button>
          <Button color="inherit" component={NavLink} to="/about">About</Button>
          <Button color="inherit" component={NavLink} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}