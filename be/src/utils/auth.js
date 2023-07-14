const jwt = require("jsonwebtoken");
// 鉴权
const auth = async (ctx, next) => {
  try {
    //是header，在axios中才是headers
    let { authorization } = ctx.request.header; //解构
    // console.log(ctx.request.header.authorization);
    // console.log(authorization);
    jwt.verify(authorization, "secret"); //验证
  } catch (err) {
    //try中报错就会走catch，错误信息给err
    ctx.body = {
      code: 500,
      err,
    };
    return;
  }
  await next(); //放行函数，继续往下走
};

module.exports = {
  auth: auth,
};
