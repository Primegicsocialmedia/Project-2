import React  from "react";
import Header from "./components/Header";
import TimeArea from "./components/TimeArea";
import Footer from "./components/Footer";
import Pet from "./components/Pet";
import { useState,useEffect } from "react";
import LikeArea from "./components/LikeArea";
import AddPetForm from "./components/AddPetForm";





const App = () => {


  const [pets, setPets] = useState([])
  
  // only run once the first time this component is rendered
  useEffect(() => {
    if (localStorage.getItem("examplePetData")) {
      setPets(JSON.parse(localStorage.getItem("examplePetData")))
    }
  }, [])
  
  // run every time our pet state changes
  useEffect(() => {
    localStorage.setItem("examplePetData", JSON.stringify(pets))
  }, [pets])
  

  return (
    <>
      <Header />
      <LikeArea />
      <TimeArea />
      <AddPetForm setPets={setPets}/>
      <ul>
        {pets.map((pet) => (
          <Pet
          setPets={setPets}
          id={pet.id}
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
