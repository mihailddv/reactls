import React from 'react';
import { connect } from 'react-redux';
import { logout, getIsAuthorized } from '../../../../modules/Auth';

import NavBar from './NavBar';

const Header = ({ isAuthorized, logout }) => {
  return (
    <div>
      <NavBar isAuthorized={isAuthorized} logout={logout} />
    </div>
  );
};

const mapStateToProps = state => ({ isAuthorized: getIsAuthorized(state) });
const mapDispatchToProps = { logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
