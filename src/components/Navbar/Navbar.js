import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: '#FFCA28',
    color: 'black'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Navbar(props) {
  const { classes, isAuth } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Loft Taxi
          </Typography>

          <Button color="inherit" component={Link} to="/map">
            Карта
          </Button>

          <Button color="inherit" component={Link} to="/profile">
            Профиль
          </Button>

          {isAuth && (
            <Button color="inherit" component={Link} to="/logout">
              Выйти
            </Button>
          )}

          {!isAuth && (
            <Button color="inherit" component={Link} to="/login">
              Войти
            </Button>
          )}
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuth: PropTypes.bool
};

Navbar.defaultProps = {
  isAuth: false
};

export default withStyles(styles)(Navbar);
