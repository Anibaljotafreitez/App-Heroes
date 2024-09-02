import React, { useMemo } from "react";
import { Heroecard } from "./HeroeCard";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";


export const HeroList = ({ publisher }) => {
  const heroes = useMemo(()=> getHeroesByPublisher(publisher), [publisher]) ;

  // console.log(heroes)
  return (
    // <ul> cambiamos la lista por un div, creo un comp. para el map heroCard
    <div className="row row-cols-1 row-cols-md-3 g-3  animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <Heroecard key={hero.id}
                      {...hero}
        />
        // <li key={hero.id}>
        //     {hero.superhero}
        //     </li>
      ))}
    </div>
   
  );
};
