//Loads environment variables from the .env file
require('dotenv').config();

//Importing from discord.js module
const Discord = require('discord.js');
const axios = require('axios');
// const express = require('express');
const updateCount = require('./server_pop.js');

const token = process.env.BOT_TOKEN;

// var app = express();
var serverCount;

//Create an instance of client
const client = new Discord.Client();

var x = 0;
//Keep Bot alive on Heruko
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Running on port ${ PORT }`);
// });
// app.get('/',(req,res) => {
//     return res.send('Hello');
//     });

client.on("ready", () => {
    console.log(`${client.user.tag} logged in.`)
    client.user.setActivity('with babu Dibbles.');
});

function serverCountLoop() {
    setTimeout(async function() {
        await countFunctionArray[x]();
        await updateCount(client, serverCount);
        x += 1;
        x == countFunctionArray.length ? x = 0 : x = x;
        serverCountLoop();
    }, 5000);
}

var countFunctionArray = [
    getServerCount1,
    getServerCount2,
    getServerCountDM,
    getServerCountEV,
    getServerCountEV2
];

//APIs
async function getServerCount1() {
    return await axios.get("https://server-count.herokuapp.com/serv-count")
        .then(function (response){
            serverCount = `NB#1: ${response.data}`;
        })
        .catch(function (error) {
            console.log("Error fetching server count: " + error);
        })
        .then(function () {
        })
}
async function getServerCount2() {
    return await axios.get("https://server-count.herokuapp.com/serv-count/2")
        .then(function (response){
            serverCount = `NB#2: ${response.data}`;
        })
        .catch(function (error) {
            console.log("Error fetching server count: " + error);
        })
        .then(function () {
        })
}
async function getServerCountDM() {
    return await axios.get("https://server-count.herokuapp.com/serv-count/dm")
        .then(function (response){
            serverCount = `NB DM: ${response.data}`;
        })
        .catch(function (error) {
            console.log("Error fetching server count: " + error);
        })
        .then(function () {
        })
}
async function getServerCountEV() {
    return await axios.get("https://server-count.herokuapp.com/serv-count/ev")
        .then(function (response){
            serverCount = `Evrima#1: ${response.data}`;
        })
        .catch(function (error) {
            console.log("Error fetching server count: " + error);
        })
        .then(function () {
        })
}
async function getServerCountEV2() {
    return await axios.get("https://server-count.herokuapp.com/serv-count/ev2")
        .then(function (response){
            serverCount = `Evrima#2: ${response.data}`;
        })
        .catch(function (error) {
            console.log("Error fetching server count: " + error);
        })
        .then(function () {
        })
}

serverCountLoop();

client.login(token);