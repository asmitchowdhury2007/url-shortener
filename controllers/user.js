const user = require("../models/user");
const {v4: uuidv4} = require("uuid");
const {setUser,getUser}=require("../services/auth");
async function createUser(req,res){
    
    const {name, email, password} = req.body; 
    await user.create({
        name,
        email,
        password,
    })
    return res.redirect("/login");
}

async function checkLoginUser(req,res){
    
    const {email, password} = req.body;
    const User = await user.findOne({email,password});
    if (User){
        
        const token = setUser(User);
        res.cookie("uid", token);
        return res.redirect("/");
    }
    else{
        return res.redirect("/login");
    }
}


module.exports = {
    createUser,
    checkLoginUser,
}
