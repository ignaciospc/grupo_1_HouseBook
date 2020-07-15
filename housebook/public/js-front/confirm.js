window.onload = () => {
    
    
    let deleteProduct = document.getElementById('deleteProduct');
    console.log(deleteProduct);

    deleteProduct.onclick = (e) => {
        let product = document.querySelector(".titulo strong").innerHTML
        let confirmDelete = confirm(`Seguro que quieres borrar:  ${product}`)
        confirmDelete ? '' : e.preventDefault();
    }

}