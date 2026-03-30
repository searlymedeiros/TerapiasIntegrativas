function ajustarTitulos() {
    const isMobile = window.innerWidth <= 568;
    const titulos = document.querySelectorAll('#feature h2, #feature h3');

    titulos.forEach(titulo => {
        if (isMobile && titulo.tagName === "H2") {
            const novo = document.createElement("h3");
            novo.innerHTML = titulo.innerHTML;
            titulo.replaceWith(novo);
        } else if (!isMobile && titulo.tagName === "H3") {
            const novo = document.createElement("h2");
            novo.innerHTML = titulo.innerHTML;
            titulo.replaceWith(novo);
        }
    });
}

window.addEventListener("load", ajustarTitulos);
window.addEventListener("resize", ajustarTitulos);
