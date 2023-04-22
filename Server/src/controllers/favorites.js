
require('dotenv').config()

let myFavorites = []
const postFav = (req,res) => {
  const {id,name,status, species,gender,origin,image} = req.body
  try {
      if (!id || !name || !id) {
          return res.status(404).json({error :"The require Information is missing"})
      }
      const character = {id,name,status, species,gender,origin,image}
  
      myFavorites.push(character)
      res.status(200).json(myFavorites)
    
  } catch (error) {
     res.status(404).json({error :error.message})
  }
}

const deleteFav = (req,res) => {
  const {id} = req.params
  try {
      if(!id) {
          return res.status(404).json({error :"ID Not found"})
      }
      const newFavorites = myFavorites.filter((ch) => ch.id !== Number(id))
      myFavorites = newFavorites
      res.status(200).json(myFavorites)
  } catch (error) {
     res.status(404).json({error : error.message})
  }
}

module.exports = {
    postFav,
    deleteFav

}