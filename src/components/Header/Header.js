import React, { PureComponent } from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/es/Button/Button";

const styles = theme => ({
  root: {
    zIndex: 1100
  },
  grow: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Header extends PureComponent {

  static get propTypes() {
    return {
      classes: propTypes.object,
      isAuthorized: propTypes.bool,
      loginOut: propTypes.func.isRequired
    };
  }

  handleClick = () => {
    const { loginOut } = this.props;
    loginOut();
  };

  render() {
    const { classes, isAuthorized } = this.props;
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Loft Taxi
          </Typography>
          <NavLink exact to='/map'>
            <Button className={classes.button}>Карта</Button>
          </NavLink>
          <NavLink exact to={"/profile"}>
            <Button className={classes.button}>Профиль</Button>
          </NavLink>
          {isAuthorized
            ? <Button className={classes.button} onClick={this.handleClick}>Выйти</Button>
            : <NavLink exact to='/login'>
              <Button className={classes.button}>Войти</Button>
            </NavLink>
          }
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);