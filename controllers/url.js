const shortid= require("shortid");
const url = require("../models/url");

async function createShortID(req,res){
    const URL = req.body.url;
    if(URL){
        let shortID = shortid.generate();
        await url.create({
            shortID: shortID,
            redirectURL : URL,
            
        });
        return res.render("home",{
            id: shortID,
        });
        return res.status(201).json({ID :shortID });
    }
    else{
        return res.render("home");
        return res.status(404).json({error : "URL not found"});
    }
};
async function redirectURL(req,res){
    const shorturl = req.params.id;
    
    if(shorturl){
        const urldata = await url.findOneAndUpdate(
            {shortID: shorturl},
            {
                $push: {
                    history: {
                        _id : false,
                        timeStamp: Date.now()
                    } 
                }  

            },
            {returnDocument:"after"}
        );
        
        if(urldata){
            return res.redirect(urldata.redirectURL);
        }
        else{
            return res.status(404).send({message: "URL INVALID"});
        }
    }
}
async function countURL(req,res){
    const shorturl = req.params.id;
    
    if(shorturl){
        const urlData = await url.findOne(
            {shortID: shorturl}
        );
        if(urlData){
            return res.status(200).json({count : urlData.history.length});
        }
        else{
            return res.status(404).json({error :"User Not Found"});
        }
    }
    else{
        return res.status(404).json({error : "Url not given"});
    }
}
module.exports = {
    createShortID,
    redirectURL,
    countURL,
}