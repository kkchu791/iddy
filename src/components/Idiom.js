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
        <p>{idiom["content"]}</p>
      </div>
    </div>
  );
}

export default Idiom;
