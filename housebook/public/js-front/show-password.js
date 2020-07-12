window.onload = () => {
    let check = document.getElementById("view-password")
    let pass = document.getElementById("password");
    let repass = document.getElementById("c_password")
    
    check.onclick = () => {
    pass.type = pass.type == 'password' ? 'text' : 'password';
    repass.type = repass.type == 'password' ? 'text' : 'password';
    }
}