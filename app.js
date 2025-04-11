const productos = {
    cafes: [
      { nombre: "Espresso", precio: 2000, descripcion: "Café intenso", imagen: "https://via.placeholder.com/100" },
      { nombre: "Latte", precio: 3000, descripcion: "Con leche espumada", imagen: "https://via.placeholder.com/100" }
    ],
    postres: [
      { nombre: "Cheesecake", precio: 3500, descripcion: "Tarta de queso", imagen: "https://via.placeholder.com/100" }
    ],
    bebidas: [
      { nombre: "Té helado", precio: 2500, descripcion: "Refrescante", imagen: "https://via.placeholder.com/100" }
    ]
  };
  
  const carrito = [];
  const totalSpan = document.getElementById("total");
  const listaCarrito = document.getElementById("lista-carrito");
  
  function cargarProductos() {
    Object.keys(productos).forEach(categoria => {
      const contenedor = document.querySelector(`#${categoria} .productos`);
      productos[categoria].forEach(prod => {
        const div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `
          <h4>${prod.nombre}</h4>
          <img src="${prod.imagen}" alt="${prod.nombre}" />
          <p>${prod.descripcion}</p>
          <p>$${prod.precio.toFixed(2)}</p>
          <button onclick='agregarAlCarrito(${JSON.stringify(prod)})'>Agregar</button>
        `;
        contenedor.appendChild(div);
      });
    });
  }
  
  function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
  }
  
  function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;
    carrito.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `${item.nombre} - $${item.precio.toFixed(2)} 
        <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
      listaCarrito.appendChild(li);
      total += item.precio;
    });
    totalSpan.textContent = total.toFixed(2);
  }
  
  function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
  }
  
  document.getElementById("form-pago").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("confirmacion").classList.remove("oculto");
    carrito.length = 0;
    actualizarCarrito();
  });
  
  cargarProductos();
  