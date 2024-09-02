import { heroes } from "../data/heroes";



export const getHeroesByPublisher = (publisher) => {

    const validPublisher=['Marvel Comics', 'DC Comics', ];
    if(!validPublisher.includes(publisher)){
        throw new Error (`the ${publisher} dont exist`);
    }
return heroes.filter(hero=>hero.publisher===publisher);
  
};

