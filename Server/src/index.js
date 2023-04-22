const app = require('./app')

const PORT =process.env.PORT ||  3001;

app.listen(PORT, () => {
   console.log( `Server raised in port: http://localhost:${PORT}`);
});

































// const http = require ('http');
// const characters = require('./Utils/data.js')
// const getCharById = require ('./controllers/getCharById.js')
// const PORT = 3001;
// http
//     .createServer(function(req,res){
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const url = req.url.split("/")
//     const param1 = url[1]; 
//     const param2 = url[2];
//     const id = url[3]
//     if (param1 === "rickandmorty" && param2 ==="characters"){
//         res.writeHead(200, {"Content-type":"application/json"})
//         return res.end(JSON.stringify(characters))
//     }
//     if (param1 === "rickandmorty" && param2 ==="character"){
//         return getCharById(req, res,id)
//     }
//     return res.writeHead(404, {"Content-type":"text/plain"})
//               .end("Not Found")
//     })
//     .listen(PORT, ()=> {
//         console.log("in port http://localhost:3001");
//     });