/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-06-03 14:54:30
 * @LastEditors: Joe
 * @LastEditTime: 2022-09-19 22:21:15
 */
module.exports = (req, res, next) => {
  console.log(req.path);
  console.log(req.method);
  if (req.method === "POST" && req.path === "/login") {
    console.log("12345");
    if (req.body.username === "jack" && req.body.password === "123456") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(400).json({
        message: "密码错误",
      });
    }
  }
  next();
};
