import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import { input } from "../../helpers/Fields";

import Grid from "@material-ui/core/Grid";
import { editProfile } from "../../../modules/Profile";
import { Button } from "semantic-ui-react";

import "./EditProfile.css";

const validate = values => {
  const errors = {};

  if (values.cardNumber && values.cardNumber.replace(/\s/g, "").length !== 16) {
    errors.cardNumber = "В номере карты 16 цифр";
  }

  if (
    values.cardNumber &&
    isNaN(Number(values.cardNumber.replace(/\s/g, "")))
  ) {
    errors.cardNumber = "Может содержать только цифры";
  }

  if (values.cvv && isNaN(Number(values.cvv.replace(/\s/g, "")))) {
    errors.cvv = "Может содержать только цифры";
  }

  if (values.cvv && values.cvv.length !== 3) {
    errors.cvv = "CVV состоит из 3 цифр";
  }

  return errors;
};

const ccFormat = value => {
  var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || "";
  var parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
};

class EditForm extends Component {
  handleSend = values => {
    this.props.editProfile(values);
    this.props.saveSuccess();
  };

  render() {
    const { userInfo } = this.props;

    return (
      <Form
        onSubmit={this.handleSend}
        initialValues={userInfo}
        validate={validate}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={24}>
              <Grid item xs={12} md={6}>
                <Field
                  component={input}
                  required
                  name="cardName"
                  label="Имя владельца"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={input}
                  required
                  name="cardNumber"
                  label="Номер карты"
                  parse={ccFormat}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={input}
                  type="date"
                  required
                  name="expDate"
                  label="Дата окончания действия"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={input}
                  required
                  name="cvv"
                  label="CVV"
                  fullWidth
                />
              </Grid>
            </Grid>
            <br />
            <Button color="blue" type="submit" disabled={pristine || invalid}>
              Сохранить
            </Button>
          </form>
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.user.userInfo
});

const mapDispatchToProps = { editProfile };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);
