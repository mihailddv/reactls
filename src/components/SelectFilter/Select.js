import React, { Component } from "react";
import Select from "react-select";
import propTypes from "prop-types";

class SelectFilter extends Component {
  state = {
    selected: ""
  };

  static get propTypes() {
    return {
      placeholder: propTypes.string.isRequired,
      options: propTypes.array,
      name: propTypes.string.isRequired,
      filterSelected: propTypes.string
    };
  }

  handleSelect = (selected, { name }) => {
    this.setState({ selected });
    const label = !selected ? null : selected;
    this.props.handleChange(label, name);
  };

  render() {
    const { placeholder, options, name, filterSelected } = this.props;
    return (
      <Select
        value={this.state.selected}
        onChange={this.handleSelect}
        placeholder={placeholder}
        options={options.filter(item => item.label !== filterSelected)}
        name={name}
        isClearable
        required
      />
    );
  }
}

export default SelectFilter;