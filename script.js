function hesapla() {
    let gidisYolcu = parseInt(document.getElementById("gidisYolcu").value);
    let donusYolcu = parseInt(document.getElementById("donusYolcu").value);
    let kisiBasiEuro = parseFloat(document.getElementById("euroHarcama").value);
    let kisiBasiTL = parseFloat(document.getElementById("tlHarcama").value);

    let gidisToplamEuro = gidisYolcu * kisiBasiEuro;
    let donusToplamEuro = donusYolcu * kisiBasiEuro;
    let genelToplamEuro = gidisToplamEuro + donusToplamEuro;

    let gidisToplamTL = gidisYolcu * kisiBasiTL;
    let donusToplamTL = donusYolcu * kisiBasiTL;
    let genelToplamTL = gidisToplamTL + donusToplamTL;

    document.getElementById("toplamGidisYolcu").innerText = gidisYolcu;
    document.getElementById("toplamDonusYolcu").innerText = donusYolcu;
    document.getElementById("gidisEuro").innerText = gidisToplamEuro.toFixed(2);
    document.getElementById("donusEuro").innerText = donusToplamEuro.toFixed(2);
    document.getElementById("gidisTL").innerText = gidisToplamTL.toFixed(2);
    document.getElementById("donusTL").innerText = donusToplamTL.toFixed(2);
    document.getElementById("toplamEuro").innerText = genelToplamEuro.toFixed(2);
    document.getElementById("toplamTL").innerText = genelToplamTL.toFixed(2);
}
