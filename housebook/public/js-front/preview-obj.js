window.onload = () => {
    let dad = document.querySelector(".toolup");// 1er input
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

                Hola soy un preview del ${element.getAttribute("idElement")}
                
                </div>`  //crear view de libro (linea 56)
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

    
    let elements = document.querySelectorAll(".hasToolUp") //input-hover
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
    let books = string
}