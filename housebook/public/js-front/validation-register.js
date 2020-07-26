window.onload = () => {
    let check = document.getElementById("view-password");
    let pass = document.getElementById("password");
    let repass = document.getElementById("c_password");
    
    check.onclick = () => {
    pass.type = pass.type == 'password' ? 'text' : 'password';
    repass.type = repass.type == 'password' ? 'text' : 'password';
    }

    
    let form = document.querySelector("form.registro-form");



    form.onsubmit = (e) => {

        let campoNombre = form.querySelector("#nombre");
        campoNombre.classList.remove("border-validation");
        campoNombre.classList.remove("border-validation-ok");

        let campoUsuario = form.querySelector("#usuario")
        campoUsuario.classList.remove("border-validation-ok");
        campoUsuario.classList.remove("border-validation");

        let campoEmail = form.querySelector("#email");
        let expReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        campoEmail.classList.remove("border-validation-ok");
        campoEmail.classList.remove("border-validation");

        let campoPass = form.querySelector("#password");
        campoPass.classList.remove("border-validation")
        campoPass.classList.remove("border-validation-ok")

        let validacionPass = form.querySelector("#c_password");
        validacionPass.classList.remove("border-validation");
        validacionPass.classList.remove("border-validation-ok");

        //nombre
        if (campoNombre.value.length < 2 || campoNombre.value == "") {
            e.preventDefault();
            campoNombre.classList.add("border-validation")
            form.querySelector(".error-nombre").innerHTML = "el campo debe contener al menos dos caracateres";
        } else {
            campoNombre.classList.add("border-validation-ok")
            form.querySelector(".error-nombre").innerHTML = "";
        }
        //user
        if (campoUsuario.value.length < 2 || campoUsuario.value == "") {
            e.preventDefault();
            campoUsuario.classList.add("border-validation")
            form.querySelector(".error-usuario").innerHTML = "el campo debe contener al menos dos caracateres";
        } else {
            campoUsuario.classList.add("border-validation-ok")
            form.querySelector(".error-usuario").innerHTML = "";
        }
        //email
        if (!expReg.test(campoEmail.value)) {
            e.preventDefault();
            campoEmail.classList.add("border-validation")
            form.querySelector(".error-email").innerHTML = "coloque un email valido";
        } else {
            campoEmail.classList.add("border-validation-ok")
            form.querySelector(".error-email").innerHTML = "";
        }
        //password
        if (campoPass.value.length < 8) {
            e.preventDefault();
            campoPass.classList.add("border-validation")
            form.querySelector(".error-password").innerHTML = "la pass debe contener al menos 8 caracteres";
        } else {
            campoPass.classList.add("border-validation-ok")
            form.querySelector(".error-password").innerHTML = "";
        }
        //c_password
        if (campoPass.value != validacionPass.value) {
            e.preventDefault();
            validacionPass.classList.add("border-validation");
            form.querySelector(".error-c_password").innerHTML = "las contraseñas no coinciden"
        } else if (validacionPass.value == "") {
            e.preventDefault();
            validacionPass.classList.add("border-validation");
            form.querySelector(".error-c_password").innerHTML = "este campo no puede estar vacio"
        } else {
            validacionPass.classList.add("border-validation-ok")
            form.querySelector(".error-c_password").innerHTML = "";
        }





    }




}
