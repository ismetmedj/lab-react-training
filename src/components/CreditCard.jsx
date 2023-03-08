import React from 'react';

const CreditCard = (props) => {
  const color = {
    color: `${props.color}`,
  };
  const bgColor = {
    backgroundColor: `${props.bgColor}`,
  };

for(let i = 1; i < props.number.length; i++) {
    if (props.number.length - i =)
}
  return (
    <div style={bgColor} className="aCreditCard">
      <div className="typeCreditCard">{props.type}</div>
      <div style={color} className="numberCreditCard">
        {props.number}
      </div>
      <div style={color} className="dateAndBank">
        Expires : {props.expirationMonth}/{props.expirationYear} {props.bank}
      </div>
      <div style={color} className="userCreditCard">
        {props.owner}
      </div>
    </div>
  );
};

export default CreditCard;
