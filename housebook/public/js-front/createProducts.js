window.onload = () => {

    let form = document.querySelector("#form-formulario");
    let info = form.querySelector("div.segunda-columna");

    /*inputs*/
    let inputTitulo = info.querySelector("div.titulo > input");
    let inputAutor = info.querySelector("div.autor > select#autores")
    let inputValoracion = info.querySelector("div.valoracion > input")
    let inputDescripcion = info.querySelector("div.descripcion > textarea")
    let inputCategoria = info.querySelector("div.categoria > input")

    console.log(inputValoracion);

    form.onsubmit = (e) =>{

        if(inputTitulo.value == ""){
            e.preventDefault();
            inputTitulo.classList.add("error-input")
        }

        if(inputAutor.value == ""){
            e.preventDefault()
            inputAutor.classList.add("error-input");
        }
        
        if(inputValoracion.value == 0){
            e.preventDefault();
            inputValoracion.classList.add("error-input");
        }

        if (inputDescripcion.value == "" || inputDescripcion.value.length == 0){
            e.preventDefault();
            inputDescripcion.classList.add("error-input");
        }
        


        
    }

    
}