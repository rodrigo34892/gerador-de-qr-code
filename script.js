const input = document.querySelector("input");
const qrcode = document.querySelector("#qrcode");

document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        genqrcode();
    }
});

function genqrcode() {
    if (!input.value) return;

    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input.value)}`;
}
