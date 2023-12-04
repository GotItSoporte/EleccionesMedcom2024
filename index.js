const express = require("express")
const cors = require("cors"); //Para tener acceso a la informacion del node.js
const app = express();
const port = 5000 

app.use(cors());

app.use(express.json());

app.use(
    express.urlencoded({
      extended: true,
    })
  );

app.get("/", (req, res) => {
    res.send("Hello or  World!");
});



app.use("/ReadData", require("./routes/ReadData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
