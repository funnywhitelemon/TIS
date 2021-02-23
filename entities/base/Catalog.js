class Catalog {
    constructor(options){
        this.tableName = options.tableName;
        this.nameField = options.nameField;
    }

    static findByName(name){
        const Connection = require('./common/Connection');
        const connection = new Connection;
        const query = `SELECT * FROM \`${this.tableName}\` WHERE \`${this.nameField}\` = ?`;
        let data = connection.query(query, name);
        return new this({connection:'', tableName:''}, data);
    }



}

module.exports = Catalog;