/* eslint-disable max-statements */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import MapGL, { FlyToInterpolator } from 'react-map-gl';
import { Grid, Paper } from '@material-ui/core';

import bg from '../../assets/login-bg.jpg';

import { MapForm, Notification, Deny, PolylineOverlay } from './partials';
import {
  getAddressList,
  getRoute,
  routeRequest,
  addressListRequest
} from '../../modules/Navigation';

import { getIsFilled } from '../../modules/Profile';

import { withStyles } from '@material-ui/core';
import { withLoader } from '../../hocs';

import Snackbar from '../Snackbar';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoicmF3bGV4IiwiYSI6ImNqdnNmdG5zazEzbTk0OW96bHQxNGlzdWsifQ.qZpHYGgkyA7W4OxD1y42oQ';

const styles = theme => ({
  background: {
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'blur(3px) grayscale(90%)',
    height: '100%'
  },
  map: {
    height: '100%'
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    position: 'absolute',
    top: '15%',
    left: '10%',
    transform: 'translate(-15%, -10%);',
    width: 700,
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

class Map extends PureComponent {
  state = {
    viewport: {
      latitude: 56,
      longitude: 38,
      zoom: 20,
      bearing: 0,
      pitch: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      layers: [
        {
          id: 'water',
          source: 'mapbox-streets',
          'source-layer': 'water',
          type: 'fill',
          paint: {
            'fill-color': '#00ffff'
          }
        }
      ]
    },
    isOrderInProgress: false,
    error: ''
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    const { addressList, addressListRequest } = this.props;
    if (addressList) return;
    addressListRequest();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;
    const { width, height } = this.props;

    this.setState({
      viewport: {
        ...viewport,
        width: width || window.innerWidth,
        height: height || window.innerHeight
      }
    });
  };

  handleNewOrder = () => {
    this.setState({
      isOrderInProgress: false
    });
  };

  handleCallTaxi = values => {
    this.setState({
      error: ''
    });

    const { address1, address2 } = values;
    const { routeRequest, route } = this.props;

    if (address1 === address2) {
      this.setState({
        error: 'Пункт отправления и пункт назначения не должны совпадать'
      });
      return;
    }

    routeRequest(values);

    this.setState({
      isOrderInProgress: true
    });

    setTimeout(x => {
      if (route) {
        this._goToViewport(route[route.length - 1]);
      }
    }, 500);
  };

  _onViewportChange = viewport => {
    const { viewport: prev } = this.state;
    this.setState({
      viewport: { ...prev, ...viewport }
    });
  };

  _goToViewport = ([longitude, latitude]) => {
    this._onViewportChange({
      longitude,
      latitude,
      zoom: 11,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 3000
    });
  };

  renderMap = () => {
    const { classes, route } = this.props;
    const { viewport } = this.state;

    return (
      <div>
        <MapGL
          {...viewport}
          className={classes.map}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onViewportChange={this._onViewportChange}
        >
          <PolylineOverlay points={route} />
        </MapGL>
      </div>
    );
  };

  renderInner = () => {
    const { isOrderInProgress } = this.state;
    const { addressList, isFilled } = this.props;

    if (isOrderInProgress) {
      return <Notification handleButtonClick={this.handleNewOrder} />;
    }

    if (!isFilled) {
      return <Deny />;
    }

    return (
      <MapForm addressList={addressList} handleSubmit={this.handleCallTaxi} />
    );
  };

  render() {
    const { classes } = this.props;
    const { error } = this.state;

    return (
      <Fragment>
        {this.renderMap()}

        <Grid container direction="column" justify="center" alignItems="center">
          <Paper className={classes.paper}>{this.renderInner()}</Paper>
        </Grid>

        {error && <Snackbar message={error} variant="error" />}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  addressList: getAddressList(state),
  route: getRoute(state),
  isFilled: getIsFilled(state)
});

const mapDispatchToProps = {
  addressListRequest,
  routeRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoader(withStyles(styles)(Map)));
