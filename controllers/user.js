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
    return res.render("login");
}

async function checkLoginUser(req,res){
    
    const {email, password} = req.body;
    const User = await user.findOne({email,password});
    if (User){
        const sessionID = uuidv4();
        setUser(sessionID,User);
        res.cookie("uid", sessionID);
        return res.render("home", {
            name : User.name,
        })
    }
    else{
        return res.render("login");
    }
}


module.exports = {
    createUser,
    checkLoginUser,
}
