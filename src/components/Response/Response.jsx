import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const Response = ({ content }) => (
  <>
    <ReactJson src={content}/>
  </>
);

Response.propTypes = {
  content: PropTypes.object
};

export default Response;
