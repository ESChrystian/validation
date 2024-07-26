// BLOCO PARA VALIDAÇÃO DE EMAIL
// -----------------------------------------------------------
function checarEmail() {
    if (document.forms[0].email.value == "" ||
        document.forms[0].email.value.indexOf('@') == -1 ||
        document.forms[0].email.value.indexOf('.') == -1) {
        document.getElementById('mensagem').innerHTML= "Por favor, preencha seu Email corretamente.";
        alert("");
        return false;
       
    } else {
       document.getElementById('mensagem').innerHTML = "Parabéns, você preencheu seu email corretamente.";
       alert("");
    }
};
 