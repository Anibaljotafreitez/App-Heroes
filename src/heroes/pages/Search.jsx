
import { useForm } from "../hooks/useForm";
import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";
import { getHeroeByName } from "../helpers/getHeroeByName";
import { Heroecard } from "../components/HeroeCard";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation()

  const {q=''}= queryString.parse(location.search);
  
  const heroe= getHeroeByName(q);
  console.log(heroe)
  
  const {searchText, onInputChange,  onResetForm}= useForm({
    searchText:'',
  })

const onSearchSubmit=(event)=>{
 event.preventDefault();
console.log({searchText});

navigate(`?q=${searchText}`);
onResetForm();
}
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h5>Serching..</h5>
          <hr />
          <form onSubmit={onSearchSubmit} >
            <input
              type="text"
              placeholder="Enter your hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              autoComplete="off"
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h5>Result</h5>
          <hr />
          {
           (q==='')?  <div className="alert alert-primary">Search Hero</div> 
                  : (heroe.length===0) && <div className="alert alert-danger">
                                          There not result for <b>{q}</b> </div>
          }
          
          {
            heroe.map(hero=>(
              <Heroecard  key={hero.id}
                          {...hero}
                          />
                        ))
          }
                  
          </div>
      </div>
    </>
  );
};
