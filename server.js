"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Database variables
let balanceHistory = [];
let currentBalance = 0;
//Server variables
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
//Endpoints
//GetBalance
app.get("/v1/balance", (req, res) => {
    res.json(currentBalance);
});
//Add transaction
app.post("/v1/transaction", (req, res) => {
    try {
        currentBalance += req.body.incomingAmount;
        const history = { amount: req.body.incomingAmount, motive: req.body.motive };
        balanceHistory.push(history);
        //console.log(balanceHistory);
        res.sendStatus(200);
    }
    catch (_a) {
        res.sendStatus(500);
    }
});
//Clear all transactions
app.post("/v1/clear", (req, res) => {
    currentBalance = 0;
    balanceHistory = [];
    res.sendStatus(200);
});
//To run the server
app.listen(port, () => {
    console.log('Server up and running on port: ' + port);
});
