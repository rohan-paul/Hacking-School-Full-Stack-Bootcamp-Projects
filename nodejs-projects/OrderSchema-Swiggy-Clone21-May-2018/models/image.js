const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let imageSchema = new Schema ({
     img: {
        data: Buffer, contentType: String
    }
})

module.exports = mongoose.model('Image', imageSchema);