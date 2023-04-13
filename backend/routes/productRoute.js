const express = require ('express') ; 

const router = express.Router() ; 
const {createProduct,getAllProducts,getProductById,updateProductById,deleteProductById, getProductByUserId} = require ('../controllers/products')

// Create a new product
router.post('/add',
//  upload.single ('uploadedFile'),
 async (req,res) =>{
    try{
        const{name,photo,description,price} = req.body ;
        //lina partie tzedit 
        // const photo= req.file.filename
        const newProduct  = new Product ({
            name,
            //lina partie tzedit 
            photo,
            description,
            price
        });

        //save the product in the database 
        await newProduct.save();
        res.json (req.file).status (200).json({product:newProduct});

    }
    catch(err){
        console.log(err);
        res.status(500).json({msg : 'its a server error '})
    }
}
);


router.get('/',getAllProducts);

router.get('/:id',getProductById);

router.put('/:id',updateProductById);

router.delete('/:id',deleteProductById);

router.get('/getProductsByUserId/:_id',getProductByUserId);

module.exports = router;