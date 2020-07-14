window.onload = () => {
    let dad = document.querySelector(".toolup"),
        books;
    let atribute = {
        offsets: [20, -30],
        fadeSpeed: 450,
        stickSize : [],
        fadeIn: (time) => { //https://stackoverflow.com/questions/23244338/pure-javascript-fade-in-function
            dad.style.opacity = 0;

            let last = +new Date();
            let tick = function () {
                dad.style.opacity = +dad.style.opacity + (new Date() - last) / time;
                last = +new Date();

                if (dad.style.opacity < 1) {
                    setTimeout(tick, 40);
                }

            };
            // window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 400)
            tick();
        },
        coords: (event) => { // https://www.w3schools.com/jsref/event_onmousemove.asp
            let x = +event.x + atribute.offsets[0] + event.view.scrollX,
                y = +event.y + atribute.offsets[1] + event.view.scrollY;

            let toolupX = atribute.stickSize[0],
                toolupY = atribute.stickSize[1];

                x = x + toolupX +15  > window.innerWidth  + event.view.scrollX ? x - toolupX - (atribute.offsets[0]*2)                  : x //si se pasa de windows mostralo a la izquierda, si no dejalo como ésta
                y = y + toolupY +10  > window.innerHeight + event.view.scrollY ? window.innerHeight + event.view.scrollY - toolupY -10  : y //si se pasa de abajo, pegalo al borde

                //console.log(`y = ${y} ; toolupY = ${toolupY} ; event.view.scrollY = ${event.view.scrollY} ; window.innerHeight = ${window.innerHeight} ; EC = ${window.innerHeight + event.view.scrollY - y - 10}`)
            dad.style.left = x + "px";
            dad.style.top = y + "px";
        },
        init: (targetId, element) => { //acciones al pasar el mouse
            element.onmouseover = (e) => {
                atribute.addHtml(targetId, element).style.display = "block";//hijo ponerlo con block
                //dad.style.display = "block"                                 //(no es necesario)
                atribute.fadeIn(atribute.fadeSpeed);
            }
            element.onmouseout = () => { 
                atribute.addHtml(targetId, element).style.display = "none" 
                //dad.style.display = "none"                                 //(no es necesario)
            }
            element.onmousemove = (e) => { atribute.coords(e) }
        },
        addHtml: (targetId, element) => {
            
            let stick = dad.querySelector("#" + targetId) // https://stackoverflow.com/questions/5783969/how-to-get-child-element-by-id-in-javascript/5784028
            if (!stick) { //de existir true, de no existir false | de existir devolver el objeto, de no existir crearlo y devolverlo.
                dad.innerHTML += `
                <div class = popUp id="${targetId}" style ="display: none;">

                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>preview</title>
    <link rel="stylesheet" href="/css/preview-products.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
</head>
<body>


<div class="container-preview">
    <div class="titulo-preview">
        ACA VA EL TITULO DEL LIBRO BIEN BONITO
    </div>
    <div class="img-portada-preview"><img src=/images/libros/libro-prueba.jpg alt="img-libro"></div>

    <div class="info-preview">
        <div class="datos"> <label for="">Autor :</label><span>Vargallosa</span></div>
        <div class="datos"> <label for="">valoracion :</label><span><i class="fas fa-star"></i>5</span></div>
        <div class="datos"> <label for="">Categoria :</label><span>Fiction</span></div>
        <div class="datos"> <label for="">Precio :</label><span>$1550</span></div>
        <div class="datos"> <label for="">Idioma :</label><span>Spanish</span></div>
        <div class="datos"> <label for="">Formato :</label><span>Ambos</span></div>
        
        
        
        
        
    </div>
    <div class="descripcion-preview">
        <p class="descripcion-libro"> <span>Descripcion : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptate ea aspernatur possimus natus nihil labore sed, dolorum facilis aut unde. Commodi esse dolores eligendi laborum! Laudantium architecto necessitatibus praesentium blanditiis. Fuga fugit nisi et nobis quas vel, quod illum</p>
    </div>

</div>

</body>
</html>
                
                </div>` 
                stick = dad.querySelector("#" + targetId) //lo actualizo para que exista.
                
                let stickX =  getComputedStyle(stick).width,
                stickY = getComputedStyle(stick).height;

                stickX = stringToNumber(stickX);
                stickY = stringToNumber(stickY);
                atribute.stickSize = [stickX, stickY]; //coloco en una variable el tamaño del popup (se usara en coordenadas)                
            }
            return stick
        }
    }
    let elements = document.querySelectorAll(".hasToolUp") //2nd imput
    for (let element of elements) {
        let targetId = "stick" + element.getAttribute("idElement")
        atribute.init(targetId, element)
        //element.onmousemove = (e) => console.log(e)
    }

}

function stringToNumber (string) { // https://jsperf.com/best-of-string-to-number-conversion/2 editada
    let result = 0,
        converted;
    for (let i = 0 ;; i++) {
        converted = Number( string[i]);
        if(isNaN(converted)){
            break;
        }
        result = result*10 + converted;
    }
    return result;
}

function productsFunc (string){
     books = string
}