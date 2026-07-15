// =========================================
// SCRIPT WEBSITE RENTAL MOBIL
// =========================================

// Hitung total harga otomatis
function hitungTotal() {

    const harga = 350000;

    let mulai = new Date(document.getElementById("mulai").value);
    let selesai = new Date(document.getElementById("selesai").value);

    let selisih = (selesai - mulai) / (1000 * 60 * 60 * 24);

    if (selisih > 0) {
        document.getElementById("total").innerHTML =
            "Rp " + (selisih * harga).toLocaleString("id-ID");
    }
}