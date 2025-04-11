const productos = {
  cafes: [
    {
      nombre: "Espresso",
      precio: 2000,
      descripcion: "Café intenso",
      imagen: "https://s3.ppllstatics.com/diariovasco/www/multimedia/2024/11/13/espresso-RrCckvN0LEAFk54KAQQPcXM-1200x840@Diario%20Vasco.jpg",
    },
    {
      nombre: "Latte",
      precio: 3000,
      descripcion: "Con leche espumada",
      imagen: "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw2ca0aa66/images/recipe-Images/cafe-latte1-recipe.jpg?sw=1200&sh=1200&sm=fit",
    },
    {
      nombre: "Americano",
      precio: 2500,
      descripcion: "Shot de espresso con agua",
      imagen: "https://elsumario.com/wp-content/uploads/2022/09/americano.jpg",
    },
    {
      nombre: "Café helado",
      precio: 5000,
      descripcion: "Café con helado y galleta",
      imagen: "https://www.biotona.be/wp-content/uploads/hemp-protein-iced-coffee-shake-4_73f22e5f02a538d97bb46f9cf02e628a_2000.jpg",
    },      
  ],
  postres: [
    {
      nombre: "Cheesecake",
      precio: 3000,
      descripcion: "Tarta de queso",
      imagen: "https://www.recetasderechupete.com/wp-content/uploads/2018/03/Tarta-de-queso-Antonio.jpg",
    },
    {
      nombre: "Torta 3 leches",
      precio: 3500,
      descripcion: "Trozo torta 3 leches",
      imagen: "https://cdn0.recetasgratis.net/es/posts/0/1/9/torta_tres_leches_8910_600.webp",
    },
  ],
  bebidas: [
    {
      nombre: "Té helado",
      precio: 2000,
      descripcion: "Refrescante",
      imagen: "https://cdn0.uncomo.com/es/posts/5/8/3/como_preparar_te_helado_15385_600.webp",
    },
    {
      nombre: "Jugos naturales",
      precio: 3500,
      descripcion: "Jugo natural sabor: Naranja, piña, maracuyá",
      imagen: "https://www.cocinatis.com/archivos/202207/CTIS0042-receta-limonada_mobile_horizontal_full_width.jpg",
    },
    {
      nombre: "Limonada",
      precio: 3500,
      descripcion: "Limonada natural",
      imagen: "https://www.cocinatis.com/archivos/202207/CTIS0042-receta-limonada_mobile_horizontal_full_width.jpg",
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
          <p>$${prod.precio.toFixed(0)}</p>
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
    li.innerHTML = `${item.nombre} - $${item.precio.toFixed(0)} 
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
