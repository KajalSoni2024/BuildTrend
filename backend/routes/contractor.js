const express = require("express");
const route = require("express").Router();
route.use(express.static("public"));
const { addEstimate, addWorkProof ,sendMsg } = require("../controllers/contractor");
route.post("/addEstimate", addEstimate);
route.post("/addWorkProofs", addWorkProof);
route.post("sendMsg", sendMsg);
module.exports = route;
