import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 6,
    maxWidth: 450
  },
  pos: {
    marginBottom: 25
  }
});

function PaperSheet(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root} elevation={1}>
      <Typography
        variant="h4"
        component="h2"
        className={classes.pos}
      >
        Заполните платежные данные
      </Typography>
      <Typography
        component="p"
        className={classes.pos}
      >
        Укажите информацию о банковской карте, чтобы сделать заказ.
      </Typography>
      <NavLink to="/profile">
        <Button
          variant="outlined"
          color="primary"
          className={classNames(classes.button)}
        >
          Перейти в профиль
        </Button>
      </NavLink>
    </Paper>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
