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

    let yuzde10 = genelToplamEuro * 0.10;
    let yuzde20 = genelToplamEuro * 0.20;
    let yuzde25 = genelToplamEuro * 0.25;

    document.getElementById("gidisEuro").innerText = gidisToplamEuro.toFixed(2);
    document.getElementById("donusEuro").innerText = donusToplamEuro.toFixed(2);
    document.getElementById("toplamEuro").innerText = genelToplamEuro.toFixed(2);

    document.getElementById("gidisTL").innerText = gidisToplamTL.toFixed(2);
    document.getElementById("donusTL").innerText = donusToplamTL.toFixed(2);
    document.getElementById("toplamTL").innerText = genelToplamTL.toFixed(2);

    document.getElementById("yuzde10").innerText = yuzde10.toFixed(2);
    document.getElementById("yuzde20").innerText = yuzde20.toFixed(2);
    document.getElementById("yuzde25").innerText = yuzde25.toFixed(2);

    document.getElementById("yuzde10_4").innerText = (yuzde10 / 4).toFixed(2);
    document.getElementById("yuzde10_5").innerText = (yuzde10 / 5).toFixed(2);
    
    document.getElementById("yuzde20_4").innerText = (yuzde20 / 4).toFixed(2);
    document.getElementById("yuzde20_5").innerText = (yuzde20 / 5).toFixed(2);
    
    document.getElementById("yuzde25_4").innerText = (yuzde25 / 4).toFixed(2);
    document.getElementById("yuzde25_5").innerText = (yuzde25 / 5).toFixed(2);
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(() => {
        console.log('Service Worker kayıt edildi.');
    });
}
