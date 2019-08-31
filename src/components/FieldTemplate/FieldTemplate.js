import React from "react";
import propTypes from "prop-types";
import TextField from "@material-ui/core/es/TextField/TextField";

const style = {
  color: "red"
};

const fieldTemplate = props => {
  const {
    input,
    meta: { touched, error, invalid },
    ...rest
  } = props;
  return (
    <div>
      <TextField
        margin="normal"
        fullWidth
        required
        error={touched && !!error}
        {...input}
        {...rest}
      />
      {input.name === "cvv" && (!touched || !invalid) && (
        <p>Последние три цифры на оборотной стороне карты</p>
      )}
      {touched && error && <p style={style}>{error}</p>}
    </div>
  );
};

fieldTemplate.propTypes = {
  input: propTypes.object.isRequired,
  touched: propTypes.bool,
  error: propTypes.string,
  invalid: propTypes.bool,
  rest: propTypes.object
};

export default fieldTemplate;
