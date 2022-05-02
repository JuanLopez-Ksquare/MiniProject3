import express, {Express, Request, Response} from 'express';

//Database variables
let currentBalance = 220;


//Server variables
const app: Express = express();
const port = 3000;

//Endpoints
app.get("/v1/balance", (req, res) =>{
    res.json(currentBalance);
})


//To run the server
app.listen(port, () =>{
    console.log('Server up and running on port: ' + port);
})