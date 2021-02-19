import React from 'react';
import propTypes from 'prop-types';

const HistoryItem = ({ url, method, body }) => (
  <div> 
    <h3>URL: {url}</h3>
    <h4>Method: {method}</h4>
    <p>Body: {body}</p>
  </div>
);

HistoryItem.propTypes = {
  url: propTypes.string.isRequired,
  method: propTypes.string.isRequired,
  body: propTypes.string.isRequired
};

export default HistoryItem;
