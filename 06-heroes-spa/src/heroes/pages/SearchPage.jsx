import { HeroCard } from '../components';
import { useSearch, useForm } from '../hooks';
import { getHeroesByName } from '../helpers';


export const SearchPage = () => {
  
  const { searchText, onInputChange  } = useForm({
    searchText: ''
  });

  const [ q, onSearchSubmit] = useSearch(searchText);

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  return (
    <>
        <h1>Search</h1>
        <hr />
        <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
              <input 
              type="text" 
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText} 
              onChange={ onInputChange }
              />
              <button className="btn btn-outline-primary mt-1">Search</button>
            </form>  
          </div>
          <div className="col-7">
            <h4>Results</h4>
            <hr />

            <div className="alert alert-primary" style={{display: showSearch ? '' : 'none'}}>Search a hero</div>

            <div className="alert alert-danger" style={{display: showError ? '' : 'none'}}><b>{q}</b> doesn't exist</div>

            {
              heroes.map(hero => (
                <HeroCard key = {hero.id} {...hero} />
              ))
            }

          </div>
        </div>
    </>
  )
}