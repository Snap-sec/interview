const mongoose = require('mongoose');

const connectDB = async () => {

        await mongoose.connect('mongodb://173.249.38.139:27017/users');
  
};

module.exports = connectDB; 