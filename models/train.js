const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const TrainSchema = new mongoose.Schema({
        name: {
            type:String,
            trim:true,
            required:true,
            maxLength:32
        },
        category: {
            type:ObjectId,
            ref: 'Category',
            required:true
        },
        departFrom: {
            type:String,
            required:true,
            maxLength:32
        },
        destination: {
            type:String,
            required:true,
            maxLength:32
        },
        depatureDate: {
            type:String,
            required:true
        },
        depatureTime: {
            type:String,
            required:true
        },
        arrivalDate: {
            type:String,
            required:true
        },
        arrivalTime: {
            type:String,
            required:true
        },
        noOfSeats: {
            type: Number
        },
        price: {
            type: Number
        },
        sold: {
            type: Number,
            default:0
        },
        photo: {
            data: Buffer,
            contentType: String
        },
    },{timestamps:true}
);

module.exports = mongoose.model("Train",TrainSchema);