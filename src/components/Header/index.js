import { connect } from "react-redux";
import Header from "./Header";
import { loginOut, getAuth } from "../../modules/Auth";

const mapStateFromProps = state => ({
  isAuthorized: getAuth(state)
});

const mapDispatchFromProps = { loginOut };

export default connect(mapStateFromProps, mapDispatchFromProps)(Header);