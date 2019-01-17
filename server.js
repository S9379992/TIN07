var http = require ('http'); 
var app = require("./7a"); 
http.createServer(app.handleRequest).listen(8000); 