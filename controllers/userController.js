const user = require('../model/userModel');
exports.postAddUser = async(req,res,next) => {
        const fullname = req.body.fullname;
        const country = req.body.country;
        const gender = req.body.gender;
        const message = req.body.message;
        const zipcode = req.body.zipcode;
        const email = req.body.email;
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
             }
    }

exports.putAddUser = async(req,res,next) => {
        res.json({message : " user upadted sucessfully  "})
    }

exports.delete = async(req,res,next) => {
    const id = req.params.id;
    try{
    const result =await  user.destroy({
        where: { id: id }
    })
        console.log("product deleted");
        res.json({ msg: "prodcut deleted" })
      }
    catch(err ) {
    console.log(error);
    next(error);
    }
  } 

exports.showAll = (req,res,next) => {
        res.json({message : " check all users  "})
    }

exports.search = (req,res,next) => {
        res.json({message : "searching .........  "})
    }
