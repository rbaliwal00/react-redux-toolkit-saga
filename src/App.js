import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountryFetch } from './countrySlice';
import './App.css';

function App() {
  const {data, isLoading} = useSelector(state => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryFetch());
  }, [dispatch]);

  console.log(data[0]?.capital[0])

  return (
    <div className="App">
      <h1>Countries</h1>
      <p>Images of different countries for you to see.</p>
      <hr />
      <div className='Gallery'>
        {data.map((country) => (
          <div key={country.name.common} className='row'>
            <div className='column column-left'>
              <img src={country.flags.png} alt={country.name.common} width="180" height="180"/>
            </div>
            <div className='column column-right'>
              <h2>{country.name.common}</h2>
              <h5>Capital: {country?.capital[0]}</h5>
              <p>Population: {country.population}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
