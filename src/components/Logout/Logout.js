import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { getIsAuthorized, logoutRequest } from '../../modules/Auth';

class Logout extends PureComponent {
    componentDidMount() {
        const { isAuthorized, logoutRequest } = this.props;
 
        if(!isAuthorized) return;

        logoutRequest();
    }

    render() {
        return (
            <Redirect to="/" />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthorized: getIsAuthorized(state),
});

const mapDispatchToProps = {
    logoutRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);