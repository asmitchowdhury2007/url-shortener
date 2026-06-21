const jwt = require("jsonwebtoken");
const secret = "asmit$3454"
function setUser(user){
    return jwt.sign({
        _id : user._id,
        name: user.name,
        email:user.email,
    },secret);
};
function getUser(token){
    if (token){
        return jwt.verify(token,secret);
    }
    else{
        return null;
    }
    
}
module.exports = {
    setUser,
    getUser,
}