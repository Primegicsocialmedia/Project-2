import React, { useState } from "react";

const AddPetForm = (props) => {
  const [name, setName] = useState();
  const [species, setSpecies] = useState();
  const [age, setAge] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    props.setPets((prev) =>
      prev.concat({ name, species, age, id: Date.now() })
    );

    setName("");
    setSpecies("");
    setAge("");
  }
  return (
    <form onSubmit={handleSubmit} className="m-2 p-2">
      <fieldset>
        <legend className="p-2 font-bold">Add New Pet</legend>
        <input
          className="m-2 p-2 border-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          className="m-2 p-2 border-2"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          placeholder="species"
        />
        <input
          className="m-2 p-2 border-2"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="age in years"
        />
        <button className="border-1 font-bold p-2">Add Pet</button>
      </fieldset>
    </form>
  );
};

export default AddPetForm;
