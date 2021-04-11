function enviarEmail(parametros) {
    var tempParams ={
        from_name:document.getElementById("nome").value,
        from_email:document.getElementById("email").value,
        message:document.getElementById("mensagem").value
    };

    emailjs.send('service_ifa2qa9','template_cjj1lhu', tempParams)
    .then(function(res){
        console.log("sucesso", res.status);
        document.getElementById("botao-contato").innerHTML = "Enviado";
        document.getElementById("botao-contato").style.outline = "2px solid #07f207";
    })
}