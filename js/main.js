const ingreso = document.querySelector('.navbar-email');
const menuEscitorio = document.querySelector('.desktop-menu');
const menuComprasCar = document.querySelector('.navbar-shopping-cart');
const hambmenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const tarjContenedor = document.querySelector('.cards-container');

ingreso.addEventListener('click', toggleDesktopMenu);
hambmenu.addEventListener('click', toggleMobileMenu);
menuComprasCar.addEventListener('click', toggleCarAside);

function toggleDesktopMenu(){
    const isasideOpen = !aside.classList.contains('inactive');

    if (isasideOpen){
        
        aside.classList.toggle('inactive');
    }
    menuEscitorio.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isasideOpen = !aside.classList.contains('inactive');

    if (isasideOpen){
        
        aside.classList.toggle('inactive');
    }
    menuMobile.classList.toggle('inactive');
    //console.log('desaparece');
}

function toggleCarAside(){
    const ismenuMobileOpen = !menuMobile.classList.contains('inactive');
    const ismenuEscritorioOpen = !menuEscitorio.classList.contains('inactive');
    
    if (ismenuMobileOpen){
        
        menuMobile.classList.add('inactive');
    }
    //aside.classList.toggle('inactive');
    //console.log('desaparece');
    if (ismenuEscritorioOpen){
        
        menuEscitorio.classList.add('inactive');
    }
    aside.classList.toggle('inactive');

}


const listaProductos = [];

listaProductos.push({
    nombre: 'Bicicleta',
    precio: 120,
    imagen: 'img/bicla.jpg'
})
listaProductos.push({
    nombre: 'Bicicleta',
    precio: 120,
    imagen: 'img/bicla.jpg'
})
listaProductos.push({
    nombre: 'Bicicleta',
    precio: 120,
    imagen: 'img/bicla.jpg'
})
listaProductos.push({
    nombre: 'Bicicleta',
    precio: 120,
    imagen: 'img/bicla.jpg'
})
listaProductos.push({
    nombre: 'Bicicleta',
    precio: 120,
    imagen: 'img/bicla.jpg'
})
listaProductos.push({
    nombre: 'Bicicleta',
    precio: 120,
    imagen: 'img/bicla.jpg'
})

function listaProdTerm(arr){
    for (producto of listaProductos){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const imagenProd = document.createElement('img');
        imagenProd.classList.add('product-image');
        imagenProd.setAttribute('src', producto.imagen);
    
        const infoProducto = document.createElement('div');
        infoProducto.classList.add('product-info');
    
        const divInfoProd = document.createElement('div');
    
        const precioProducto = document.createElement('p');
        precioProducto.innerText = '$' + producto.precio;
    
        const nombreProducto = document.createElement('p');
        nombreProducto.innerText = producto.nombre;
    
        divInfoProd.appendChild(precioProducto);
        divInfoProd.appendChild(nombreProducto);
    
        const figuraProdInf = document.createElement('figure');
        const imagenProdTarj = document.createElement('img');
        imagenProdTarj.setAttribute('src', 'icons/bt_add_to_cart.svg');
    
        figuraProdInf.appendChild(imagenProdTarj);
    
        infoProducto.appendChild(divInfoProd);
        infoProducto.appendChild(figuraProdInf);
    
        productCard.appendChild(imagenProd);
        productCard.appendChild(infoProducto);
    
        tarjContenedor.appendChild(productCard);
    
    }
}

listaProdTerm(listaProductos);