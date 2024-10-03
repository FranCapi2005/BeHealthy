const express = require("express")
const router = express.Router()

const controller = require("../controller/userController")

router.get("/register", controller.register)

router.get("/login", controller.login)

router.get("/forgot-password", controller.fpass)


module.exports = router