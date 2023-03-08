import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    height: '5rem',
  };

  function RGBToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length === 1) r = '0' + r;
    if (g.length === 1) g = '0' + g;
    if (b.length === 1) b = '0' + b;

    return '#' + r + g + b;
  }
  return (
    <div style={divStyle} className="greetings">
      <p className="rgb">
        rgb({r},{g},{b})<br></br>
        {RGBToHex(r, g, b)}
      </p>
    </div>
  );
};

export default BoxColor;
