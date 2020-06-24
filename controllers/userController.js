
exports.postAddUser = (req,res,next) => {
        res.json({message : " user added sucessfully  "})
    }

exports.putAddUser = (req,res,next) => {
        res.json({message : " user upadted sucessfully  "})
    }

exports.delete = (req,res,next) => {
        res.json({message : " user deleted sucessfully  "})
    }

    exports.showAll = (req,res,next) => {
        res.json({message : " check all users  "})
    }

    exports.search = (req,res,next) => {
        res.json({message : "searching .........  "})
    }
