function gerarLink(){
const numeroCelular = document.getElementById("numeroCelular").value;
const textoPersonalizado = document.getElementById("textoPersonalizado").value;

if(!numeroCelular){
    alert("por favor, Digite Um Número De Celular");
    return;
}
const numeroFormatado = numeroCelular.replace(/\D/g, "");
let linkParaWhatsApp = `http://wa.me/${numeroCelular}`;
if(textoPersonalizado){

    const textoCodificado = encodeURIComponent(textoPersonalizado)
    linkParaWhatsApp += `?text=${textoCodificado}`;
}

const resultado = document.getElementById("resultado")
resultado.innerHTML = `<a href="${linkParaWhatsApp}" target="_blank">${linkParaWhatsApp}</a>`;
}


function copiarLink (){
     const linkGerado = document.querySelector("#resultado a")
     if(linkGerado){
        const tempInput = document.createElement("input");
        tempInput.value  = linkGerado.href;
        document.body.appendChild(tempInput);

        tempInput.select();
        tempInput.setSelectionRange(0, 99999);

        document.execCommand("copy");
        document.body.removeChild(tempInput)
        alert("Link cópiado para a Àrea de Transferência")
     }else{
        alert("Primeiro, Gere o link")

     }
}
