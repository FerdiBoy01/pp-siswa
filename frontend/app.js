// Ambil data siswa dari backend
fetch("http://localhost:3000/siswa") // Ganti dengan URL backend kamu jika berbeda
  .then((response) => response.json()) // Mengubah respons ke format JSON
  .then((data) => {
    let rows = ""; // Variabel untuk menampung baris tabel

    // Iterasi data siswa dan buat baris tabel untuk setiap siswa
    data.forEach((siswa) => {
      rows += `
                <tr>
                    <td>${siswa.id}</td>
                    <td>${siswa.nama}</td>
                    <td>${siswa.nisn}</td>
                    <td>${siswa.id_kelas}</td>
                    <td>${siswa.no_hp}</td>
                    <td>${siswa.alamat}</td>
                    <td>${siswa.jenis_kelamin}</td>
                    <td>${new Date(siswa.tanggal_lahir).toLocaleDateString()}</td>
                </tr>
            `;
    });

    // Sisipkan baris tabel yang sudah dibuat ke dalam elemen HTML
    document.getElementById("data-row").innerHTML = rows;
  })
  .catch((error) => {
    // Menangani jika ada error
    console.error("Terjadi kesalahan:", error);
  });
