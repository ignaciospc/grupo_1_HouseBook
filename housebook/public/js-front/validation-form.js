window.onload = () => {

    let nombre = document.querySelector("input.nombre");
    let usuario = document.querySelector("input.usuario");
    let email = document.querySelector("input.email");
    let password = document.querySelector("input.password");
    let c_password =document.querySelector("input.c_password");
    let form = document.querySelector("form.registro-form");

    let nombreError =document.querySelector("div.nombre-error");
    let usuarioError = document.querySelector("div.usuario-error");
    let emailError = document.querySelector("div.email-error");
    let passwordError = document.querySelector("div.password-error");
    let c_passwordError = document.querySelector("div.c_password-error");
  

    form.addEventListener("submit", (e)=> {
         e.preventDefault();

        //validacion nombre
        if(nombre.value == ""){    
            nombre.classList.add("border-validation");
            nombreError.innerHTML = "El campo de Nombre no debe estar vacio"
            nombreError.style.display="block";
        }else if(nombre.value.length < 2){
           nombre.classList.add("border-validation");
           nombreError.innerHTML = "El campo de Nombre debe contener al menos 2 caracteres" 
           iconoError.style.display="block";
        }
        else{
            nombre.classList.add("border-validation-ok")
            nombreError.innerHTML = ""
        }
         //validacion user
         if(usuario.value == ""){
             usuario.classList.add("border-validation");
             usuarioError.innerHTML = "el campo de Usuario no debe estar vacio";
             usuarioError.style.display="block";
         }else if(usuario.value.length < 6){
            usuario.classList.add("border-validation");
            usuarioError.innerHTML = "El campo de usuario debe contener al menos 6 caracteres" ;
            usuarioError.style.display="block";
         }else{
             usuario.classList.add("border-validation-ok");
             usuarioError.innerHTML="";
         }
         //validation email
    
         let expReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

       
         if(!expReg.test(email.value)){ // retorna true o false
             email.classList.add("border-validation");
             emailError.style.display="block";
             emailError.innerHTML="Coloque un Email valido";
         }else{
             email.classList.add("border-validation-ok");
             emailError.innerHTML="";
         }

         //validation Password

         if(password.value == ""){
             password.classList.add("border-validation");
             passwordError.innerHTML = "Este campo no puede estar vacio";
             passwordError.style.display="block";
         }else if(password.value.length < 8){
            password.classList.add("border-validation");
            passwordError.innerHTML = "la contrasela debe contener al menos 8 caracteres";
            passwordError.style.display="block";
         }else{
             password.classList.add("border-validation-ok");
             passwordError.innerHTML="";
         }

         //validacion de pass iguales
        

         if(password.value != c_password.value){
            c_password.classList.add("border-validation");
            c_passwordError.innerHTML = "las contraseñas no coinciden"
            c_passwordError.style.display="block"
            
         }else{
            c_password.classList.add("border-validation-ok");
            passwordError.innerHTML="";
         }
         



    })


}
