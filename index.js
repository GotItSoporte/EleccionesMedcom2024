const express = require("express");
const cors = require("cors"); //Para tener acceso a la informacion del node.js
const app = express();
const port = 5000;

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

//------------------- LECTURA DE DATOS (BASE DE DATOS) -------------------
app.use("/ReadData", require("./routes/ReadData"));

//------------------- LECTURA DE DATOS (BASE DE DATOS) -------------------
app.use("/EditDataInTable", require("./routes/EditDataInOracle"));

//------------------- ENVIAR DATOS XML -------------------
app.use("/SendInfoXml", require("./routes/SendDataXml"));
//------------------- LEER DATOS XML -------------------
app.use("/ReadInfoXml", require("./routes/ReadDataXml"));

//------------------- ENVIAR DATOS WALL -------------------
app.use("/SendInfoSocket", require("./routes/SendDataSocket"));

//------------------- ENVIAR DATOS FOLLOWER -------------------
app.use("/SendInfoFollower", require("./routes/SendDataFollower"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
