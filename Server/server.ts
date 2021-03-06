import express, {Express, Request, Response} from 'express';

//Type
type BalanceHistory = {
    amount : number;
    motive : string;
}

//Database variables
let balanceHistory : BalanceHistory[] = [];
let currentBalance: number = 0;

//Server variables
const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

//Endpoints

//GetBalance
app.get("/v1/balance", (req, res) =>{
    res.json(currentBalance);
})
//Add transaction
app.post("/v1/transaction", (req, res) =>{

    try{
        if(req.body.incomingAmount  < 0)
        {
            if(req.body.incomingAmount* -1 <= currentBalance){
                currentBalance += req.body.incomingAmount;
                const history : BalanceHistory = {amount: req.body.incomingAmount, motive: req.body.motive}
                balanceHistory.push(history);
                res.sendStatus(200);
            }
            res.send("Not enough balance");
        }
        else{
            currentBalance += req.body.incomingAmount;
            const history : BalanceHistory = {amount: req.body.incomingAmount, motive: req.body.motive}
            balanceHistory.push(history);
            res.sendStatus(200);
        }

    }catch{
        res.sendStatus(500);
    }
})
//Clear all transactions
app.post("/v1/clear", (req, res) =>{
    currentBalance = 0;
    balanceHistory = [];
    res.sendStatus(200);
})


//To run the server
app.listen(port, () =>{
    console.log('Server up and running on port: ' + port);
})
