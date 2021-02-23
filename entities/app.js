//start server

class App {
    constructor(){
      this.port = 3000;
      this.server = require('http').createServer();
      this.server.on('request', (req, res) =>{
        if(req.url === '/'){
          res.status = 200;
         
          res.end('<h1>Сервер запущен</h1>')
        }
        
      }); 
    }
    start(){
        this.server.listen(this.port, () => console.log(`Server is started on port ${this.port}`))    
    }
}

module.exports = App;