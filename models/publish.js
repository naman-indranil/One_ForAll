const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const publishSchema=new Schema({
    content:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required:true
    },
    description:{type:String},
    author:{type:String},
    dating:{type:String,default:Date.now()},
    imgurl:
    {
        type:String,
        default:"https://picsum.photos/600/400"
    },
    tags:{
        type:String,
        required:true
    },
    flag:{
        type:Number,
        default:1
    },
    postUrl:{
        type:String,
        default:'/'
    }
});

module.exports=mongoose.model('publishes',publishSchema);