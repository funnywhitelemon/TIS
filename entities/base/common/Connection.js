class Connection {
    static _ConnectionInstance;
    constructor(){
        if(Connection._ConnectionInstance) return Connection._ConnectionInstance;
        const mysql2 = require('mysql2');
        const connectionOptions = require('./ConnectionOptions');
        Connection._ConnectionInstance = mysql2.createConnection(connectionOptions);
        return Connection._ConnectionInstance;
    }
}

module.exports = Connection;