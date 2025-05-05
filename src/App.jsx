import React from "react";
import Header from "./components/Header";
import TimeArea from "./components/TimeArea";
import Footer from "./components/Footer";
import Pet from "./components/Pet";
import { useState } from "react";
import LikeArea from "./components/LikeArea";



const pets = [
  { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
  { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
  { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
  { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
  { name: "Paws", species: "dog", age: "6", id: 789789789 }
]

const App = () => {
  return (
    <>
      <Header />
      <LikeArea />
      <TimeArea />
      
      <ul>
        {pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            species={pet.species}
            age={pet.age}
          />
        ))}

      </ul>
   
      <Footer />
    </>
  );
};

export default App;
