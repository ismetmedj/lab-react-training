import React from 'react';

const IdCard = (props) => {
  //le props dans le IdCard peut s'écrire {picture,firstName,lastName,gender,heught,birth}
  //ce qui permet de deconstruire le props et d'ensuite d'écrire directement les clés sans
  // le props, i.e écrire picture et pas props.picture
  return (
    <div>
      <span className="idCardContainer">
        <img src={props.picture} className="picture" alt="profile" />
        <div className="idCardInfo">
          <span className="firstName">
            <b>First Name:</b> {props.firstName}
          </span>
          <span className="lastName">
            <b>Last Name:</b> {props.lastName}
          </span>
          <span className="gender">
            <b>Gender:</b> {props.gender}
          </span>
          <span className="height">
            <b>Height:</b> {props.height / 100}m
          </span>
          <span className="birth">
            <b>Birth:</b> {props.birth.toDateString()}
          </span>
        </div>
      </span>
    </div>
  );
};

export default IdCard;
