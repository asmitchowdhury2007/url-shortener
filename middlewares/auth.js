const {setUser,getUser}= require("../services/auth");
async function restricToLoggedInUser(req,res,next){
    const UserID = req.cookies?.uid;
    if(UserID){
        const user = getUser(UserID);
        if(user){
            req.user = user;
            next();
        }
        else{
            return res.redirect("/login");
        }
        
    }
    else{
        return res.redirect("/login");
    }
    
}
module.exports ={
    restricToLoggedInUser,
}