const nombres = [
    { nombre: "Alaska", tipo: "hembra", img: "img/husky1.jpg" },
    { nombre: "Shadow", tipo: "macho", img: "img/husky2.jpg" },
    { nombre: "Luna", tipo: "hembra", img: "img/husky3.jpg" },
    { nombre: "Blaze", tipo: "macho", img: "img/husky4.jpg" },
    { nombre: "Nova", tipo: "unisex", img: "img/husky5.jpg" }
  ];
  
  const lista = document.getElementById("nombre-lista");
  const botones = document.querySelectorAll(".filter-btn");
  
  function mostrarNombres(filtro) {
    lista.innerHTML = "";
    const filtrados = filtro === "todos" ? nombres : nombres.filter(n => n.tipo === filtro);
    filtrados.forEach(item => {
      const card = document.createElement("div");
      card.className = "bg-white rounded-lg shadow-sm overflow-hidden";
  
      card.innerHTML = `
        <img src="${item.img}" alt="${item.nombre}" class="w-full h-48 object-cover">
        <div class="p-3">
          <h3 class="text-lg font-semibold">🐶 ${item.nombre}</h3>
          <p class="text-sm text-gray-500 capitalize">${item.tipo}</p>
        </div>
      `;
      lista.appendChild(card);
    });
  }
  
  // Listeners
  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      botones.forEach(b => b.classList.remove("active-filter"));
      btn.classList.add("active-filter");
      mostrarNombres(btn.dataset.filter);
    });
  });
  
  // Mostrar todos al cargar
  mostrarNombres("todos");
  