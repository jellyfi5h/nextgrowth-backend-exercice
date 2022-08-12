const mongoose = require('mongoose')

class MongoManager {
    constructor() {
    }

    // get database url from environment
    getMongoUrl() {
        return process.env.MONGO_URI;
    }

    connect() {
        this.connection = mongoose.connect(this.getMongoUrl(), { useNewUrlParser: true, useUnifiedTopology:true }, (err) => {
                if (!err) console.log("db connected");
        });
    }

    getConnection() {
        return this.connection;
    }
}

const mongoManager = new MongoManager();

module.exports = { mongoManager };