const express = require("express")

const controller = {
    index: (require, response) => {
        response.render("home");
    }
}


module.exports = controller