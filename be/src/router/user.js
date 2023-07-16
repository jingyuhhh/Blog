const Router = require("koa-router");
const user = new Router();
const db = require("../utils/db")
const jwt = require("jsonwebtoken");

user.post("/",async (ctx)=>{
    const data = await new Promise((resolve,reject)=>{
        const sql= `select * from user`;
        db.query(sql,(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            const token={
                token:null
            }
            if(data[0].username===ctx.request.body.username._value && data[0].psw===ctx.request.body.psw._value){
                const tt=jwt.sign({
                    user:ctx.request.body.username
                },
                    "cancan",
                    {
                    expiresIn: 12 * 60 * 60
                })
                token.token=tt;
            }
            resolve(token);
        })
    })
    ctx.body = data;
})

module.exports=user;
