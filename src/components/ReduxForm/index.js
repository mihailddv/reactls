import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { getProfile, saveProfile } from "../../modules/Profile";
import { myValidator } from "./validator";
import ReduxForm from "./ReduxForm";

const mapStateFromProps = state => ({
  initialValues: getProfile(state)
});

const mapDispatchFromProps = { saveProfile };

export default connect(mapStateFromProps, mapDispatchFromProps)(reduxForm({
  form: "paymentForm",
  validate: myValidator
})(ReduxForm));
