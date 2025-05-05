import React from "react";

const Pet = (props) => {
  return (
    <li className=" m-2 p-2 ">
      {props.name} is a {props.species} and is {props.age} years old.{" "}
    </li>
  );
};

export default Pet;
