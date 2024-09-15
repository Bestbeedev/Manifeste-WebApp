const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const videoRoutes = require("./Routes/VideoPostRoutes");
const mongoose = require("mongoose");
const app = express();

//Middleware
app.use(express.json());
app.use((res, req, next) => {
  console.log("Middleware", req.path, res.method);
  next();
});

//Routes
app.use("/api/videoPost", videoRoutes);

//Connect to database mongodb

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //backend starting
    const PORT = process.env.P0RT;
    app.listen(PORT, () => {
      console.log("Database connected and Server running at 5500 port");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
