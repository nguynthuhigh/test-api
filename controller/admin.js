const Product = require('../models/product');

module.exports = {
    getProducts: (req,res)=>{
        Product.find() 
        .then(products => {
            console.log("Get Successfully!");
            res.status(200).json(products); 
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
    },
    getProductsID:(req,res)=>{
        const id = req.params.id;
        Product.findById(id) 
        .then(products => {
            console.log("Get Successfully!");
            res.status(200).json(products); 
        })
        .catch(err => {
            res.status(500).json({message:"Fail", error: err });
        });
    },
    postProduct : (req,res) =>{
        const product = new Product(req.body);
        product.save().then(result => {
            console.log('Product Created');
            res.status(201).json({ message: "Product created successfully", createdProduct: result });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: err });
        })
    },
    deleteProduct: (req,res) =>{
        const id = req.params.id;
    
        Product.findByIdAndDelete(id) 
        .then(products => {
            console.log('Delete Successfully!')
            res.status(500).json({message: "Delete Successfull!",});
        })
        .catch(err => {
            res.status(500).json({message: "Delete Fail", error: err });
        });
    },
    putProduct:(req,res) =>{
        const id = req.params.id;
    
        Product.findByIdAndUpdate(id,req.body) 
        .then(result => {
            res.status(200).json({message: "Updated",error: result}); 
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
    }
};