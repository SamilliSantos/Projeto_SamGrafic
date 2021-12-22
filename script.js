function valid(){

  var Email = document.getElementById ('idmail');
  var Senha = document.getElementById ('idpass');

  if(Email.value.length < 7){
    alert("Email incompleto ou inválido!");
    Email.focus();

  
    return false;

  

  }

  if(Senha.value.length < 7){
    alert("Senha incompleta ou inválida!");
    Senha.focus();

  
    return false;

  

  }
}
