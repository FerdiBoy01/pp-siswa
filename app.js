const express = require("express");
const siswaRoute = require("./routes/siswaRoute");
const kelasRoute = require("./routes/kelasRoutes");
const pelanggaranRoute = require("./routes/pelanggaranRoutes");
const app = express();
const PORT = process.env.PORT;

require("dotenv").config();
const db = require("./config/dbConfig");

//midelware
app.use(express.json()); //wajib untuk parsing json
//gunakan router
app.use("/siswa", siswaRoute); //penting
app.use("/kelas", kelasRoute);
app.use("/pelanggaran", pelanggaranRoute);

//jalankan server
app.listen(PORT, () => {
  console.log(`server berjalan di port ${PORT}`);
});
