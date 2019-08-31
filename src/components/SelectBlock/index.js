import { connect } from "react-redux";
import {
  getOptions, fetchRequest, getErrors, fetchAddress
} from "../../modules/SelectBlock";
import SelectBlock from "./SelectBlock";

const mapStateFromProps = state => ({
  options: getOptions(state),
  error: getErrors(state)
});

const mapDispatchFromProps = { fetchRequest, fetchAddress };

export default connect(mapStateFromProps, mapDispatchFromProps)(SelectBlock);
