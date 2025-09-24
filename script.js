console.log("อั่นแหนะ แอบดู source code หรอ? 😜");

fetch("https://d-nattakitti.github.io/Palworlddb_db/pals.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    renderPals(data);
  })
  .catch(err => console.error("โหลด pals.json ไม่ได้:", err));


// 🟢 Map ของ Type → Icon
const typeIcons = {
  Dark: "images/icons/dark.png",
  Fire: "images/icons/fire.png",
  Water: "images/icons/water.png",
  Grass: "images/icons/grass.png",
  Electric: "images/icons/electric.png",
  Ice: "images/icons/ice.png",
  // เพิ่มไปเรื่อยๆตามที่มี
};


// ฟังก์ชัน render การ์ด Pal
function renderPals(palData) {
  const palList = document.getElementById("pal-list");
  if (!palList) return;

  palList.innerHTML = "";
  palData.forEach(pal => {
    const li = document.createElement("li");
    li.className = "pal-card";
    li.dataset.type = pal.type;

    const typeIcon = typeIcons[pal.type] || "images/icons/default.png";

    li.innerHTML = `
      <img src="${pal.image}" alt="${pal.name}">
      <h2>${pal.name}</h2>
      <div class="pal-type">
        <img src="${typeIcon}" alt="${pal.type} icon" class="type-icon">
        <span>${pal.type}</span>
      </div>
      <p>Level: ${pal.level ?? "N/A"}</p>
      <p>${pal.description}</p>
    `;
    palList.appendChild(li);
  });
}


// Search ใช้ทั้งหน้าเว็บหลักและ Admin
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();
    document.querySelectorAll(".pal-card").forEach(card => {
      const name = card.querySelector("h2").textContent.toLowerCase();
      card.style.display = name.includes(searchValue) ? "block" : "none";
    });
  });
}
