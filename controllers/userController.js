const user = require('../model/userModel');
exports.postAddUser = async(req,res,next) => {
        const fullname = req.body.fullname;
        const country = req.body.country;
        const gender = req.body.gender;
        const message = req.body.message;
        const zipcode = req.body.zipcode;
        const email = req.body.email;
        console.log(fullname,country,gender,message,zipcode,email);
        try{
            const result = await user.create({
                 fullname: fullname,
                 country:country,
                 gender:gender,
                 message : message,
                 zipcode : zipcode, 
                 email :email,   
             }) 
                 console.log('product added')
                 res.json({ message: "product added succesfully" });
                }
             catch(err ) {
                 console.log(err);
                 next(err);
             }
    }
  
exports.delete = async(req,res,next) => {
    const id = req.body.id; 
    console.log(id)
    try{
    const result =await  user.destroy({
        where: { id: id }
    })
        console.log("product deleted");
        res.json({ msg: "prodcut deleted" }) 
      }
    catch(err ) {
    next(err);
    }
  } 

exports.showAll = async(req,res,next) => {
        const start = req.params.start;
       try{
        const users =await user.findAll({
            offset: 0,
            limit: 10
        })
                res.json({ users: users })
    }
      catch(error)
      {
        next(error);
      }
    }
    
exports.search = async(req,res,next) => {
    const email = req.body.email;
    try{
   const result = await user.findAll({ where: { email: email } })
       .then(result => {
           res.json({ user: result })
       })
     }
         catch(err) {
           next(err);
       }
}

    
