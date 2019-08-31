import React, { Component } from "react";
import propTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import ReduxForm from "../ReduxForm";
import Button from "@material-ui/core/es/Button/Button";
import { NavLink } from "react-router-dom";

const styles = theme => ({
  container: {
    width: "100%"
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 6,
    maxWidth: 800,
    margin: "0 auto"
  },
  pos: {
    marginBottom: 15
  },
  title: {
    textAlign: "center"
  },
  buttonToMap: {
    marginTop: theme.spacing.unit * 3
  }
});

class Profile extends Component {
  state = {
    isAlert: false
  };

  static get defaultProps() {
    return {
      classes: propTypes.object.isRequired
    };
  }

  showAlert = () => {
    this.setState({
      isAlert: !this.state.isAlert
    });
  };

  render() {
    const { classes } = this.props;
    const { isAlert } = this.state;
    return (
      <div className={classes.container}>
        <Paper className={classes.root} elevation={1}>
          <Typography
            variant="h4"
            component="h2"
            className={classNames(classes.pos, classes.title)}
          >
            Профиль
          </Typography>
          <Typography variant={!isAlert ? "h6" : "subtitle1"} component="p">
            {!isAlert
              ? "Способ оплаты"
              : "Платёжные данные обновлены. Теперь вы можете заказывать такси."}
          </Typography>
          {!isAlert ? (
            <ReduxForm alertHandle={this.showAlert} />
          ) : (
            <Button
              className={classes.buttonToMap}
              variant="outlined"
              color="primary"
              onClick={this.showAlert}
            >
              <NavLink to="/map">Перейти на карту</NavLink>
            </Button>
          )}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
