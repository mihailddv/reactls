import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  progress: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    animation: 'fadein 2s'
  },
  label: {
    marginTop: '10px',
  }
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div className={classes.progress}>
      <CircularProgress />
      <Typography className={classes.label}>Выполняется загрузка...</Typography>
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);