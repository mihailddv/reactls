import React, { Component } from 'react';
import Loader from '../../components/Loader';

function withLoader(WrapperComponent) {
    return class extends Component {
        render() {
            const { isLoading } = this.props;
            return isLoading ? <Loader /> : <WrapperComponent {...this.props} />;
        }
    }
}

export default withLoader;