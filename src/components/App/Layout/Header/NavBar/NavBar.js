import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Segment, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Nav.css";


const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
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
        <Button.Group className="nav" floated="right" color="red">
          <Button className="nav__item" as="a" href="/map">
            Карта
          </Button>
          <Button className="nav__item" as="a" href="/profile">
            Профиль
          </Button>
          <Button className="nav__item" onClick={this.logout}>Выход</Button>
        </Button.Group>
      </React.Fragment>
    );
  };

  render() {
    const { isAuthorized, classes } = this.props;

    return (
      <div className={classes.root}>
        <Segment color="red" style={styles.NavBar}>
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
