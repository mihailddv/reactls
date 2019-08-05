import React, { PureComponent } from 'react';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-menu">
          <p className="header-menu__email header-email t-header-email">email</p>  
          {/* <Button 
            className="header-mrnu__button t-logout button"
            onClick={logout}
            type="button"
          >
            Выйти
          </Button> */}
        </div>    
    );
  }
}

export default Header;
