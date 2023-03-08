import React from 'react';

const Random = ({ min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  //   console.log(randomNumber);
  return (
    <div className="greetings">
      Random value between {min} and {max} => {randomNumber}
    </div>
  );
};

export default Random;
