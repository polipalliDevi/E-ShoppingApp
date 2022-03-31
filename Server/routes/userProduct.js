const express=require('express');
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const router=express.Router();

router.use(bodyparser());

//Model-Product

const UserProduct=require("../models/userProduct");


// get all products;

router.post('/',async function(req,res){
    try {
        const {productName,price,description,category,image}=req.body;
        const product=await UserProduct.create({
            productName,
            userId:req.user,
            price,
            description,
            category,
            image
            
        })
        console.log(product)
        return res.status(200).json({
            status:"success",
            message:"product created",
            product
        })
    } catch (error) {
        res.status(500).json({
            status:"failed",
            error:error.message,

        })
    }

})

//getting all products
router.get('/',async function(req,res){    
    try {
        const products= await UserProduct.find()
        console.log(products.length);
        return res.status(200).json({
            status:"sucess",
            products
        })

    } catch (error) {
        res.status(500).json({
            status:"failed",
            error:error.message
        })
    }

})

router.delete('/:id',async(req,res)=> {
    const post =await UserProduct.deleteOne({_id:req.params.id,userId:req.user})
    console.log(post)
    if (post.deletedCount>0){
        res.json({

            status:"Post Delete",
           
        })
    }else {
        res.json({

            status:"user can not delete this post",
           
        })
    }

}
)

module.exports=router;
