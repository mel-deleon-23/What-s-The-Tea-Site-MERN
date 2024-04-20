const express = require("express");
const cors = require("cors"); //need this to set this API to allow requests from other servers
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || "8888";
// const port = process.env.PORT || "3000";

const dbUrl = `mongodb+srv://cafeuser:Admin123@cluster0.hsioybr.mongodb.net/`;
const client = new MongoClient(dbUrl);

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //need this line to be able to receive/parse JSON from request

//allow requests from all servers
app.use(cors({
  origin: "*"
}));

//API endpoints

/*
 * returns: an array of drinks list
 */
app.get("/api/teas", async (request, response) => {
  let teas = await getTeas();
  response.json(teas); //send JSON object with appropriate JSON headers
});

/*
 * returns: an a single drink
 */
app.get("/api/details/:id", async (request, response) => {
    let teaId = request.params.id;
    let tea = await getDetailTea(teaId);
    response.json(tea); //send JSON object with appropriate JSON headers
  });


  
//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


//MongoDB functions
async function connection() {
  await client.connect();
  db = client.db("whatstheteadb"); //what's the tea database
  return db;
}
/* Async function to retrieve all teas from collection. */
async function getTeas() {
  db = await connection(); //await result of connection() and store the returned db
  var results = db.collection("teas").find({}); //{} as the query means no filter, so select all
  res = await results.toArray();
  return res;
}
