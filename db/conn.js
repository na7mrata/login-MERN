const mongoose = require('mongoose');

 const DB="mongodb+srv://namrata:namratathool@cluster0.dcrw5xs.mongodb.net/"

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})
