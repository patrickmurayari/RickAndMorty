const axios = require("axios");


require('dotenv').config()

const URL =process.env.API_URL;
const EMAIL =process.env.EMAIL;
const PASSWORD=process.env.PASSWORD;

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

function getAllChar(req,res) {
    try {
        axios.get(`${URL}`).then(({data}) => {
            if(data){
                const characters = data.results.map((ch) => {
                    const character = {
                      id: ch.id,
                      status: ch.status,
                      name: ch.name,
                      species: ch.species,
                      origin: ch.origin?.name,
                      image: ch.image,
                      gender: ch.gender,
                    };
                    return character;
                  });  
                res.status(200).json(characters);  
            }else {
                res.status(404).json({message : "character not found"})
            }
        })
    } catch (error) {
        res.status(500).json({ message: error });
        
    }
}

module.exports = {
    getCharById,
    getAllChar

}