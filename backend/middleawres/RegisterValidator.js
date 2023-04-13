const { body, validationResult } = require('express-validator');



exports.registerValidator =[
    body('email','Put A valid Email').isEmail(),
    body('password','Password With 10 Chracters Minumum').isLength({min:10})
]




exports.loginValidator =[
  body('email','Put A valid Email').isEmail(),
]




exports.validation = async(req,res,next) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()

}