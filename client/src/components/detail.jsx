import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, React} from 'react'
import { getCountryInfo } from "../actions";
import style from './styles/detail.css'

const CountryDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { countryDetail } = useSelector(state => state)

    useEffect(() => {
        dispatch(getCountryInfo(id))
    }, [dispatch, id])

    return (
        <div className={style.container}>
            <h1 className={style.title}>Country Detail:</h1>
            <nav className={style.navbar}>
                <Link to='/countries'>
                    <button className={style.button}>Back to Home</button>
                </Link>
            </nav>
            <div>
                {
                    countryDetail ? 
                        <div key={countryDetail.id} className={style.infoContainer}>
                            <div>
                                <h2>Name:</h2>
                                <p>{countryDetail.name ? countryDetail.name: null}</p>
                            </div>
                            <div>
                                <h2>Code:</h2>
                                <p>{countryDetail.id ? countryDetail.id : null}</p>
                            </div>
                           <div>
                                <h2>Continent: </h2>
                                <p>{countryDetail.continent ? countryDetail.continent : null}</p>
                           </div>
                           <div>
                                <h2>Capital: </h2>
                                <p>{countryDetail.capital ? countryDetail.capital : null}</p>
                           </div>
                            <div>
                                <h2>Subregion: </h2>
                                <p>{countryDetail.subregion ? countryDetail.subregion : null}</p>
                            </div>
                            <div>
                                <h2>Area: </h2>
                                <p>{countryDetail.area ? countryDetail.area : null} km2</p>
                            </div>
                            <div>
                                <h2>Population: </h2>
                                <p>{countryDetail.population ? countryDetail.population : null}</p>
                            </div>
                            <div>
                                <h2>Activities: </h2>
                                <p>{countryDetail.activities ? countryDetail.activities.map(a => a.name).join(', ') : 'No hay actividades'}</p>
                            </div>
                            <div>
                                <h2>Flag:</h2>
                                <img src={countryDetail.flag} alt={countryDetail.name}/>
                            </div>
                        </div> :
                        <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}

export default CountryDetail