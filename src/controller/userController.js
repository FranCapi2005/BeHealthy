const express = require("express")

const controller = {
    register: (require, response) => {
        response.render("users/reg.ejs");
    },
    login: (require, response) => {
        response.render("users/log.ejs");
    },
    fpass: (require, response) => {
        response.render("users/fpass.ejs");
    }
}


module.exports = controller