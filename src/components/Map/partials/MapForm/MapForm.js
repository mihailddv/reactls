import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Select } from 'formik-material-ui';
import { withStyles } from '@material-ui/core/styles';

// import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

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

const MapSchema = Yup.object().shape({
  address1: Yup.string().required('Укажите адрес отправления'),
  address2: Yup.string().required('Укажите адрес пребытия')
});

class MapForm extends PureComponent {
  state = {
    address1: '',
    address2: ''
  };

  static propTypes = {
    addressList: PropTypes.array.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    addressList: []
  };

  getInitialValues = () => {
    const { address1, address2 } = this.state;
    return { address1, address2 };
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
    const { classes, addressList } = this.props;

    return (
      <Formik
        initialValues={this.getInitialValues()}
        validationSchema={MapSchema}
        onSubmit={this.handleFormSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container direction="column">
              <Typography className={classes.paragraph} variant="h6">
                Заказать такси
              </Typography>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="address1">
                  Выберите адрес отправления
                </InputLabel>

                <Field id="address1" name="address1" component={Select}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {addressList.map((address, idx) => (
                    <MenuItem value={address} key={`dd1_${idx}`}>
                      {address}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="address2">
                  Выберите адрес прибытия
                </InputLabel>

                <Field id="address2" name="address2" component={Select}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {addressList.map((address, idx) => (
                    <MenuItem value={address} key={`dd2_${idx}`}>
                      {address}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <Button
                type="submit"
                variant="outlined"
                className={classes.button}
              >
                Заказать такси
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    );
  }
}

export default withStyles(styles)(MapForm);
