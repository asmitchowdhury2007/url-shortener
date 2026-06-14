const sessionIDtoUserLink = new Map();

function setUser(id,user){
    sessionIDtoUserLink.set(id,user); 
};
function getUser(id){
    sessionIDtoUserLink.get(id);
}
module.exports = {
    setUser,
    getUser,
}