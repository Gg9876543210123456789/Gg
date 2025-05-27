
const plantData = [
  {
    name: "Aloe vera",
    use: "Brûlures, hydratation de la peau",
    image: "images/aloe-vera.jpg",
  },
  {
    name: "Camomille",
    use: "Troubles digestifs, anxiété, insomnie",
    image: "images/camomille.jpg",
  },
  {
    name: "Menthe poivrée",
    use: "Maux de tête, nausées, digestion",
    image: "images/menthe.jpg",
  },
  {
    name: "Lavande",
    use: "Stress, insomnie, plaies légères",
    image: "images/lavande.jpg",
  },
  {
    name: "Gingembre",
    use: "Nausées, douleurs inflammatoires, digestion",
    image: "images/gingembre.jpg",
  },
];

let zoom = 1;

function renderPlants() {
  const grid = document.getElementById("plantGrid");
  const search = document.getElementById("searchInput").value.toLowerCase();
  grid.innerHTML = "";
  grid.style.transform = `scale(${zoom})`;
  plantData
    .filter(p => p.name.toLowerCase().includes(search) || p.use.toLowerCase().includes(search))
    .forEach(plant => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${plant.image}" alt="${plant.name}" onclick="showPreview('${plant.image}')">
        <h2>${plant.name}</h2>
        <p>${plant.use}</p>
      `;
      grid.appendChild(card);
    });
}

function zoomIn() {
  zoom = Math.min(zoom + 0.1, 2);
  renderPlants();
}

function zoomOut() {
  zoom = Math.max(zoom - 0.1, 0.5);
  renderPlants();
}

function showPreview(src) {
  const img = document.getElementById("previewImage");
  img.src = src;
  document.getElementById("preview").style.display = "flex";
}

function closePreview() {
  document.getElementById("preview").style.display = "none";
}

document.getElementById("searchInput").addEventListener("input", renderPlants);

window.onload = renderPlants;
