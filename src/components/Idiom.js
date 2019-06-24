import React from 'react';
import { Link } from 'react-router-dom';

const Idiom = ({ idiom }) => {
  return (
    <div>
      <div>
        <Link to="/">
          Back
        </Link>
      </div>
      <div>
        <p style={content}>
          {idiom["content"]}
        </p>
        <p>
          {idiom["meaning"]}
        </p>
        <p style={example}>
          {idiom["example"]}
        </p>
      </div>
    </div>
  );
}

const content = {
  fontWeight: "bold",
  textDecoration: "underline"
}

const example = {
  fontStyle: "italic",
}


export default Idiom;
