const mongoose =require('mongoose');
const {Schema}= mongoose;

const userProSchema= new Schema({   
    userId:{type:Schema.Types.ObjectId,ref:"User"}, 
    productName:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true},
    category: {type:String,required:true}
})

const UserProduct = mongoose.model("userproducts",userProSchema);
module.exports = UserProduct;