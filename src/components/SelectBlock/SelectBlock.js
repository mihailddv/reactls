import React, { Component } from "react";
import propTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import SelectField from "../SelectFilter";
import { dataSelects, switchName } from "./utils";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 6,
    maxWidth: 450
  },
  pos: {
    marginBottom: 15
  },
  title: {
    textAlign: "center"
  },
  posBody: {
    marginTop: 35,
    marginBottom: 45
  }
});

class SelectBlock extends Component {
  state = {
    from: null,
    to: null,
    isFinish: false
  };

  static get propTypes() {
    return {
      classes: propTypes.object.isRequired,
      fetchRequest: propTypes.func.isRequired,
      fetchAddress: propTypes.func.isRequired,
      options: propTypes.arrayOf(propTypes.object),
      error: propTypes.string
    };
  }

  componentDidMount() {
    const { fetchRequest } = this.props;
    fetchRequest();
  }

  handleChange = (selected, name) => {
    this.setState({
      [name]: selected ? selected.label : selected
    });
  };

  handleClick = () => {
    const { from, to, isFinish } = this.state;
    if (from && to) {
      const { fetchAddress } = this.props;
      fetchAddress({ from, to });
    }
    this.setState({
      isFinish: !isFinish,
      from: null,
      to: null
    });
  };

  renderSelects = () => {
    const { classes, options } = this.props;
    if (!options) {
      return null;
    }
    return dataSelects.map(item => {
      return (
        <div key={item.id} className={classes.pos}>
          <SelectField
            placeholder={item.placeholder}
            options={options}
            name={item.name}
            handleChange={this.handleChange}
            filterSelected={this.state[switchName[item.name]]}
          />
        </div>
      );
    });
  };

  render() {
    const { classes, error } = this.props;
    const { isFinish, from, to } = this.state;
    return (
      <Paper className={classes.root}>
        <Typography
          variant="h4"
          component="h2"
          className={classNames(classes.pos, classes.title)}
        >
          {
            isFinish
              ? "Заказ размещён"
              : error ? error : "Вызов такси"
          }
        </Typography>
        {!isFinish
          ? !error && this.renderSelects()
          : <Typography
            variant="body1"
            component="p"
            className={classNames(classes.pos, !isFinish ? classes.title : classes.posBody)}
          >
            Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
          </Typography>
        }
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClick}
          disabled={!isFinish && !(from && to)}
        >
          {isFinish ? "Сделать новый заказ" : "Вызвать такси"}
        </Button>
      </Paper>
    );
  }
}

export default withStyles(styles)(SelectBlock);