const axios = require('axios')
const { Country, Activity } = require('../db')
const { Sequelize } = require('sequelize')

const countriesApi = async () => {
    try {
        const apiUrl = await axios.get('https://restcountries.com/v3/all');
        const allCountries = await apiUrl.data && apiUrl.data.map(country => {
            return {
                name: country.name.common ? country.name.common : 'No name',
                id: country.cca3 ,
                flag: country.flags[0] ? country.flags[0] : 'No flag',
                continent: country.continents ? country.continents[0]: 'No continent',
                capital: country.capital ? country.capital[0] : 'No capital',
                region: country.region ? country.region :  'No region',
                subregion: country.subregion ? country.subregion : 'No subregion',
                area: country.area ? country.area : 'No area',
                population: country.population,
                status: country.status ? country.status: 'No status'
            }
        });
        return allCountries ? allCountries : new Error('Wrong api call');
    } catch (error) {
        console.log(error)
    }
}

const getCountries = async (req, res) => {
    let allCountries = await countriesApi()
    let { name } = req.query

    try{
        let full = await Country.findAll({
            include: {
                model: Activity,
            }
        })
        if(!full.length){
            await Country.bulkCreate(allCountries)
        } 
    } catch (error){
        console.log(error) 
    }

    if(name){
        let countryName = await Country.findAll({
            where : {
                name: {
                   [Sequelize.Op.iLike] : `%${name.toLowerCase()}%`
                }
            }
        })
        countryName.length ?
        res.status(200).send(countryName) :
        res.status(404).send('No country')
    } else {
        let full = await Country.findAll({
            include: {
                model: Activity
            }
        })
        res.status(200).send(full ? full : 'No countries')
    }
}

const getCountry = async (req, res) => {
    let { id } = req.params
    let country = await Country.findByPk(id, {
        include : {
            model : Activity
        }
    })
    if (country) return res.status(200).send(country)
    else return res.send('No country')
}


module.exports = {
    getCountries,
    getCountry
}