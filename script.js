

function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`, decodedResult);
    alert('Codigo Leido');

}
var html5QrcodeScanner = new Html5QrcodeScanner(
 "qr-reader", { fps: 30, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);
