// Meminta user untuk memasukkan namanya
const userName = prompt("Masukkan nama kamu:");

// Memperbarui teks sambutan dengan nama user
const welcomeMessage = document.querySelector('#beranda p');
if (welcomeMessage) {
    welcomeMessage.textContent = `Hi ${userName}, Welcome To Website DARUL AMANAH ISLAMIC BOARDING SCHOOL`;
}

// Penanganan form
const submitButton = document.querySelector('button');
const namaInput = document.querySelector('.nama');
const tanggalInput = document.querySelector('.data');
const jenisKelaminInput = document.querySelectorAll('input[name="Jenis_Kelamin"]');
const pesanInput = document.querySelector('textarea');

submitButton.addEventListener('click', function() {
    const namaValue = namaInput.value;
    const tanggalValue = tanggalInput.value;
    let jenisKelaminValue;
    jenisKelaminInput.forEach(input => {
        if (input.checked) {
            jenisKelaminValue = input.value;
        }
    });
    const pesanValue = pesanInput.value;

    // Contoh menampilkan nilai di console
    console.log('Nama:', namaValue);
    console.log('Tanggal Lahir:', tanggalValue);
    console.log('Jenis Kelamin:', jenisKelaminValue);
    console.log('Pesan:', pesanValue);

    // Menampilkan data di dalam tabel
    document.getElementById('nama-data').textContent = namaValue;
    document.getElementById('tanggal-data').textContent = tanggalValue;
    document.getElementById('jenis-kelamin-data').textContent = jenisKelaminValue;
    document.getElementById('pesan-data').textContent = pesanValue;
});