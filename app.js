const routes = require("./routes/routes")
const express = require("express")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const app = express()
const hbs = require("express-handlebars")
const port = 4000
const path = require("path")
// bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
//frontend source path middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser())
// app.use(session())
app.set("view engine", "hbs")
app.engine("hbs", hbs({
    defaultLayout: "main",
    extname: ".hbs"
}))

// routes middleware
app.use(routes)
app.listen(port || process.env.PORT, () => {
    console.log("running at port:", port)
})