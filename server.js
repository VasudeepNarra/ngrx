//used to encapsulates the modules    @fetch        @insert     @update     @remove
let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");

let app = express();
//where "app" called as rest object (master object)
//where "app" object used to "use the custom modules"


//enable the ports communication
app.use(cors());


//set the json as MIME Type
app.use(bodyParser.json());

//parse the json
app.use(bodyParser.urlencoded({extended:false}));

app.use("/fetch",require("./fetch/fetch"));
app.use("/insert",require("./insert/insert"))
app.use("/update",require("./update/update"));
app.use("/remove",require("./remove/remove"));


let port = process.env.PORT || 8099 ;
app.listen(port,()=>{
    console.log("server started");
});



//http://localhost:8080/fetch      (GET)
//http://localhost:8080/insert     (POST)
//http://localhost:8080/update     (PUT)
//http://localhost:8080/remove     (DELETE)
