import { React, useEffect, useState } from 'react'; // hooks
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { Link } from 'react-router-dom';
import SearchBar from './searchbar';
import Card from './card';
import { 
    getActivities, 
    getCountries, 
    orderCountriesName, 
    orderCountriesPopulation, 
    filterActivity, 
    filterContinent 
} from '../actions';
import style from './styles/home.css'
import Paginado from './pagination';

const Home = () => {
    let dispatch = useDispatch()
    let {countries} = useSelector(state => state)
    let {activities} = useSelector(state => state)

    let [currentPage, setCurrentPage] = useState(1) // siempre empiezo el la 1er pagina donde aparecen
	let [countriesPerPage, setCountriesPerPage] = useState(9) // cuantas recetas por pagina
	let indexOfLastCountry = currentPage * countriesPerPage // 9 
	let indexOfFirstCountry = indexOfLastCountry - countriesPerPage // 0
	let currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry)

    let paginado = (pageNumber) => {
        if (pageNumber !== 1) {
            setCountriesPerPage(10)
            setCurrentPage(pageNumber)
        }
        else {
            setCountriesPerPage(9)
            setCurrentPage(pageNumber)
        }
	}

    let handleOrderPopulation = e => {
        e.preventDefault()
        dispatch(orderCountriesPopulation(e.target.value))
    }

    let handleOrderName = e => {
        e.preventDefault()
        dispatch(orderCountriesName(e.target.value))
    }

    let handleFilterContinent = e =>{
        e.preventDefault();
        dispatch(filterContinent(e.target.value));
    }

    let handleFilterActivity = e => {
        e.preventDefault();
        dispatch(filterActivity(e.target.value))
    }

    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivities())
    }, [dispatch])
    
    return (
        <div className={style.container}>
            <h1 className={style.title}>Countries of the World</h1>
            <nav className={style.navbar}>
                <Link to='/activity'>
                    <button className={style.buttons}>Create an Activity!</button>
                </Link>
                <SearchBar/>
                <div className={style.navbarContainer}>
                    <label className={style.labels}>Filter countries by continent:</label>
                    <select onChange={handleFilterContinent}>
                        <option value='All'>All</option>
                        <option value="Africa">Africa</option>
                        <option value="North America">America del Norte</option>
                        <option value="South America">America del Sur</option>
                        <option value="Antarctica">Antartica</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europa</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
                <div className={style.navbarContainer}>
                    <label className={style.labels}>Filter countries by activity</label>
                    <select onChange={handleFilterActivity}>
                        <option value='All'>All</option>
                        {activities && activities.map(a => <option key={a.id} value={a.name}>{a.name}</option>)}
                    </select>
                </div>
               <div className={style.navbarContainer}>
                   <label className={style.labels}>Order by name:</label>
                    <select onChange={handleOrderName}>
                        <option value='asc'>Countries: A-Z</option>
                        <option value='desc'>Countries:Z-A</option>
                    </select>
               </div>
				<div className={style.navbarContainer}>
                    <label className={style.labels}>Order by population:</label>
                    <select onChange={handleOrderPopulation}>
                        <option value='men'>Population: Menor-Mayor</option>
                        <option value='may'>Population: Mayor-Menor</option>
                    </select>
                </div>
            </nav>
            <Paginado countriesPerPage={countriesPerPage} allCountries={countries.length} paginado={paginado}/>
			<div className={style.cardsContainer}>
                {
                    currentCountries && currentCountries.map(c => (
                        <Card key={c.id} name={c.name} flag={c.flag} continent={c.continent} id={c.id}/>
                    ))
                }
			</div>
            <Paginado countriesPerPage={countriesPerPage} allCountries={countries.length} paginado={paginado}/>
        </div> 
    )
}
export default Home