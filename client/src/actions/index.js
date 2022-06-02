export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const GET_COUNTRY_INFO = 'GET_COUNTRY_INFO'
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const ORDER_COUNTRIES_POPULATION = 'ORDER_COUNTRIES';
export const ORDER_COUNTRIES_NAME = 'ORDER_COUNTRIES_NAME'
export const FILTER_CONTINENT = 'FILTER_CONTINENT'
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY'
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY'

const axios = require('axios')

export let getCountries = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/countries')
            .then(r => dispatch({
                type:GET_COUNTRIES,
                payload: r.data
            }))
            .catch(error => console.log(error))
    }
}

export let getActivities = () => {
    return async (dispatch) => {
        try {
            let activities = await axios.get('http://localhost:3001/activity')
            return dispatch({
                type: GET_ACTIVITIES,
                payload: activities.data
            })
        } catch(error) {
            console.log(error)
        }
    }
}

export let getCountryInfo = (payload) => {
    return (dispatch) => {
        axios.get('http://localhost:3001/countries/' + payload)
            .then(r => dispatch({
                type: GET_COUNTRY_INFO,
                payload: r.data
            }))
            .catch(error => console.log(error))
    }
}

export let createActivity = (payload) => {
    return async (dispatch) => {
        try {
            let newActivity = await axios.post('http://localhost:3001/activity', payload)
            return dispatch({
                type: CREATE_ACTIVITY,
                payload: newActivity.data
            })
        } catch(error) {
            console.log(error)
        }
    }
}

export let orderCountriesPopulation = (payload) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: ORDER_COUNTRIES_POPULATION,
                payload: payload
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export let orderCountriesName = (payload) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: ORDER_COUNTRIES_NAME,
                payload: payload
            })
        } catch(error) {
            console.log(error)
        }
    }
}

export let filterContinent = (payload) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: FILTER_CONTINENT,
                payload: payload
            })
        } catch(error) {
             console.log(error)
        }
    }
}

export let filterActivity = (payload) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: FILTER_ACTIVITY,
                payload: payload
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export let searchCountry = (payload) => {
    return async (dispatch) => {
        try {
            let countries = await axios.get('http://localhost:3001/countries?name=' + payload)
            return dispatch({
                type: SEARCH_COUNTRY,
                payload: countries.data
            })
        } catch (error) {
            console.log(error)
        }       
    }
}