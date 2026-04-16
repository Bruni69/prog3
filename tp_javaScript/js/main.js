const cargarCategorias = () => {
    const listaCategorias = document.getElementById('lista-categorias');

    
    categorias.forEach(categoria => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${categoria}</a>`;
        listaCategorias.appendChild(li); // [cite: 119]
    });
};

const cargarProductos = () => {
    
    const contenedor = document.getElementById('productos-destacados');

    productos.forEach(producto => {
        const article = document.createElement('article');
        
        article.innerHTML = `
            <img src="${producto.imagen}" width="150" alt="${producto.nombre}">
            <h3><strong>${producto.nombre}</strong></h3>
            <p>${producto.descripcion}</p>
            <p>Precio: <strong>$${producto.precio.toFixed(2)}</strong></p>
            <button type="button">Ver Detalles</button>
            <button type="button" onclick="agregarAlCarrito('${producto.nombre}')">Agregar al Carrito</button>
        `;
        contenedor.appendChild(article); 
    });
};


const agregarAlCarrito = (nombre) => {
    alert("Has seleccionado: " + nombre); // 
};

 
cargarCategorias();
cargarProductos();