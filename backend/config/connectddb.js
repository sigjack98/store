const mongoose = require('mongoose')


const connectdb =async  () => {
  try{
      await mongoose.connect('mongodb+srv://kksjashs:F1i2r3a4s5@cluster0.vj415tn.mongodb.net/?retryWrites=true&w=majority')
      console.log('you did it you are connected to the database')
  }
  catch(err){
      console.log(err)
  }
}

module.exports = connectdb