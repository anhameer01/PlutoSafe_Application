let canvas;
let ctx;
let drawing = false;

window.initSignaturePad = function () {
    canvas = document.getElementById("signatureCanvas");
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
};

window.startDraw = function (x, y) {
    if (!ctx) return;
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(x, y);
};

window.draw = function (x, y) {
    if (!drawing || !ctx) return;
    ctx.lineTo(x, y);
    ctx.stroke();
};

window.endDraw = function () {
    drawing = false;
};

window.clearPad = function () {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};