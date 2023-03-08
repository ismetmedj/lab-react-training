import React from 'react';

const Rating = (props) => {
  let arrondi = Math.round(props.children);

  let display = '';

  for (let i = 0; i < 5; i++) {
    if (i < arrondi) {
      display += '★';
    } else {
      display += '☆';
    }
  }

  return <div>{display}</div>;
};

export default Rating;
