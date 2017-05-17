import React from 'react';
import { Link } from 'react-router';

export default function NotFound() {
  return (
          <div>
            <h3> 404: Nothing Found </h3>
            <p>Sorry there have been a mistake</p>
            <Link to="/"> Go Back </Link>to the Home Page
          </div>
          );
}
