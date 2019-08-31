import React from 'react';
import PropTypes from 'prop-types';
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

const Notification = ({ handleButtonClick, classes }) => (
  <Grid container direction="column">
    <Typography className={classes.heading} variant="h6">
      Заказ размещён
    </Typography>

    <Typography className={classes.paragraph}>
      Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут
    </Typography>

    <Grid item xs={4}>
      <Button
        type="button"
        className={classes.button}
        variant="outlined"
        onClick={handleButtonClick}
      >
        Сделать новый заказ
      </Button>
    </Grid>
  </Grid>
);

Notification.propTypes = {
  handleButtonClick: PropTypes.func.isRequired
};

export default withStyles(styles)(Notification);
