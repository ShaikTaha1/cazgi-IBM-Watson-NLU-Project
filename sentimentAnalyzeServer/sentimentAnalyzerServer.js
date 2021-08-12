const express = require('express');
const app = new express();
const dotenv = require("dotenv");

dotenv.config();

function getNLUInstance(){
let api_key = process.env.MyTuWwuajgb2VIjk7HLVeMKcy2yVmy-KQ9gArZqMPjCt;
let api_url = process.env.https://api.eu-gb.natural-language-understanding.watson.cloud.ibm.com/instances/fd5fcac8-f166-4e16-a598-9fe8deda7973;

const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1");
const { IamAuthenticator } = require("ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
version: '2021-08-01',
  authenticator: new IamAuthenticator({
    apikey: '{apikey}',
}),
serviceUrl: api_url,
});

return naturalLanguageUnderstanding;
}
app.use(express.static('client'))

const cors_app = require('cors');
app.use(cors_app());

app.get("/",(req,res)=>{
    res.render('index.html');
  });

app.get("/url/emotion", (req,res) => {

    return res.send({"happy":"90","sad":"10"});
});

app.get("/url/sentiment", (req,res) => {
    return res.send("url sentiment for "+req.query.url);
});

app.get("/text/emotion", (req,res) => {
    return res.send({"happy":"10","sad":"90"});
});

app.get("/text/sentiment", (req,res) => {
    return res.send("text sentiment for "+req.query.text);
});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})

