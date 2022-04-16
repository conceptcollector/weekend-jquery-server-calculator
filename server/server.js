const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 5000;

let aBriefHistoryOfMath = [];
let serverMath;

app.post('/unifiedMath', (req, res) => {
    console.log('POST/unifiedMath');
    console.log(req.body);
    serverMath = req.body;
    actualMath();
    res.sendStatus(200);
  })

function actualMath() {
    if (serverMath.operator === '+') {
        serverMath.solution = Number(serverMath.firstNumber) + Number(serverMath.secondNumber);
    } else if (serverMath.operator === '-') {
        serverMath.solution = Number(serverMath.firstNumber) - Number(serverMath.secondNumber);
    } else if (serverMath.operator === '*') {
        serverMath.solution = Number(serverMath.firstNumber) * Number(serverMath.secondNumber);
    } else if (serverMath.operator === '/') {
        serverMath.solution = Number(serverMath.firstNumber) / Number(serverMath.secondNumber);
    }
    aBriefHistoryOfMath.push(serverMath);
}
  
  app.get('/unifiedMath', (req, res) => {
    console.log('GET /unifiedMath');
    res.send(aBriefHistoryOfMath);
  })
  
  app.listen(PORT, () => {
    console.log (`Server is running on at http://localhost:${PORT}`);
  })