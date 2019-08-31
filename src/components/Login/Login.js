import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { Grid, Paper } from '@material-ui/core';

import bg from '../../assets/login-bg.jpg';

import { LoginForm } from './partials';
import {
  authRequest,
  getError,
  getIsLoading,
  getIsAuthorized
} from '../../modules/Auth';

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
    width: 400,
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

class Login extends PureComponent {
  // todo: remove credentials
  state = {
    user: 'test@test.com',
    password: '123123'
  };

  handleAuthRequest = values => {
    const { authRequest } = this.props;
    authRequest(values);
  };

  render() {
    const { classes, error, isAuthorized } = this.props;
    const { user, password } = this.state;

    if (isAuthorized) return <Redirect to="/profile" />;

    return (
      <Fragment>
        <div className={classes.background} />

        <Grid container direction="column" justify="center" alignItems="center">
          <Paper className={classes.paper}>
            <LoginForm
              user={user}
              password={password}
              handleSubmit={this.handleAuthRequest}
            />
          </Paper>
        </Grid>

        {error && <Snackbar message={error} variant="error" />}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  error: getError(state),
  isLoading: getIsLoading(state),
  isAuthorized: getIsAuthorized(state)
});

const mapDispatchToProps = {
  authRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoader(withStyles(styles)(Login)));
