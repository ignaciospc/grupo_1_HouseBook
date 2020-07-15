window.onload = () => {
    
    
    let deleteProduct = document.getElementById('deleteProduct');
    console.log("estas logueado como admin")
    console.log(deleteProduct);

    deleteProduct.onclick = (e) => {
        let product = document.querySelector(".titulo strong").innerHTML
        let confirmDelete = confirm(`Seguro que quieres borrar:  ${product}`)
        confirmDelete ? '' : e.preventDefault();
    }

}