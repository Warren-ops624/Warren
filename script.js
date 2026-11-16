document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const toast = document.getElementById("qr-toast");
    const closeBtn = document.getElementById("close-toast");

    // Si l'utilisateur arrive via le QR Code (?scan=1)
    if (urlParams.get("scan") === "1") {
        toast.classList.remove("hidden");

        // Déclenche automatiquement le téléchargement de la vCard après 1 seconde
        setTimeout(() => {
            const link = document.createElement("a");
            link.href = "warren.vcf";
            link.download = "Warren_Ekbondu.vcf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 1000);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            toast.classList.add("hidden");
        });
    }
});