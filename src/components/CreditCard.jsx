import React from 'react';

const CreditCard = (props) => {
  const color = {
    color: `${props.color}`,
  };
  const bgColor = {
    backgroundColor: `${props.bgColor}`,
  };
  let display = '';
  for (let i = 0; i < props.number.length; i++) {
    if (props.number.length - 1 - i > 4) {
      display += '*';
      // console.log(display);
    } else if (props.number.length - 1 - i < 4) {
      display += props.number[i];
      // console.log(display);
    }
  }
  return (
    <div style={bgColor} className="aCreditCard">
      <div className="typeCreditCard">{props.type}</div>
      <div style={color} className="numberCreditCard">
        {display}
      </div>
      <div style={color} className="dateAndBank">
        Expires : {props.expirationMonth.toString().padStart(2, '0')}/
        {props.expirationYear.toString().slice(-2)} {props.bank}
      </div>
      <div style={color} className="userCreditCard">
        {props.owner}
      </div>
    </div>
  );
};

export default CreditCard;
