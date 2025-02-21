const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
const Errorhandle =require("./middleware/error")

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));


const {userRoute} = require('./controllers/userRoute');


app.get("/test", async (req, res) => {
  res.send("hello.....");
});


app.use("/user",userRoute)




app.use(Errorhandle)

module.exports = { app };