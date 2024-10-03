const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const http = require('http');
const connection = require('./services/db');
const router = require('./routers/Router');

const app = express();

app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Allow specific methods including PATCH
    allowedHeaders: "*", // Allow all headers
    credentials: true, // Allow cookies and authorization headers
  })
);

app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
    console.log(`Method: ${req.method}, Path: ${req.path}`);
    next();
})

app.use("/api", router);

app.listen(process.env.PORT || 2000, () => 
    console.log(`Listening on port ${process.env.PORT || 2000}`)
);

(async () => {
    await connection();
})();
