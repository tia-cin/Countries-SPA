const { Country, Activity } = require('../db')

// get all activities
const allActivities = async (req, res) => {
    try {
        let activities = await Activity.findAll({
            include: Country
        })
        if (activities) return res.send(activities)
        else return res.send('No activities')
    } catch (error) {
        console.log(error)
    }
}

const createActivity = async (req, res) => {
    try{
        let { name, difficulty, duration, season, countries } = req.body
        let newActivity = await Activity.bulkCreate({ name, difficulty, duration, season })
        countries.forEach(async country => {
            let activityCountry = await Country.findOne({
                where: { name: country }
            }) 
            await newActivity.addCountry(activityCountry, { through : 'country-activity'})
        });
        return res.send(newActivity ? newActivity : 'Failed activity')
    } catch(error) {
        console.log(error)
        return res.send('Failed activity')
    }
}

module.exports = {
    createActivity,
    allActivities
}