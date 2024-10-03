const express = require("express")
const createChart = require("lightweight-charts")

const controller = {
    index: (require, response) => {
        response.render("home");
    }
}


module.exports = controller