const user = require('../model/userModel');
exports.postAddUser = async(req,res,next) => {
        const fullname = req.body.fullname;
        const country = req.body.country;
        const gender = req.body.gender;
        const message = req.body.message;
        const zipcode = req.body.zipcode;
        const email = req.body.email;
        const check = req.body.check
        console.log(fullname,country,gender,message,zipcode,email);
        try{
            const result = await user.create({
                 fullname: fullname,
                 country:country,
                 gender:gender,
                 message : message,
                 zipcode : zipcode, 
                 email :email,   
                 check :check
             }) 
                 console.log('product added')
                 res.json({ message: "user added succesfully" });
                }
             catch(err ) {
                 console.log(err);
                 next(err);
             }
    }
  
exports.delete = async(req,res,next) => {
    const id = req.query.id; 
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
    const id = req.query.id;
    try{
   const result = await user.findAll({ where: { id: id } })
       .then(result => {
           res.json({ user: result })
       })

     }
         catch(err) {
           next(err);
       }
}

exports.update = async(req,res,next) => {
    const id=req.body.id;
    const fullname = req.body.fullname;
    const country = req.body.country;
    const gender = req.body.gender;
    const message = req.body.message;
    const zipcode = req.body.zipcode;
    const email = req.body.email;
    const check = req.body.check
    console.log(check,fullname,email,zipcode)
try{
    const userfd = await user.findByPk(id)
    userfd.fullname = fullname,
    userfd.country =country,
    userfd.gender = gender,
    userfd.message  = message,
    userfd.zipcode = zipcode, 
    userfd.email = email,   
    userfd.check = check
    userfd.save();
    console.log('user updated ')
    res.json({ message:"user updated" })

    }
    catch(error)
    {
        console.log(error);
        next(error);
    }   
}
