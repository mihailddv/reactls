import React from 'react';
import './Form.css'

class Form extends React.Component {

  state = {
    firstname: '',
    lastname: '',
    password: '',
    firstNameError: '',
    lastNameError: '',
    passwordError: ''
  };

  firstNameChange = event => {
    this.setState({firstname: event.target.value, firstNameError: '', lastNameError: '', passwordError: ''});
  }

  lastNameChange = event => {
    this.setState({lastname: event.target.value, firstNameError: '', lastNameError: '', passwordError: ''});
  }

  passwordChange = event => {
    this.setState({password: event.target.value, firstNameError: '', lastNameError: '', passwordError: ''});
  }  

  formSubmit = event => {
    event.preventDefault();
    this.formVal();
  }

  firstNameVal = () => {
    if (this.firstname === '') {
      this.setState({
        firstNameError: 'Нужно указать имя'
      });
    } else if (this.state.firstname !== 'james') {
      this.setState({
        firstNameError: 'Имя указано не верно'
      });
    }
  }

  lastNameVal = () => {
    if (this.lastname === '') {
      this.setState({
        lastNameError: 'Нужно указать фамилию'
      });
    } else if (this.state.lastname !== 'bond') {
      this.setState({
        lastNameError: 'Фамилия указана не верно'
      });
    }
  } 

  passwordVal = () => {
    if (this.password === '') {
      this.setState({
        passwordError: 'Нужно указать пароль'
      });
    } else if (this.state.password !== '007') {
      this.setState({
        passwordError: 'Пароль указан не верно'
      });
    }
  } 

  checkData = () => {
    this.firstNameVal();
    this.lastNameVal();
    this.passwordVal();
  }

  formVal = () => {
    const { lastname, firstname, password } = this.state;

    if (firstname === 'james' && lastname === 'bond' && password === '007') {
      this.setState({ isLoggedIn: true });
      alert('верно!');
    } else {
      this.checkData();
    }
  };

  render() {
    const {
      firstname,
      lastname,
      password,
      // firstNameError,
      // lastNameError,
      // passwordError,
      // isLoggedIn
    } = this.state;

    return (
      <div className="app-container">
        <form className="form" onSubmit={this.formSubmit} >
          <h1>Введите свои данные</h1>
          <p className="field">
            <label className="field__label" htmlFor="firstname">
              <span className="field-label">Имя</span>
            </label>
            <input className="field__input field-input t-input-firstname" type="text" name="firstname" value={firstname} onChange={this.firstNameChange}/>
            <span className="field__error field-error t-error-firstname">{this.state.firstNameError}</span>
          </p>
          <p className="field">
            <label className="field__label" htmlFor="lastname">
              <span className="field-label">Фамилия</span>
            </label>
            <input className="field__input field-input t-input-lastname" type="text" name="lastname" value={lastname} onChange={this.lastNameChange}/>
            <span className="field__error field-error t-error-lastname">{this.state.lastNameError}</span>
          </p>
          <p className="field">
            <label className="field__label" htmlFor="password">
              <span className="field-label">Пароль</span>
            </label>
            <input className="field__input field-input t-input-password" type="password" name="password" value={password} onChange={this.passwordChange} />
            <span className="field__error field-error t-error-password">{this.state.passwordError}</span>
          </p>
          <div className="form__buttons">
            <input type="submit" className="button t-submit" value="Проверить" />
          </div>
        </form>
      </div>
    )
  }

}

export default Form;