import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchIdioms } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { keyword: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ keyword: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchIdioms(this.state.keyword);
  }

  render() {
    const { keyword } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          placeholder="Search..."
          value={keyword}
          onChange={this.onInputChange}
          style={searchBar}
        />
      </form>
    );
  }
}

const searchBar = {
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #000000",
  marginBottom: "20px"
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchIdioms }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
