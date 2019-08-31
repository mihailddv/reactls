import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Layout from "./Layout";
import { getAuth } from "../../modules/Auth";

const mapStateFromProps = state => ({
  isAuthorized: getAuth(state)
});

export default withRouter(connect(mapStateFromProps, null)(Layout));