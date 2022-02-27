const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( {
    BookName: String,
    AutherName: String,
    category: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
            enum: ["male", "female", "LGBTQ"]
    },
    year: Number,
   
}, { timestamps: true });

module.exports = mongoose.model('AutherDetails', BookSchema)



