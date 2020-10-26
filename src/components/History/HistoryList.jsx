import React from 'react';
import propTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ list }) => {
  const historyItems = list.map(item => (
    <HistoryItem
      url={item.url}
      method={item.method}
      body={item.body} 
      key={item.method}/>
  ));

  return (
    <>
      {historyItems}
    </>
  );
};

HistoryList.propTypes = {
  list: propTypes.arrayOf(propTypes.shape({
    url: propTypes.string.isRequired,
    method: propTypes.string.isRequired,
    body: propTypes.string.isRequired
  }))
};

export default HistoryList;

