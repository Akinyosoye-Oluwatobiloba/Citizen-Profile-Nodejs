function apikey(req,res,next){

    const apikey = '123456'
    console.log(req.query);
    if(req.query.api_key && (req.query.api_key === apikey)){
        next();

    }else{
        res.json({
            msg:'Invalid Authentication'
        })
    }


}


module.exports = apikey;