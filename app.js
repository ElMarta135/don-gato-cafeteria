const productos = {
  cafes: [
    {
      nombre: "Espresso",
      precio: 2.000,
      descripcion: "Café intenso",
      imagen: "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw2ca0aa66/images/recipe-Images/cafe-latte1-recipe.jpg?sw=1200&sh=1200&sm=fit",
    },
    {
      nombre: "Latte",
      precio: 3.000,
      descripcion: "Con leche espumada",
      imagen: "https://www.cuisinart.com/recipes/beverages/cafe-latte-recipe.html",
    },
    {
      nombre: "Americano",
      precio: 3.000,
      descripcion: "Shot de espresso con aguaa",
      imagen: "https://www.cuisinart.com/recipes/beverages/cafe-latte-recipe.html",
    },
    {
      nombre: "Café helado",
      precio: 3.000,
      descripcion: "Café con scoop de helado",
      imagen: "https://www.cuisinart.com/recipes/beverages/cafe-latte-recipe.html",
      },
      
  ],
  postres: [
    {
      nombre: "Cheesecake",
      precio: 3.500,
      descripcion: "Tarta de queso",
      imagen: "https://via.placeholder.com/100",
    },
  ],
  bebidas: [
    {
      nombre: "Té helado",
      precio: 2.500,
      descripcion: "Refrescante",
      imagen: "https://via.placeholder.com/100",
    },
  ],
};

const carrito = [];
const totalSpan = document.getElementById("total");
const listaCarrito = document.getElementById("lista-carrito");

function cargarProductos() {
  Object.keys(productos).forEach((categoria) => {
    const contenedor = document.querySelector(`#${categoria} .productos`);
    productos[categoria].forEach((prod) => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
          <h4>${prod.nombre}</h4>
          <img src="${prod.imagen}" alt="${prod.nombre}" />
          <p>${prod.descripcion}</p>
          <p>$${prod.precio.toFixed(2)}</p>
          <button onclick='agregarAlCarrito(${JSON.stringify(
            prod
          )})'>Agregar</button>
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
