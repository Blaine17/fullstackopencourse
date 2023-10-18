import { useState, useEffect } from 'react'
import './App.css'
import api from './services/api'

const Search = ({ value, onChange }) => {
  return (
    <div>
      Search:
      <input onChange={onChange} value={value}/>
    </div>
  )
}

const Button = ({ country, setNewSearch }) => {
  const getPlace = () => {
    // const place = api.getCountry(country)
    // .then()
    // console.log(place)
    // console.log(country)
    setNewSearch(country)
  }
  
  return (
    <button onClick={getPlace}>{'show'}</button>
  )
}
const Filtered = ({ filteredSearch, setNewSearch }) => {

  if (filteredSearch.length > 10) {
    return (
      <div>
        Refine Search
      </div>
    )
  }
  else if (filteredSearch.length <= 10 && filteredSearch.length > 1) {
    return (
      <div>
          {filteredSearch.map(country =>
          <div key={country.name.common}>{country.name.common}
          <Button country={country.name.common} setNewSearch={setNewSearch} />
          </div> 
        )}
      </div>
    )
  }
    else if (filteredSearch.length === 1) {
      return (
        <Country country={filteredSearch[0]} />
      )
    }
}

const Text = ({ text, value }) => {
  return (
    <div>
      {`${text} ${value}`}
    </div>
  )
}

const ListOfText = ({ country }) => {
  return (
    <ul>
      {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
    </ul>
  )
}

const CountryWeather = ({ weather }) => {
  return (
    <div>
      {weather 
      ? <div>
          <div>{`${weather.current.feelslike_f} Farenheit`}</div>
          <img src={weather.current.condition.icon}></img>
      </div> 
      : <div>No weather data</div>}
    </div>
  )
}

const Country  = ({ country }) => {
  console.log(country.flags)
  const [weather, setWeather] = useState(null)
  const [weatherError, setWeatherError] = useState(null)

  useEffect(() => {
    api.getWeather(country.capital)
    .then(weather => {
      setWeather(weather)
    })
    .catch( error => {
      setWeatherError(`No weather info for ${country}`)
    })
  }, [])
  
  
  return (
    <div>
      <h1>{country.name.common}</h1>
      <Text text="capital" value={country.capital} />
      <Text text="area" value={country.area}/>
      <h2>languages</h2>
      <ListOfText country={country}/>
      <img src={country.flags.png}/>
      <h2>weather</h2>
      <CountryWeather weather={weather}/>
    </div>
  )
}

function App() {
  const BASE_URL = import.meta.env.VITE_URL
  console.log(URL)
 
  // console.log(api.getAllCountries())
  // console.log(api.getCountry('finland'))
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState("")
  const [countriesError, setCountriesError] = useState('')

  useEffect(() => {
    api.getAllCountries()
    .then(countries => {
      setCountries(countries)
    })
    .catch( error => {
      setCountriesError('Error retrieving data')
    })
  }, [])

const handleSearch = (event) => {
  console.log(event.target.value)
  setNewSearch(event.target.value)
}

// console.log(countries)
// console.log(newSearch)
const filteredSearch = countries.filter(country => {
  // console.log(country.name.common)
  // console.log(newSearch)
  // console.log(country.name.common.toLowerCase().startsWith(newSearch.toLowerCase()))
  return country.name.common.toLowerCase().startsWith(newSearch.toLowerCase())
})
console.log(filteredSearch)

  return (
    <>
      <Search value={newSearch} onChange={handleSearch}/>
      {!newSearch 
      ? '' 
      :  <Filtered filteredSearch={filteredSearch} setNewSearch={setNewSearch}/>}
    </>
  )
}

export default App
