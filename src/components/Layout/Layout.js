import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core';
// import PropTypes from 'prop-types';
import cs from 'classnames';

const styles = theme => ({
  header: {

  },

  mainWithHeader: {

  },

  mainWithFooter: {

  },

  main: {
    height: '100vh'
  },

  mainWithFooterAndHeader: {

  }
});

class Layout extends PureComponent {
  static propTypes = {
    // header: PropTypes.func,
    // footer: PropTypes.func
  };

  renderMain = className => {
    const { children } = this.props;
    return <main className={className}>{children}</main>;
  };

  renderHeader = HeaderChild => {
    const { classes } = this.props;

    return HeaderChild ? (
      <header className={cs('header', classes.header)}>
        <div className="header__content">
          <HeaderChild />
        </div>
      </header>
    ) : null;
  };

  renderFooter = FooterChild => {
    const { classes } = this.props;

    return FooterChild ? (
      <footer className={cs('footer', classes.footer)}>
        <FooterChild />
      </footer>
    ) : null;
  };

  render() {
    const { header, footer, classes } = this.props;
    const mainClassName = cs(
      classes.main,
      footer && classes.mainWithFooter,
      header && classes.mainWithHeader,
      header && footer && classes.mainWithFooterAndHeader
    );

    return (
      <Fragment>
        {this.renderHeader(header)}
        {this.renderMain(mainClassName)}
        {this.renderFooter()}
      </Fragment>
    );
  }
}

export default withStyles(styles)(Layout);
