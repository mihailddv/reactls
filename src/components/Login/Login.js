import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Field } from "redux-form";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import fieldTemplate from "../FieldTemplate";
import { Redirect } from "react-router-dom";

const styles = theme => ({
  container: {
    width: "100%"
  },
  card: {
    maxWidth: 500,
    margin: "0 auto",
    marginTop: theme.spacing.unit * 6
  },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  title: {
    textAlign: "center"
  },
  pos: {
    marginBottom: 12
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit * 3
  }
});

class Login extends React.Component {
  static get propTypes() {
    return {
      classes: PropTypes.object.isRequired,
      loginIn: PropTypes.func.isRequired
    };
  }

  handleSubmit = values => {
    const { loginIn } = this.props;
    loginIn(values);
  };

  render() {
    const { classes, handleSubmit, isAuthorized } = this.props;
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              variant="h4"
              className={classes.title}
              color="default"
              gutterBottom
            >
              Войти
            </Typography>
            <form
              className={classes.flexContainer}
              onSubmit={handleSubmit(val => this.handleSubmit(val))}
            >
              <Field
                component={fieldTemplate}
                label="Имя пользователя"
                placeholder="Имя пользователя"
                name="login"
                type="text"
              />
              <Field
                component={fieldTemplate}
                label="Пароль"
                placeholder="Пароль"
                name="password"
                type="password"
              />
              <CardActions>
                <Button variant="outlined" color="primary" type="submit">
                  Войти
                </Button>
              </CardActions>
            </form>
          </CardContent>
        </Card>
        {isAuthorized && <Redirect to={"/map"} />}
      </div>
    );
  }
}

export default withStyles(styles)(Login);
