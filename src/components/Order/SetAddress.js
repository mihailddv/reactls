import React, { Component } from "react";
import Select from "react-select";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Button, Segment } from "semantic-ui-react";
class SetAddress extends Component {
  state = {
    fromWhere: null,
    toWhere: null
  };

  setFromWhere = place => {
    this.setState({
      fromWhere: place
    });
  };

  setToWhere = place => {
    this.setState({
      toWhere: place
    });
  };

  createOrder = () => {
    const { fromWhere, toWhere } = this.state;

    if (fromWhere && toWhere)
      this.props.createOrder(fromWhere.value, toWhere.value);
  };

  render() {
    const { fromWhere, toWhere } = this.state;

    const {
      map: { routeVarians }
    } = this.props;

    const variants = routeVarians.filter(
      variant => !~[fromWhere, toWhere].indexOf(variant)
    );

    return (
      <Segment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h4" align="left">
              Вызов такси
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Select
              isClearable
              value={fromWhere}
              onChange={this.setFromWhere}
              options={variants}
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              isClearable
              value={toWhere}
              onChange={this.setToWhere}
              options={variants}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="blue"
              disabled={!fromWhere && !toWhere}
              onClick={this.createOrder}
            >
              Вызвать такси
            </Button>
          </Grid>
        </Grid>
      </Segment>
    );
  }
}

export default SetAddress;
