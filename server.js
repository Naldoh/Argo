const express = require('express');  
const app = express();  
const myDB = require("./DB/connection.js").mydatabase;
const bodyparser = require('body-parser');
// Node.js & Express
app.use(bodyparser.json())
app.use(express.static("."));

app.get('/', function (req, res) {
  res.sendFile(__dirname+"/index.html");  
});  

const server = app.listen(8080,"127.0.0.1", function () {  
  const host = server.address().address;  
  const port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
});

// Insertion dans la table "crew_members"

app.post("/insert", (req, res) => {
  var DB = myDB.connection();
  
  var sql = "INSERT INTO crew_members (name) VALUES (?)";  
  
  var values = [req.body.input];
  
  DB.query(sql, [values], (err, data) => {
    return res.json(data);
  });
})

// Extraction de la table "crew_members"
app.get("/extract", (req, res) => {
  var DB = myDB.connection();

    var sql = "SELECT * FROM crew_members";


    DB.query(sql, (err, data) => {
      return res.json(data);
    });
})
