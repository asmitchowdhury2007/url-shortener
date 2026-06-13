const user = require("../models/user");

async function createUser(req,res){
    
    const {name, email, password} = req.body;
    await user.create({
        name,
        email,
        password
    })
    return res.redirect("/",{
        name : name
    });
}

async function checkLoginUser(req,res){
    
    const {email, password} = req.body;
    const User = await user.findOne({email,password});
    if (User){
        return res.render("home", {
            name : User.name
        })
    }
}


module.exports = {
    createUser,
    checkLoginUser,
}
