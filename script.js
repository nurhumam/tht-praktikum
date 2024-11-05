document.getElementById('pegawaiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const nomor = document.getElementById('nomor').value.trim();
    const komentar = document.getElementById('komentar').value.trim();

    let isValid = true;
    if (nama === "") {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    if (email === "") {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    if (nomor === "") {
        document.getElementById('nomorError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nomorError').style.display = 'none';
    }

    if (komentar === "") {
        document.getElementById('komentarError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('komentarError').style.display = 'none';
    }

    if (isValid) {
        const pesan = `Nama: ${nama}\nEmail: ${email}\nNomor HP: ${nomor}\nKomentar: ${komentar}`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=+6285281262229&text=${encodeURIComponent(pesan)}`;
        
        window.open(whatsappURL, '_blank');
    }
});
