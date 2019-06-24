import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Route, Link } from 'react-router-dom';

class IdiomList extends Component {
  render() {
    let { idioms } = this.props;

    return (
      <div>
        {idioms.map(idiom => (
          <div key={idiom["id"]} style={idiomItem}>
            <Link style={idiomLink} to={`/i/${idiom.id}`}>
              {idiom["content"]}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

const idiomItem = {
  margin: "20px 0"
}

const idiomLink= {
  textDecoration: "none",
  color: "black"
}

function mapStateToProps(state) {
  return {
    idioms: state.idioms
  };
}

export default connect(mapStateToProps)(IdiomList);
