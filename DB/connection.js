var mysql = require('mysql');  

exports.mydatabase = {
  con : null,

// Création du socket de connection

  connection : function(){

    this.con = mysql.createConnection({  
      host: "localhost",  
      user: "root",  
      password: "Rootz3!",
      database: "argo",
    });
    return this.con;
  },
};
