window.onload = () => {

    let check = document.getElementById("view-password");
    let pass = document.getElementById("password");
    
    check.onclick = () => {
    pass.type = pass.type == 'password' ? 'text' : 'password';
    }


    let form = document.querySelector("form.form-login"); //se captura el form

    //se asigna el evento (.onclikc / .onsubmit / etc)
    form.onsubmit = (e) => {     
        let inputEmail = form.querySelector('#email')
        inputEmail.classList.remove("error-input")
        let inputPass = form.querySelector("#password")
        inputPass.classList.remove("error-input")


        let boxErrors = document.querySelector('#box-errors')
        let expReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        let mostrarError = document.querySelector("ul.lista-errores")
        
        console.log(inputPass.value);
        console.log(inputEmail.value);

        if(!expReg.test(inputEmail.value)){
            e.preventDefault();
            boxErrors.style.display="block"
            inputEmail.classList.add("error-input")
            mostrarError.innerHTML = "<li> introduce tu email </li>"
        }else{
            mostrarError.innerHTML=""
        }

        if(inputPass.value == ""){
            e.preventDefault();
            boxErrors.style.display="block"
            inputPass.classList.add("error-input")
            mostrarError.innerHTML += "<li> introduce tu contraseña </li>"
        }
    }


}