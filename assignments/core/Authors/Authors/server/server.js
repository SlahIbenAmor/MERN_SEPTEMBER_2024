require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors")


require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({ extended: true }), cors());


const AuthorsRoutes = require("./routes/author.routes")
AuthorsRoutes(app)



app.listen(port, () => console.log(`Listening on port: ${port}`));