const userSchema = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async  (req,res) =>{
    try{
       const { name , email , password ,adress} = req.body;
       const image = req.file.filename
       const found = await userSchema.findOne({email})
       if(found){
        res.status(400).send({msg:'email exist'})
       }

       const newUser = await new userSchema(req.body);

       const saltRounds = 10;
       const salt = bcrypt.genSaltSync(saltRounds);
       const hash = bcrypt.hashSync(salt);
       newUser.password = hash;

       const paylaod = {id:newUser._id};

       var token = jwt.sign(payload, process.env.privateKey);
       newUser.save();
       res.status(200).json({msg: "account Created" , newUser,token});



    }catch(err){
        res.status(500).send({msg:"there is somethhing wrong"})
    }
};


exports.signin = async (req,res) =>{
    try{
        const {email, password}= req.body;
        const found = await userSchema.findOne({email});
        if (!found){
            res.status(400).send({msg:'No User Found'});
        }

        const compar = await bcrypt.compare(password, found.password);
        if (!compar){
            res.status(400).send({msg:'password wrong'});

        }

        const payload = {id:found._id}

        var token = jwt.sign(payload,process.env.privateKey);
        res.status(200).send({msg:'Welcome Again'});

    }catch(err){
        res.status(500).send({ msg: "there is something wrong" });
       
    }
};

exports.getAllUsers = async (req,res) =>{
    try{
        const users = await userSchema.find();
        res.json({users});

    }catch(err){
        res.status(500).send({msg:'user not found'})    }
};

exports.addToCard = async (req,res) => {
    try {
        const{id} = req.params;
        const {idProduct} = req.body;
        const user = await userSchema.findByIdAndUpdate(id,{$push: { panier: idProduct }});
    if(!user){
        return res.status(404).json({msg:'user not found'})
    }
    try{
     await user.save();
    }catch(err){
return (err)
    }
           res.json({user});

    }catch(err){
        return res.status(500).json({msg:err})
        
    }
};

