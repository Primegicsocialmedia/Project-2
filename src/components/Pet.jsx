import React from "react";

const Pet = (props) => {
  function handleDelete() {
    props.setPets((prev) => prev.filter((pet) => pet.id != props.id));
  }

  return (
    <li className=" m-2 p-2 ">
      {props.name} is a {props.species} and is {props.age} years old.{" "}
      <button onClick={handleDelete} className="border-1 m-2 p-2">
        Delete
      </button>
    </li>
  );
};

export default Pet;
