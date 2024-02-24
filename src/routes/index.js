const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController")
const emailController = require("../controllers/emailController")
//cách 1
let routes = (app) => {
    router.get("/", homeController.getHome)

    router.post("/send-email", emailController.sendMail)
    return app.use('/',router)
}
//cách 2
// router.get("/", (req, res) => {
//     res.json({
//         "name": "lê phú Cường"
//     })
// })
module.exports = routes;