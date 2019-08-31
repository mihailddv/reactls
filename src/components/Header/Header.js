import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import { getIsAuthorized } from '../../modules/Auth';

class Header extends PureComponent {
  render() {
    const { isAuthorized } = this.props;
    return <Navbar isAuth={isAuthorized !== null} />;
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
