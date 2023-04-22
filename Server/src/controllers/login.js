
require('dotenv').config()

const DB_EMAIL =process.env.EMAIL;
const DB_PASSWORD=process.env.PASSWORD;

function login (req,res){
    const {password, email} = req.query
    try {
        if (!password || !email) {
            return res.status(500).json({message: "There isnt a password or email"})
        }
        if(password === DB_PASSWORD && email === DB_EMAIL){
            return res.status(200).json({access: true})
        }else {
            return res.status(200).json({access: false})
        }
    } catch (error) {
        res.status(404).json(error);
    }
} 

module.exports= {
    login
}