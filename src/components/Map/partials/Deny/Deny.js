import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  paragraph: {
    width: '100%',
    marginTop: '10px'
  },
  heading: {},
  input: {
    width: '100%'
  },
  button: {
    marginTop: '10px'
  }
});

const Deny = ({ handleButtonClick, classes }) => (
  <Grid container direction="column">
    <Typography className={classes.heading} variant="h6">
      Не заполнен профиль
    </Typography>

    <Typography className={classes.paragraph}>
      Перед заказом такси, заполните платежную информацию
    </Typography>

    <Grid item xs={4}>
      <Button
        component={Link}
        to="/profile"
        type="button"
        className={classes.button}
        variant="outlined"
        onClick={handleButtonClick}
      >
        Перейти в настройки профиля
      </Button>
    </Grid>
  </Grid>
);

Notification.propTypes = {
  handleButtonClick: PropTypes.func.isRequired
};

export default withStyles(styles)(Deny);
