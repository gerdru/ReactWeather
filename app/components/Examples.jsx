import React from 'react';
import {Link} from 'react-router';

var Examples = (props) => {
  return (
    <div>
    <h1 className="text-center">Examples</h1>
    <p>Here are a few example locations to try out:</p>
    <ol>
      <li><Link to='/?location=Asuncion'>Asuncion, PY</Link></li>
      <li><Link to='/?location=Berlin, GER'>Berlin, GER</Link></li>
    </ol>
    </div>
  )
};

export default Examples;
