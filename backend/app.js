const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
require("dotenv").config();
require("./conn/conn");

const Nugget = require("./routes/nuggets");

//routes
app.use("/nuggets", Nugget);

//Port created
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
