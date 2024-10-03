// ------------ Requires ------------ \\
const express = require("express")
const path = require("path")

const app = express();



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



// ------------ Listen Server ------------ \\
const port = process.env.PORT || 3030

app.listen(`${port}`, () => {
	console.log(`Servidor funcionando en: http://localhost:${port}`);
});