const http = require("http");
const url = require('url');

http.createServer(function(req,res){
     
    var pars = url.parse(req.url, true);
    console.log(pars);
    var message = pars.query.message;
    
    if (pars.pathname == '/echo' && message != null){res.end(message +' EL');}
     
}).listen(80);