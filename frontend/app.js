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
        <td>${s.id}</td>
        <td>${s.nama}</td>
        <td>${s.nisn}</td>
        <td>${s.nama_kelas || "Kelas tidak ditemukan"}</td>
        <td>${s.no_hp}</td>
        <td>${s.alamat}</td>
        <td>${s.jenis_kelamin}</td>
        <td>${new Date(s.tanggal_lahir).toLocaleDateString()}</td>
        <td><button onclick="hapusSiswa(${s.id})">Hapus</button></td>
        <td><button onclick="getSiswa(${s.id})">Edit</button></td>
      </tr>`;
    table.innerHTML += row;
  });
}

// Hapus siswa
function hapusSiswa(id) {
  fetch(`${API_SISWA}/${id}`, { method: "DELETE" })
    .then((res) => res.json())
    .then(() => {
      alert("Siswa dihapus.");
      loadSiswa();
    })
    .catch((err) => console.error("Gagal hapus:", err));
}

// Isi dropdown kelas
async function isiDropdownKelas() {
  try {
    const res = await fetch(API_KELAS);
    const kelasList = await res.json();
    const select = document.getElementById("id_kelas");
    select.innerHTML = "";
    kelasList.forEach((k) => {
      const option = document.createElement("option");
      option.value = k.id;
      option.textContent = k.nama_kelas;
      select.appendChild(option);
    });
  } catch (err) {
    console.error("Gagal ambil kelas:", err);
  }
}

// Ambil data siswa untuk edit
function getSiswa(id) {
  fetch(`${API_SISWA}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("siswa_id").value = data.id;
      document.getElementById("nama").value = data.nama;
      document.getElementById("nisn").value = data.nisn;
      document.getElementById("id_kelas").value = data.id_kelas;
      document.getElementById("no_hp").value = data.no_hp;
      document.getElementById("alamat").value = data.alamat;
      document.getElementById("jenis_kelamin").value = data.jenis_kelamin;
      document.getElementById("tanggal_lahir").value = data.tanggal_lahir.split("T")[0];
    })
    .catch((err) => console.error("Gagal ambil data siswa:", err));
}

// Tambah atau update siswa
document.getElementById("editSiswaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("siswa_id").value;
  const data = {
    nama: document.getElementById("nama").value,
    nisn: document.getElementById("nisn").value,
    id_kelas: document.getElementById("id_kelas").value,
    no_hp: document.getElementById("no_hp").value,
    alamat: document.getElementById("alamat").value,
    jenis_kelamin: document.getElementById("jenis_kelamin").value,
    tanggal_lahir: document.getElementById("tanggal_lahir").value,
  };

  const method = id ? "PUT" : "POST";
  const url = id ? `${API_SISWA}/${id}` : API_SISWA;

  fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(() => {
      alert(`Siswa ${id ? "diperbarui" : "ditambahkan"}!`);
      document.getElementById("editSiswaForm").reset();
      document.getElementById("siswa_id").value = "";
      loadSiswa();
    })
    .catch((err) => console.error("Gagal simpan:", err));
});

// Inisialisasi
document.addEventListener("DOMContentLoaded", () => {
  isiDropdownKelas();
  loadSiswa();
});
