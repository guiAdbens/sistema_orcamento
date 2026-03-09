import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

//const express
const app = express();

// const general use
app.use(cors());
app.use(express.json());

// import do services 
app.use("/api", authRoutes);


// teste
app.get("/teste", (req, res) => {
  res.send("API funcionando");
})


export default app;

/*app.listen(3000, () => {
  console.log("Servidor rodando");
});
*/

/*app.get("/teste", (req, res) => {
  res.send("API funcionando");
});
*/

// teste tutorial

// imports
/*
import express from "express";
const app=express()

import  bodyparser from 'body-parser'
const port=process.env.port || 3000
import * as mariadb from"mariadb"

app.use(bodyparser.json())
app.use(bodyparser.urlencoded(extends));
*/