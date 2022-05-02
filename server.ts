import express, {Express, Request, Response} from 'express';

//Type
type BalanceHistory = {
    amount : number;
    motive : string;
}

//Database variables
let currentBalance = 220;


//Server variables
const app: Express = express();
const port = 3000;

//Endpoints
app.get("/v1/balance", (req, res) =>{
    res.json(currentBalance);
})
app.post("/v1/transaction", (req, res) =>{

    try{
        currentBalance += req.body.incomingAmount;
        const history : BalanceHistory = {amount: req.body.incomingAmount, motive: req.body.motive}
        balanceHistory.push(history);
        console.log(balanceHistory);
        res.sendStatus(200);
    }catch{
        res.sendStatus(500);
    }
})


//To run the server
app.listen(port, () =>{
    console.log('Server up and running on port: ' + port);
})