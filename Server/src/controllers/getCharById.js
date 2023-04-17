const axios = require("axios");


require('dotenv').config()

const URL =process.env.API_URL

const getCharById = (req,res) => {
    const {id} = req.params
    try {
        axios
        .get(`${URL}${id}`)
        .then(({data}) => {
            if (data) {
                const character = {
                    id : data.id,
                    name : data.name,
                    gender : data.gender,
                    species: data.species,
                    image : data.image,
                    origin: data.origin?.name,
                    status : data.status
                } 
                return res.status(200).json(character)
            }
            return res.status(404).json({error :"Not found"})
        })
    } catch (error) {
        return res.status(500).json({message : error})
    }
      
}

module.exports = getCharById