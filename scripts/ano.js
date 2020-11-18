let evento_onload = window.addEventListener("load", event => {altera_ano_atual()});

function altera_ano_atual () {
    let footer = document.getElementById("footer");
    let ano_atual = new Date().getFullYear();
    footer.innerHTML = "ROSE ARAUJO &copy; 2011 - " + ano_atual;
}