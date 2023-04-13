const product = require ("../model/productmodel");
const userSchema = require ("../model/user");

exports.gelAllProducts = async (req,res) =>{
    try{
const products = await product.find();
res.json({products})
    }catch(err){
     res.status(500).json({msg : 'Error'})
    }
};

exports.getProductById = async (req,res) =>{
    try{
        const {id} = req.params ;
        const product = await product.findById(id);
        if(!product){
            return res.status(404).json({msg : 'product Not Found'})
        }
        res.json({product});


    }catch(err){
        return res.status(500).json({msg : 'error'})

    }
};

exports.getProductByUserId = async (req,res) =>{
    try{
        const {iid} = req.params;
        const user = await userSchema.findById(iid);

        const ProductsiIid = user.panier ; 
        const Products =[]
        for(prodId in ProductsIid){
            Products.push(await userSchema.findById(prodId))
        }
        res.json(Products);



    }catch(err){
        res.status(500).json(err);

    }
};


exports.updateProductById = async (req,res) =>{
    try{
        const {id} = req.params;
        const {name, descritpion , price, image} = req.body;

        const product = await product.findById(id);
        if(!product){
            return res.status(404).json({msg:'product not found'})
        }

        product.name = name;
        product.descritpion = descritpion;
        product.price = price;
        product.image = image;

        await product.save();
        res.json({product});

    }catch(err){
        res.status(500).json({msg:'Error'})

    }
};


exports.deleteProductById = async (req,res) =>{
    try{
        const {id} = req.params;
        await product.findByIdAndDelete(id);
        res.status(204).end();


    }catch(err){
        res.status(500).json({msg: 'Error'})

    }
};
