const cargarCategorias = () => {
    const listaCategorias = document.getElementById('lista-categorias');

    // CORRECCIÓN: Quitamos la tilde a 'categorias' 
    categorias.forEach(categoria => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${categoria}</a>`;
        listaCategorias.appendChild(li); // [cite: 119]
    });
};

const cargarProductos = () => {
    // CORRECCIÓN: Usamos el ID exacto de tu HTML [cite: 37]
    const contenedor = document.getElementById('productos-destacados');

    productos.forEach(producto => {
        const article = document.createElement('article');
        // Usamos Template Strings para inyectar los datos [cite: 124, 125]
        article.innerHTML = `
            <img src="${producto.imagen}" width="150" alt="${producto.nombre}">
            <h3><strong>${producto.nombre}</strong></h3>
            <p>${producto.descripcion}</p>
            <p>Precio: <strong>$${producto.precio.toFixed(2)}</strong></p>
            <button type="button">Ver Detalles</button>
            <button type="button" onclick="agregarAlCarrito('${producto.nombre}')">Agregar al Carrito</button>
        `;
        contenedor.appendChild(article); // [cite: 123]
    });
};

// FUNCIÓN DE APOYO (Paso 3.B)
const agregarAlCarrito = (nombre) => {
    alert("Has seleccionado: " + nombre); // 
};

// FUNDAMENTAL: Ejecutar las funciones para que se vea en la página 
cargarCategorias();
cargarProductos();