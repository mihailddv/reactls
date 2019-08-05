import React, { PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

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
        {/* <FooterChild /> */}
      </footer>
    ) : null;
  };

  render() {
    const { header, footer } = this.props;

    return (
      <div>
        {this.renderHeader(header)}
        <main className="main main--with-header main--with-footer">
          <SectionTitle className="main__title">Main</SectionTitle>
          <div className="login-form">
            <h1 className="login-form-title">Авторизация</h1>
            <p className="field">
              <label className="field__label" htmlFor="email">
                <span className="field-label">Почта</span>
              </label>
              <input 
                id="email"
                className="field__input field-input t-input-email"
                type="text"
                name="email"
                value="" 
              />
            </p>
            <p className="field">
              <label className="field__label" htmlFor="password">
                <span className="field-label">Пароль</span>
              </label>
              <input
                id="password" 
                className="field__input field-input t-input-password"
                type="password"
                name="password"
                value=""
              />
            </p>
            <div className="login-form__buttons">
              <button className="t-login button">Войти</button>
            </div>
          </div>
        </main>
        {this.renderFooter(footer)}
      </div>
    );
  }
}

export default Layout;
