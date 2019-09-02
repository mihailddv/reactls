import React, { Component } from "react";
import Select from "react-select";
// import Grid from "@material-ui/core/Grid";
// import { Typography } from "@material-ui/core";
import { Button } from "semantic-ui-react";
import './Order.scss';


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
      <div className="call">
        <div className="call__content">
          <div className="call__caption">
            Вызов такси
          </div>

          <div className="call__item">
            <Select
              className="call__select"
              isClearable
              value={fromWhere}
              onChange={this.setFromWhere}
              options={variants}
              placeholder="Выберите адрес отправления"
            />
          </div>
          <div className="call__item">
            <Select
              className="call__select"
              isClearable
              value={toWhere}
              onChange={this.setToWhere}
              options={variants}
              placeholder="Выберите адрес прибытия"
            />
          </div>
          <div className="call__item">
            <Button
              color="red"
              disabled={!fromWhere && !toWhere}
              onClick={this.createOrder}
            >
              Вызвать такси
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default SetAddress;
