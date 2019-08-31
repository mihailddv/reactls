import React, { Component } from "react";
import propTypes from "prop-types";
import { Field } from "redux-form";
import Button from "@material-ui/core/es/Button/Button";
import fieldTemplate from "../FieldTemplate";
import { dataProfile } from "./dataField";

class ReduxForm extends Component {
  static get propTypes() {
    return {
      handleSubmit: propTypes.func.isRequired,
      saveProfile: propTypes.func.isRequired,
      alertHandle: propTypes.func.isRequired
    };
  }

  handleSubmit = val => {
    const { saveProfile, alertHandle } = this.props;
    saveProfile(val);
    alertHandle();
  };

  renderFields = () => {
    return dataProfile.map(item => {
      const { id, label, placeholder, name, type, ...rest } = item;
      return (
        <Field
          key={id}
          component={fieldTemplate}
          label={label}
          placeholder={placeholder}
          name={name}
          type={type}
          {...rest}
        />
      );
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(val => this.handleSubmit(val))}>
        {this.renderFields()}
        <Button variant="contained" color="primary" type="submit">
          Сохранить
        </Button>
      </form>
    );
  }
}

export default ReduxForm;
