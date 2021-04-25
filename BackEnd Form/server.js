const express = require("express");
//app es un método de express
const app = express();
const connectToDatabase = require("./config/connectToDatabase");

connectToDatabase();

// SERVIDOR 

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/users"));

let PORT = process.env.PORT || 5555;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
