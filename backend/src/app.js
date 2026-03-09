import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando");
});


app.get("/teste", (req, res) => {
  res.send("API funcionando");
});


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