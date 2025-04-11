const productos = {
  cafes: [
    {
      nombre: "Espresso",
      precio: 2000,
      descripcion: "Café intenso",
      imagen: "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw2ca0aa66/https://blog.scoolinary.com/la-historia-del-cafe-expresso-un-viaje-por-el-mundo/recipe-Images/cafe-latte1-recipe.jpg?sw=1200&sh=1200&sm=fit",
    },
    {
      nombre: "Latte",
      precio: 3000,
      descripcion: "Con leche espumada",
      imagen: "https://www.cuisinart.com/recipes/beverages/cafe-latte-recipe.html",
    },
    {
      nombre: "Americano",
      precio: 2500,
      descripcion: "Shot de espresso con aguaa",
      imagen: "https://elsumario.com/cual-es-el-origen-del-cafe-americano/",
    },
    {
      nombre: "Café helado",
      precio: 5000,
      descripcion: "Café con helado y galleta",
      imagen: "https://www.biotona.be/es/blog/recetas/cafe-helado-proteico-con-canamo-en-polvo/",
    },      
  ],
  postres: [
    {
      nombre: "Cheesecake",
      precio: 3000,
      descripcion: "Tarta de queso",
      imagen: "https://www.abc.es/recetasderechupete/pastel-de-queso-o-cheesecake-malamadre/21157/",
    },
    {
      nombre: "Torta 3 leches",
      precio: 3500,
      descripcion: "Trozo torta 3 leches",
      imagen: "https://www.recetasgratis.net/receta-de-torta-tres-leches-8910.html",
    },
  ],
  bebidas: [
    {
      nombre: "Té helado",
      precio: 2000,
      descripcion: "Refrescante",
      imagen: "https://www.mundodeportivo.com/uncomo/comida/receta/como-preparar-te-helado-15385.html",
    },
    {
      nombre: "Jugos naturales",
      precio: 3500,
      descripcion: "Jugo natural sabor: Naranja, piña, maracuyá",
      imagen: "https://www.alimentossas.com/blog/bebidas/jugos-naturales",
    },
    {
      nombre: "Limonada",
      precio: 3500,
      descripcion: "Agua saborizada con frutas",
      imagen: "https://www.cocinatis.com/receta/limonada.html",
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
