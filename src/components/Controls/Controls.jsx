import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ 
  url, 
  body, 
  onChange, 
  onSubmit }) => (
  <>
    <form onSubmit={onSubmit} >
      <label>
        <span>GET</span>
        <input 
          type="radio"
          name="method"
          id="get"
          value="GET"
          onChange={onChange}
        />
      </label>
      <label>
        <span>POST</span>
        <input
          type="radio"
          name="method"
          id="post"
          value="POST"
          onChange={onChange}
        />
      </label>
      <label>
        <span>PUT</span>
        <input
          type="radio"
          name="method"
          id="post"
          value="POST"
          onChange={onChange}
        />
      </label>
      <label>
        <span>PATCH</span>
        <input
          type="radio"
          name="method"
          id="patch"
          value="PATCH"
          onChange={onChange}
        />
      </label>
      <label>
        <span>DELETE</span>
        <input
          type="radio"
          name="method"
          id="delete"
          value="DELETE"
          onChange={onChange}
        />
      </label>
      <label>
        <input 
          type="text"
          name="url"
          value={url}
          onChange={onChange}
        />
      </label>
      <label>
        <input
          type="text"
          name="body"
          value={body}
          onChange={onChange}
        />
      </label>
    </form>
  </>
);

Controls.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  onSubmit: PropTypes.string.isRequired
};

export default Controls;
