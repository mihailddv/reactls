import React, {PureComponent} from 'react';
import SectionTitle from '../SectionTitle';    
import './Layout.css';
import {AuthConsumer} from "../../contexts/Auth";
import Congratulations from "../Congratulations";
import LoginForm from "../LoginForm";

class Layout extends PureComponent {

  renderHeader = HeaderChild => {
    return HeaderChild ? (
      <header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <div className="header__content">
          <HeaderChild />
        </div>
      </header>
    ) : null;
  };

  renderFooter = FooterChild => {
    return FooterChild ? (
      <footer className="footer">
        <SectionTitle className="footer__title">Footer</SectionTitle>
        <FooterChild />
      </footer>
    ) : null;
  };

  render() {
    const {header, footer} = this.props,
          ifHeader = header ? 'main--with-header' : '',
          ifFooter = footer ? 'main--with-footer' : '';

    return (
      <React.Fragment>
        {this.renderHeader(header)}
        <main className={`main ${ifHeader} ${ifFooter}`}>
          <SectionTitle className="main__title">Main</SectionTitle>
          <AuthConsumer>
            {({isAuthorized, authorize, authorizeError}) =>
              isAuthorized ? (
                <Congratulations/>
              ) : (
                <LoginForm
                  authorize={authorize}
                  authorizeError={authorizeError}
                />
              )
            }
          </AuthConsumer>
        </main>
        {this.renderFooter(footer)}
      </React.Fragment>
    );
  }
}

export default Layout;
