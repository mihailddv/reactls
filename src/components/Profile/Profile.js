import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { Grid, Paper } from '@material-ui/core';

import bg from '../../assets/login-bg.jpg';

import { ProfileForm } from './partials';
import {
  getError,
  getIsLoading,
  getProfile,
  saveProfileSuccess
} from '../../modules/Profile';

import { withStyles } from '@material-ui/core';
import { withLoader } from '../../hocs';

import Snackbar from '../Snackbar';

const styles = theme => ({
  background: {
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'blur(3px) grayscale(90%)',
    height: '100%'
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%);',
    width: 1000,
    backgroundColor: '#FFCA28'
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
});

class Profile extends PureComponent {
  state = {
    notificationVisible: false,
  };

  handleProfileSave = values => {
    const { saveProfileSuccess } = this.props;
    saveProfileSuccess(values);
    
    this.setState({
      notificationVisible: true
    });

    setTimeout(x => {
      this.setState({
        notificationVisible: false, 
      })
    }, 2000);
    
  };

  render() {
    const { classes, error, profile } = this.props;
    const { cardName, cardNumber, expDate, cvv } = profile;
    const { notificationVisible } = this.state;
    return (
      <Fragment>
        <div className={classes.background} />

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Paper className={classes.paper}>
            <ProfileForm
              cardName={cardName}
              cardNumber={cardNumber}
              expDate={expDate}
              cvv={cvv}
              handleSubmit={this.handleProfileSave}
            />
          </Paper>
        </Grid>
        {notificationVisible && (
          <Snackbar
            message="Профиль успешно сохранен. Теперь вы можете заказать такси"
            variant="success"
            open={notificationVisible}
          />
        )}
        {error && <Snackbar message={error} variant="error" />}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  error: getError(state),
  isLoading: getIsLoading(state),
  profile: getProfile(state)
});

const mapDispatchToProps = {
  saveProfileSuccess
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoader(withStyles(styles)(Profile)));
