import React from 'react';

const DriverCard = ({ name, rating, img, car }) => {
  const heightStyle = {
    height: '6rem',
    width: '6rem',
    borderRadius: '50%',
  };

  let arrondi = Math.round(rating);
  let display = '';

  for (let i = 0; i < 5; i++) {
    if (i < arrondi) {
      display += '★';
    } else {
      display += '☆';
    }
  }

  return (
    <div className="driverCard">
      <div className="driverContainer">
        <div className="driverImg">
          <img src={img} style={heightStyle} alt="" />
        </div>
        <div className="driverInfo">
          <div>{name}</div>
          <div>{display}</div>
          <div>
            {car.model} - {car.licensePlate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
