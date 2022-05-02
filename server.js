"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Database variables
let currentBalance = 220;
//Server variables
const app = (0, express_1.default)();
const port = 3000;
//Endpoints
app.get("/v1/balance", (req, res) => {
    res.json(currentBalance);
});
//To run the server
app.listen(port, () => {
    console.log('Server up and running on port: ' + port);
});
