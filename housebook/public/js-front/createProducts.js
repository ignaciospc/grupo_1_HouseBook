window.onload = () => {

    let form = document.querySelector("#form-formulario");
    let info = form.querySelector("div.segunda-columna");

    form.onsubmit = (e) => {


        /*inputs*/
        let inputTitulo = info.querySelector("div.titulo > input");
        inputTitulo.classList.remove("error-input");
        let inputAutor = info.querySelector("div.autor > select#autores");
        inputAutor.classList.remove("error-input");
        let inputValoracion = info.querySelector("div.valoracion > input");
        inputValoracion.classList.remove("error-input");
        let inputDescripcion = info.querySelector("div.descripcion > textarea");
        inputDescripcion.classList.remove("error-input");
        let inputCategoria = info.querySelector("div.categoria > textarea");
        inputCategoria.classList.remove("error-input");
        let inputPrecio = document.querySelector("#precio")
        inputPrecio.classList.remove("error-input");
        let inputDescuento = document.querySelector("#descuento")
        inputDescuento.classList.remove("error-input")
        let portada = document.querySelector(".carga-imagen > input")
        portada.classList.remove("error-input")

        let boxError = document.querySelector(".errores")
        
       
      // console.log(portada.value);
    

        if (inputTitulo.value == "" || inputTitulo.value.length < 5) {
            e.preventDefault();
            inputTitulo.classList.add("error-input")
            document.querySelector(".error-titulo").innerHTML="El titulo no debe estar vacio y debe contener al menos 5 caracteres"
            document.querySelector(".error-titulo").style.display="block"
        }else{
            document.querySelector(".error-titulo").innerHTML=""
            document.querySelector(".error-titulo").style.display="none"
        }

        if (inputAutor.value == "" ) {
            e.preventDefault()
            inputAutor.classList.add("error-input");
            document.querySelector(".error-autor").innerHTML="Desbes seleccionar al autor del libro"
            document.querySelector(".error-autor").style.display="block"
        }else{
            document.querySelector(".error-autor").innerHTML=""
            document.querySelector(".error-autor").style.display="none";
        }

        if (inputValoracion.value == 0 || inputValoracion.value > 5) {
            e.preventDefault();
            inputValoracion.classList.add("error-input");
            document.querySelector(".error-valoracion").innerHTML="La valoracion se debe encontrar entre 0 y 5"
            document.querySelector(".error-valoracion").style.display="block"
        }else{
            document.querySelector(".error-valoracion").innerHTML=""
            document.querySelector(".error-valoracion").style.display="none"
        }

        if (inputDescripcion.value == "" || inputDescripcion.value.length == 0) {
            e.preventDefault();
            inputDescripcion.classList.add("error-input");
            document.querySelector(".error-descripcion").innerHTML="La descripcion del Libro no debe estar vacia"
            document.querySelector(".error-descripcion").style.display="block"
        }else{
            document.querySelector(".error-descripcion").innerHTML=""
            document.querySelector(".error-descripcion").style.display="none"
        }

        if (inputCategoria.value == "") {
            e.preventDefault();
            inputCategoria.classList.add("error-input");
            document.querySelector(".error-categoria").innerHTML="Selecciona una categoria"
            document.querySelector(".error-categoria").style.display="block"
        }else{
            document.querySelector(".error-descripcion").innerHTML=""
            document.querySelector(".error-categoria").style.display="none"
        }

        let dimensiones = info.querySelector("#dimensiones");
        let formato = info.querySelector("#formato");
        let idioma = info.querySelector("#idioma");
        let publicacion = info.querySelector("#publicacion");
        let editorial = info.querySelector("#editorial");
        let isbn = info.querySelector("#isbn");
        let cuadrado = info.querySelector("div.columnas-detalle-libro")
        cuadrado.classList.remove("error-input")

        if (dimensiones.value == "" || formato.value == "" || idioma.value == "" || publicacion.value == "" || editorial.value == "" || isbn.value == "") {
            e.preventDefault();
            cuadrado.classList.add("error-input");
            document.querySelector(".error-detalle").innerHTML="Todos los campos deben estar completos"
            document.querySelector(".error-detalle").style.display="block"
        }else{
            document.querySelector(".error-detalle").innerHTML=""
            document.querySelector(".error-detalle").style.display="none"
        }

        if(inputPrecio.value == ""){
            e.preventDefault()
            inputPrecio.classList.add("error-input")
            document.querySelector(".error-precio").innerHTML="Coloque un precio valido"
            document.querySelector(".error-precio").style.display="block"
            
        }else{
            document.querySelector(".error-precio").innerHTML=""
            document.querySelector(".error-precio").style.display="none"
        }

        if (inputDescuento.value == "" || inputDescuento.value > 99){
            e.preventDefault()
            inputDescuento.classList.add("error-input")
            document.querySelector(".error-descuento").innerHTML="El descuento debe estar entre 0 y 99"
            document.querySelector(".error-descuento").style.display="block"
        }else{
            document.querySelector(".error-descuento").innerHTML=""
            document.querySelector(".error-descuento").style.display="none"
        }
        
        if (!(/\.(jpg|png|jpeg)$/i).test(portada.value)) {
            e.preventDefault()
            document.querySelector(".error-img").innerHTML="solo aceptamos imagenes en formato jpg y png"
            document.querySelector(".error-img").style.display="block"
            portada.classList.add("error-input")
        }else{
            document.querySelector(".error-img").innerHTML=""
            document.querySelector(".error-img").style.display="none"
        }

    }


}