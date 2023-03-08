import React from 'react';

const Greetings = ({ lang, children }) => {
  const langue = {
    de: 'Hallo',
    en: 'Hello',
    fr: 'Bonjour',
    es: 'Hola',
  };

  return (
    <div className="greetings">
      {/* {console.log(langue[lang])} */}
      <p className="greetingsP">
        {langue[lang]} {children}
      </p>
    </div>
  );
};

export default Greetings;
