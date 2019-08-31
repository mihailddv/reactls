import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { shallowEqual } from 'recompose';

import { TextField } from 'formik-material-ui';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {
  isAlphaRegex,
  isCardNumberRegex,
  isCvvRegex
} from '../../../../const/components';

const styles = theme => ({
  h4: {
    width: '100%',
    textAlign: 'center',
    marginTop: '10px'
  },
  h6: {
    width: '100%',
    marginTop: '10px'
  },
  input: {
    width: '100%'
  },
  button: {
    marginTop: '10px'
  }
});

const ProfileSchema = Yup.object().shape({
  cardName: Yup.string()
    .matches(isAlphaRegex, 'Имя может содержать только буквы')
    .min(2, 'Слишком короткое имя')
    .max(50, 'Слишком длиное имя')
    .required('Укажите имя'),
  cardNumber: Yup.string()
    .matches(isCardNumberRegex, 'Номер карты - цифра длинной 16 символов')
    .required('Укажите номер карты'),
  expDate: Yup.date().required('Укажите дату'),
  cvv: Yup.string()
    .matches(isCvvRegex, 'CVV должно содержать 3 цифры')
    .required('Укажите CVV')
});

class ProfileForm extends PureComponent {
  static propTypes = {
    cardName: PropTypes.string,
    cardNumber: PropTypes.string,
    expDate: PropTypes.string,
    cvv: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  };

  inputLabelProps = {
    shrink: true
  };

  getInitialValues = () => {
    const { cardName, cardNumber, expDate, cvv } = this.props;
    return { cardName, cardNumber, expDate, cvv };
  };

  handleFormSubmit = (values, { setSubmitting }) => {
    const isChanged = !shallowEqual(this.getInitialValues(), values);
    
    if (!isChanged) {
      setSubmitting(false);
      return;
    };

    const { handleSubmit } = this.props;
    handleSubmit({ ...values, setSubmitting });
    setSubmitting(false);
  };

  render() {
    const { classes } = this.props;

    return (
      <Formik
        initialValues={this.getInitialValues()}
        validationSchema={ProfileSchema}
        onSubmit={this.handleFormSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography className={classes.h4} component="h4" variant="h4">
                  Профиль
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography className={classes.h6} component="h6" variant="h6">
                  Способ оплаты
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Field
                  name="cardName"
                  className={classes.input}
                  label="Имя владельца"
                  margin="dense"
                  component={TextField}
                />
              </Grid>

              <Grid item xs={6}>
                <Field
                  name="cardNumber"
                  className={classes.input}
                  label="Номер карты"
                  margin="dense"
                  component={TextField}
                />
              </Grid>

              <Grid item xs={6}>
                <Field
                  name="expDate"
                  className={classes.input}
                  label="Дата окончания действия"
                  type="date"
                  margin="dense"
                  InputLabelProps={this.inputLabelProps}
                  component={TextField}
                />
              </Grid>

              <Grid item xs={6}>
                <Field
                  name="cvv"
                  className={classes.input}
                  label="CVV"
                  margin="dense"
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="outlined"
                  className={classes.button}
                >
                  Сохранить
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    );
  }
}

export default withStyles(styles)(ProfileForm);
