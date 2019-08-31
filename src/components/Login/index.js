import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { loginIn, getAuth } from "../../modules/Auth";
import Login from "./Login";
import { myValidator } from "./validator";

const mapStateFromProps = state => ({
  isAuthorized: getAuth(state)
});

const mapDispatchFromProps = { loginIn };

export default connect(mapStateFromProps, mapDispatchFromProps)(reduxForm({
  form: "loginForm",
  validate: myValidator
})(Login));