import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroeById } from '../helpers/getHeroeById';



export const Hero = () => {

  const {id} =useParams();
 
  const navigate= useNavigate()
 
const heroImage= `/assets/heroes/${id}.jpg`

const hero= useMemo( ()=>  getHeroeById( id ), [id]);

const onNavigateBack=()=>{
  navigate(-1);
//   if(hero.publisher==='Marvel Comics'){
//     return navigate('/search',{
//       repalce:true,
//     })                     // tambien puedo utilizar = navigate(-1) y me devuelve a la pagina anterior
//   } else{
// navigate('/search',{
//   repalce:true,
// })}
};


if(!hero){
  return <Navigate to="/marvel" />  // podria tambien <>404 - Not Found</>
}
  return (
    <>
    <div className='row mt-5'>
      <div className="col-4">
        <img 
         src={heroImage}
         alt={hero.superhero}
         className='img-thumbnail animate__animated animate__backInLeft' />
      </div>
      <div className='col-8'>
        <h2>{hero.superhero}</h2>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter Ego:</b> {hero.alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b> {hero.publisher}</li>
          <li className='list-group-item'><b>First Appearance:</b> {hero.first_appearance}</li>
          
        </ul>
        <h5 className='mt-3'>Charaters</h5>
        <p className='cart-text'>{hero.characters}</p>

        <button className='btn btn-danger'
                onClick={onNavigateBack}
        >Regresar</button>

      </div>

    </div>
    
    </>
  )
}
