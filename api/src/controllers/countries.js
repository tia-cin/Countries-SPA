const axios = require('axios')
const { Country, Activity } = require('../db')
const { Sequelize } = require('sequelize')

const countriesApi = async () => {
    try {
        const apiUrl = await axios.get('https://restcountries.com/v3/all');
        const allCountries = await apiUrl.data.map(country => {
            return {
                name: country.name.common,
                id: country.cca3,
                flag: country.flags[0] ? country.flags[0] : 'No se encontro bandera',
                continent: country.continents,
                capital: country.capital ? country.capital.join(', ') : 'No se encontro capital',
                subregion: country.subregion,
                area: country.area,
                population: country.population
            }
        });
        return allCountries;
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
        res.status(404).send('No se encontro el pais')
    } else {
        let full = await Country.findAll({
            include: {
                model: Activity
            }
        })
        res.status(200).send(full)
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
    else return res.send('No se encontro el país')
}


module.exports = {
    getCountries,
    getCountry
}