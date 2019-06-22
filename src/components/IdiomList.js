import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Route, Link } from 'react-router-dom';

class IdiomList extends Component {
  render() {
    let { idioms } = this.props;

    return (
      <div>
        {idioms.map(idiom => (
          <div key={idiom["id"]}>
            <Link to={`/i/${idiom.id}`}>
              {idiom["content"]}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    idioms: state.idioms
  };
}

export default connect(mapStateToProps)(IdiomList);
