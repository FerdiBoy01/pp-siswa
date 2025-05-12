const API_SISWA = "http://localhost:3000/siswa";
const API_KELAS = "http://localhost:3000/kelas";

// Tampilkan daftar siswa
async function loadSiswa() {
  const res = await fetch(API_SISWA);
  const siswa = await res.json();
  const table = document.getElementById("siswa-table");
  table.innerHTML = "";

  siswa.forEach((s) => {
    const row = `
      <tr>
        <td>${s.nama}</td>
        <td>${s.nisn}</td>
        <td>${s.nama_kelas}</td>
        <td>${s.no_hp}</td>
        <td>${s.alamat}</td>
        <td>${s.jenis_kelamin}</td>
        <td>${new Date(s.tanggal_lahir).toLocaleDateString()}</td>
        <td><button onclick="hapusSiswa(${s.id})">Hapus</button></td>
      </tr>`;
    table.innerHTML += row;
  });
}

// Tampilkan daftar kelas ke dropdown
async function loadKelas() {
  const res = await fetch(API_KELAS);
  const kelas = await res.json();
  const select = document.getElementById("id_kelas");
  kelas.forEach((k) => {
    const option = document.createElement("option");
    option.value = k.id;
    option.textContent = k.nama_kelas || `Kelas ${k.id}`;
    select.appendChild(option);
  });
}

// Tambah siswa
document.getElementById("form-siswa").addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  await fetch(API_SISWA, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  e.target.reset();
  loadSiswa();
});

// Hapus siswa
async function hapusSiswa(id) {
  await fetch(`${API_SISWA}/${id}`, { method: "DELETE" });
  loadSiswa();
}

// Jalankan saat pertama kali
loadKelas();
loadSiswa();
