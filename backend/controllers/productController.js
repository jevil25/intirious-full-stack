import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc fetch all products
// @routes GET api/products
// @acceess - public

const getProducts = asyncHandler( async(req ,res) => {
    const products = await Product.find({

    })
    res.json(products);

})

// @desc fetch single product by id
// @routes GET api/products/:id
// @acceess - public

const getProductById = asyncHandler(async(req,res) => {
   
        const product = await Product.findById(req.params.id);
        if(product){
           return res.json(product);
        } else{
           res.status(404);
           throw new Error("Resource not found");
       
        }
    
        
   

})

export {getProductById ,getProducts};