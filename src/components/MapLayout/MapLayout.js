import React, { Component, Fragment } from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SelectBlock from "../SelectBlock";
import PaperSheet from "../PaperSheet";
import Map from "../Map";

const styles = {
  root: {
    position: "relative"
  },
  messageBlock: {
    position: "absolute",
    width: 450
  }
};

class MapLayout extends Component {
  static get propTypes() {
    return {
      isMap: propTypes.object
    };
  }

  render() {
    const { isMap, classes, route } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <Map route={route}/>
          <div className={classes.messageBlock}>
            {isMap
              ? <SelectBlock/>
              : <PaperSheet/>
            }
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(MapLayout);