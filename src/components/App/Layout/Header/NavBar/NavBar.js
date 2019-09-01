import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import { Button, Segment, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 20,
    marginLeft: -12
  },
  NavBar: {
    position: "fixed",
    width: "100%"
  }
};

class NavBar extends Component {
  logout = () => {
    this.props.logout();
  };

  renderMenu = () => {
    return (
      <React.Fragment>
        <Button.Group floated="right" color="blue">
          <Button as="a" href="/map">
            Карта
          </Button>
          <Button as="a" href="/profile">
            Профиль
          </Button>
          <Button onClick={this.logout}>Выход</Button>
        </Button.Group>
      </React.Fragment>
    );
  };
  render() {
    const { isAuthorized, classes } = this.props;
    return (
      <div className={classes.root}>
        <Segment color="blue" style={styles.NavBar}>
          <Header as="h2" floated="left">
            Loft Taxi
          </Header>
          {isAuthorized ? this.renderMenu() : ""}
        </Segment>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
