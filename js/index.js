
const username = "admin@gmail.com"
const password = "123456";
const campoSenha = document.getElementById('field-password');
const campoEmail = document.getElementById('field-email');

/*Criando uma função para mostrar ou nao a senha*/
function showPassword(){
    const eye = document.getElementById('eye'); /*Buscando o campo lá no HTML pelo seu id*/
    const eyeslash = document.getElementById('eye-slash');
    const fieldPassword = document.getElementById('field-password');


    if(eye.style.display === 'none'){
        eye.style.display = 'block';
        eyeslash.style.display = 'none'; /* mudo o outro para none, para nao aparecer */
        fieldPassword.type = 'text'; /* seto o tipo do campo para texto */
    }else{ /* Caso constário, inverter */
        eye.style.display = 'none';
        eyeslash.style.display = 'block';
        fieldPassword.type = 'password';
    }
}

//Validar usuário e senha
function validarSenha(){
    
    if (campoSenha.value == password && campoEmail.value == username) {
        //Se tudo correto, chamar a página principal.
        window.location.href = "main.html"
    }else {
        alert('Dados Incorretos!');
    }

}

/* Adicionando um evento ao clicar no botão login */
document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault(); /*Para ele não fazer nada ao clicar, não tentar recarregar a página 
})



