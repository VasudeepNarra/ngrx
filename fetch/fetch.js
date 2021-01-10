//fetch.js file used to create the GET Request.
//this file used to make the custom module (fetch)


//import the modules
const express = require("express");
const mongodb = require("mongodb");

const ashokIT = mongodb.MongoClient;

const fetch = express.Router().get("/",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@cluster0.lmg5k.mongodb.net/<dbname>?retryWrites=true&w=majority",(err,conn)=>{
        if(err) throw err;
        else{
            let db = conn.db("angdb");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});

module.exports = fetch;