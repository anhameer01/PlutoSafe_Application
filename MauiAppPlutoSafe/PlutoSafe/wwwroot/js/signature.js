let signaturePad;

window.initSignature = (canvasId) => {
    const canvas = document.getElementById(canvasId);

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    signaturePad = new SignaturePad(canvas, {
        minWidth: 1,
        maxWidth: 2,
        penColor: "black"
    });

    // Prevent page scroll while signing

    canvas.style.touchAction="none";
    canvas.addEventListener("touchstart", function (e) {
        e.stopPropagation();
    }, { passive: false });

    canvas.addEventListener("touchmove", function (e) {
        e.preventDefault();
        e.stopPropagation();
    }, { passive: false });
};