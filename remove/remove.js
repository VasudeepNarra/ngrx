let express = require("express");
let mongodb = require("mongodb");
let ashokIT = mongodb.MongoClient;
let remove = express.Router().delete("/",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@cluster0.lmg5k.mongodb.net/<dbname>?retryWrites=true&w=majority",(err,conn)=>{
        if(err) throw err;
        else{
            let db = conn.db("angdb");
            db.collection("products").deleteOne({"p_id":req.body.p_id},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete":"success"});
                }
            });
        }
    });
});
module.exports = remove;