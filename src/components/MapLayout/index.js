import { connect } from "react-redux";
import MapLayout from "./MapLayout";
import { getProfile } from "../../modules/Profile";
import { getRoute } from "../../modules/SelectBlock";

const mapStateFromProps = state => ({
  isMap: getProfile(state),
  route: getRoute(state)
});

export default connect(mapStateFromProps, null)(MapLayout);