import React from 'react';
import './Form.css'

class Form extends React.Component {

  render() {
    return (
      <div className="app-container">
        <form className="form">
          <h1>Введите свои данные</h1>
          <p className="field">
            <label className="field__label" for="firstname">
              <span className="field-label">Имя</span>
            </label>
            <input className="field__input field-input t-input-firstname" type="text" name="firstname" value="" />
            <span className="field__error field-error t-error-firstname"></span>
          </p>
          <p className="field">
            <label className="field__label" for="lastname">
              <span className="field-label">Фамилия</span>
            </label>
            <input className="field__input field-input t-input-lastname" type="text" name="lastname" value="" />
            <span className="field__error field-error t-error-lastname"></span>
          </p>
          <p className="field">
            <label className="field__label" for="password">
              <span className="field-label">Пароль</span>
            </label>
            <input className="field__input field-input t-input-password" type="password" name="password" value="" />
            <span className="field__error field-error t-error-password"></span>
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