import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { TextField } from 'formik-material-ui';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

const styles = theme => ({
  paragraph: {
    width: '100%',
    textAlign: 'center'
  },
  input: {
    width: '100%'
  },
  button: {
    marginTop: '10px'
  }
});

const LoginSchema = Yup.object().shape({
  user: Yup.string()
    .email('Имя должно быть в формате email')
    .min(2, 'Слишком короткое имя')
    .max(50, 'Слишком длинное имя')
    .required('Укажите имя'),
  password: Yup.string()
    .min(2, 'Слишком короткий пароль')
    .max(50, 'Слишком длинный пароль')
    .required('Укажите пароль')
});

class LoginForm extends PureComponent {
  static propTypes = {
    user: PropTypes.string,
    password: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    user: '',
    password: ''
  };

  getInitialValues = () => {
    const { user, password } = this.props;
    return { user, password };
  };

  handleFormSubmit = (values, { setSubmitting }) => {
    const { handleSubmit } = this.props;
    handleSubmit({
      ...values,
      setSubmitting
    });
    setSubmitting(false);
  };

  render() {
    const { classes } = this.props;

    return (
      <Formik
        initialValues={this.getInitialValues()}
        validationSchema={LoginSchema}
        onSubmit={this.handleFormSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Typography className={classes.paragraph} component="p">
              Войти
            </Typography>

            <Field
              name="user"
              className={classes.input}
              label="Имя пользователя"
              margin="dense"
              component={TextField}
            />

            <Field
              name="password"
              className={classes.input}
              label="Пароль"
              margin="dense"
              component={TextField}
            />

            <Button type="submit" variant="outlined" className={classes.button}>
              Войти
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default withStyles(styles)(LoginForm);
