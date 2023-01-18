const express = require("express")
const app = express()
const cors = require("cors")


//Middleware 
//Middleware 
app.use(cors());




app.get("/", (req, res) => {
	res.send(`Listening on port 3000 💯`)
})

app.listen(process.env.PORT || 3000, () => console.log("serveur working 👍"))

module.exports = app