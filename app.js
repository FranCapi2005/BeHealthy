// ------------ Requires ------------ \\
const express = require("express")
const path = require("path")

const app = express();

/* async function loadModule(){
	const modulePath = path.resolve(__dirname, "module.js");
	const module = await import(modulePath);

	module.searchUrl();
}

loadModule(); */

// ------------ .env Require ------------ \\
require("dotenv").config()



// ------------ App Use ------------ \\
app.use(express.static("public"))



// ------------ EJS Template ------------ \\
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));



// ------------ Router Access ------------ \\
const mainRouter = require("./src/router/mainRouter")
app.use("/", mainRouter)

const userRouter = require("./src/router/userRouter")
app.use("/user", userRouter)

/* 
const adminRouter = require("./src/router/adminRouter")
app.use("/admin", adminRouter)
*/



// ------------ Listen Server ------------ \\
const port = process.env.PORT || 3040

app.listen(`${port}`, () => {
	console.log(`Servidor funcionando en: http://localhost:${3040}`);
});