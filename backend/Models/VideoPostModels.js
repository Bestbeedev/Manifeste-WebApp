const mongoose=require('mongoose')

const Schema=mongoose.Schema

const VideoPostSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports=mongoose.model('VideoPost',VideoPostSchema)