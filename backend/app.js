const express = require("express");
const siswaRoute = require("./routes/siswaRoute");
const kelasRoute = require("./routes/kelasRoutes");
const pelanggaranRoute = require("./routes/pelanggaranRoutes");
const siswaPelanggaranRoute = require("./routes/siswaPelanggaranRoute");
const guruRoute = require("./routes/guruRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;
const path = require("path");
app.use(cors());

require("dotenv").config();
const db = require("./config/dbConfig");

//midelware
app.use(express.json()); //wajib untuk parsing json
//gunakan router
app.use("/siswa", siswaRoute); //penting
app.use("/kelas", kelasRoute);
app.use("/guru", guruRoute);
app.use("/pelanggaran", pelanggaranRoute);
app.use("/siswa_pelanggaran", siswaPelanggaranRoute);

//jalankan server
app.listen(PORT, () => {
  console.log(`server berjalan di port ${PORT}`);
});
