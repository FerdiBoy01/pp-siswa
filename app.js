const express = require("express");
const siswaRoute = require("./routes/siswaRoute");
const app = express();
const PORT = process.env.PORT;

require("dotenv").config();
const db = require("./config/dbConfig");

//midelware
app.use(express.json());

//gunakan router
app.use("/siswa", siswaRoute);

//jalankan server
app.listen(PORT, () => {
  console.log(`server berjalan di port ${PORT}`);
});
