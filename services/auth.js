const sessionIDtoUserLink = new Map();

function setUser(id,user){
    sessionIDtoUserLink.set(id,user); 
};
function getUser(id){
    return sessionIDtoUserLink.get(id);
}
module.exports = {
    setUser,
    getUser,
}