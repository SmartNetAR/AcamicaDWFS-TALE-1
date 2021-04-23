const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

mongoose.connect('mongodb://acamica:acamica@localhost:27017/acamica', options);

module.exports = mongoose;