const jwt = require("jsonwebtoken");
const secret = "asmit$3454"
function setUser(user){
    return jwt.sign(user,secret);
};
function getUser(id){
    return sessionIDtoUserLink.get(id);
}
module.exports = {
    setUser,
    getUser,
}