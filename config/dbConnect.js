const mongoose=require('mongoose');

require('dotenv').config();

exports.dbConnect=()=>{

    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log('Db Connect Succsesfull'))
    .catch((error)=>{
        console.log('Db COnnection Failed');
        console.error(error.message);
        process.exit(1);
    })

}
