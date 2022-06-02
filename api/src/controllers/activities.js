const { Country, Activity } = require('../db')

// get all activities
const allActivities = async (req, res) => {
    try {
        let activities = await Activity.findAll({
            include: Country
        })
        if (activities) return res.send(activities)
        else return res.send('No se encontraron actividades')
    } catch (error) {
        console.log(error)
    }
}

const createActivity = async (req, res) => {
    try{
        let { name, difficulty, duration, season, countries } = req.body
        let newActivity = await Activity.bulkCreate({ name, difficulty, duration, season })
        return res.send(newActivity)
    } catch(error) {
        console.log(error)
        return res.send('No se pudo crear la actividad')
    }
}

module.exports = {
    createActivity,
    allActivities
}