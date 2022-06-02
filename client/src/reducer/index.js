import {
    CREATE_ACTIVITY,
    GET_COUNTRY_INFO,
    FILTER_ACTIVITY,
    FILTER_CONTINENT,
    GET_ACTIVITIES,
    GET_COUNTRIES, 
    ORDER_COUNTRIES_NAME, 
    ORDER_COUNTRIES_POPULATION, 
    SEARCH_COUNTRY
} from '../actions'

const initialState = {
    countries: [],
    activities: [],
    countryDetail: [],
}

const reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: payload
            }
        case GET_COUNTRY_INFO:
            return {
                ...state,
                countryDetail: payload
            }
        case CREATE_ACTIVITY: 
            return {
                ...state
            }
        case ORDER_COUNTRIES_POPULATION:
           let sortedCountriesPopulation = payload === 'men' ?
                state.countries.sort((a, b) => {
                    if(a.population > b.population) return 1
                    if(b.population > a.population) return -1
                    else return 0
                }) : 
                state.countries.sort((a, b) => {
                    if(a.population < b.population) return 1
                    if(b.population < a.population) return -1
                    else return 0
                })
            return {
                ...state,
                countries: sortedCountriesPopulation
            }
        case ORDER_COUNTRIES_NAME:
            let sortedCountriesName = payload === 'asc' ?
                state.countries.sort((a, b) => {
                    if(a.name > b.name) return 1
                    if(b.name > a.name) return -1
                    else return 0
                }) :
                state.countries.sort((a, b) => {
                    if(a.name < b.name) return 1
                    if(b.name < a.name) return -1
                    else return 0
                })
            return {
                ...state,
                countries: sortedCountriesName
            }
        case FILTER_CONTINENT:
            let filteredCountriesContinent = payload === 'All' ? state.countries : state.countries.filter(country => country.continent.includes(payload))
            return {
                ...state,
                countries: filteredCountriesContinent
            }
        case FILTER_ACTIVITY:
            let filteredCountriesActivity = payload === 'All' ? state.countries : state.countries.filter(country => country.activities && country.activities.map(a => a.name).includes(payload))
            return {
                ...state,
                countries: filteredCountriesActivity
            }
        case SEARCH_COUNTRY:
            return {
                ...state,
                countries: payload
            }
        default:
            return state
    }
}

export default reducer