var http = require('http')
var exec = require('child_process').exec

http.createServer(function (req,res){
  if(req.url === 'webhools/blog'){
    exec('sh ~/blog/deploy.sh')
  }
  res.end()
}).listen(9999)