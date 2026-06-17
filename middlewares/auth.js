const {setUser,getUser}= require("../services/auth");
async function restricToLoggedInUser(req,res,next){
    const UserID = req.cookies?.uid;
    if(UserID){
        const user = getUser(UserID);
        if(user){
            return res.render("home");
        }
        else{
            return res.redirect("/login");
        }
        
    }
    else{
        return res.redirect("/login");
    }
    next();
}
module.exports ={
    restricToLoggedInUser,
}