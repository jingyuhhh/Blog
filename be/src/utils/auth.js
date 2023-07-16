const jwt=require("jsonwebtoken");

const auth=async  (ctx,next)=>{
    try{
        const {authorization} = ctx.request.header;
        jwt.verify(authorization,"cancan");
    }catch (err){
        ctx.body = {
            code:500,
            err,
        }
        return;
    }
    await next();
}

module.exports = auth;