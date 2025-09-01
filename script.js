console.log("อั่นแหนะ แอบดู source code หรอ? 😜"); 

// Array เก็บข้อมูล Pal (ใช้แทน JSON)
let palData = [
  {
    id: 1,
    name: "Lamball #1",
    type: "Normal",
    level: 1,
    description: "Big Floof",
    image: "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_SheepBall_icon_normal.webp"
  },
  {
    id: 2,
    name: "Cattiva #2",
    type: "Normal",
    level: 1,
    description: "The Cat's Pajamas",
    image: "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_PinkCat_icon_normal.webp"
  },
  {
    id: 3,
    name: "Pengullet #3",
    type: "Normal",
    level: 1,
    description: "Plump & Juicy",
    image: "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_ChickenPal_icon_normal.webp"
  },
  {
    id: 4,
    name: "Lifmunk #4",
    type: "Leaf",
    level: 1,
    description: "Coward of the Steppe",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Carbunclo_icon_normal.png"
  },
  {
    id: 5,
    name: "Foxparks #5",
    type: "Fire",
    level: 1,
    description: "Revealer of Paths",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Kitsunebi_icon_normal.png"
  },
  {
    id: 6,
    name: "Fuack #6",
    type: "Water",
    level: 1,
    description: "Rowdy Wave Ripper",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BluePlatypus_icon_normal.png"
  },
  {
    id: 7,
    name: "Sparkit #7",
    type: "Electricity",
    level: 1,
    description: "Livewire Tabby",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_ElecCat_icon_normal.png"
  },
  {
    id: 8,
    name: "Tanzee #8",
    type: "Leaf",
    level: 1,
    description: "Dexterous Primate",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Monkey_icon_normal.png"
  },
  {
    id: 9,
    name: "Rooby #9",
    type: "Fire",
    level: 1,
    description: "Chief of the Herd",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FlameBambi_icon_normal.png"
  },
  {
    id: 10,
    name: "Rooby #10",
    type: ["Water", "Ice"],
    level: 1,
    description: "Ate Too Much",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Penguin_icon_normal.png"
  },
  {
    id: 11,
    name: "Penking #11",
    type: ["Water", "Ice"],
    level: 1,
    description: "Pioneer of the Frozen Sea",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_CaptainPenguin_icon_normal.png"
  },
  {
    id: 12,
    name: "Jolthog #12",
    type: "Electricity",
    level: 1,
    description: "Don't Touch!",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Hedgehog_icon_normal.png"
  },
  {
    id: 13,
    name: "Gumoss #13",
    type: ["Leaf", "Earth"],
    level: 1,
    description: "Suddenly Transformed",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_PlantSlime_icon_normal.png"
  },
  {
    id: 14,
    name: "Vixy #14",
    type: "Normal",
    level: 1,
    description: "Star of the Steppe",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_CuteFox_icon_normal.png"
  },
  {
    id: 15,
    name: "Hoocrates #15",
    type: "Dark",
    level: 1,
    description: "Purveyor of Wisdom",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_WizardOwl_icon_normal.png"
  },
  {
    id: 16,
    name: "Teafant #16",
    type: "Water",
    level: 1,
    description: "Adorable Watering Can",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Ganesha_icon_normal.png"
  },
  {
    id: 17,
    name: "Depresso #17",
    type: "Dark",
    level: 1,
    description: "Several Sleepless Nights Later",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_NegativeKoala_icon_normal.png"
  },
  {
    id: 18,
    name: "Cremis #18",
    type: "Normal",
    level: 1,
    description: "Darling Furball",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_WoolFox_icon_normal.png"
  },
  {
    id: 19,
    name: "Daedream #19",
    type: "Dark",
    level: 1,
    description: "Dream Eater",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_DreamDemon_icon_normal.png"
  },
  {
    id: 20,
    name: "Rushoar #20",
    type: "Earth",
    level: 1,
    description: "Woodland Ruffian",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Boar_icon_normal.png"
  },
  {
    id: 21,
    name: "Nox #21",
    type: "Dark",
    level: 1,
    description: "Dusken Aristocrat",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_NightFox_icon_normal.png"
  },
  {
    id: 22,
    name: "Fuddler #22",
    type: "Earth",
    level: 1,
    description: "Underground Explorer",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_CuteMole_icon_normal.png"
  },
  {
    id: 23,
    name: "Killamari #23",
    type: ["Dark","Water"],
    level: 1,
    description: "Emotionless",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_NegativeOctopus_icon_normal.png"
  },
  {
    id: 24,
    name: "Mau #24",
    type: "Dark",
    level: 1,
    description: "Noble Glimmer",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Bastet_icon_normal.png"
  },
  {
    id: 25,
    name: "Celaray #25",
    type: "Water",
    level: 1,
    description: "Soaring Skyfish",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FlyingManta_icon_normal.png"
  },
  {
    id: 26,
    name: "Direhowl #26",
    type: "Normal",
    level: 1,
    description: "Hunter of the Steppe",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Garm_icon_normal.png"
  },
  {
    id: 27,
    name: "Tocotoco #27",
    type: "Normal",
    level: 1,
    description: "Boom or Bust",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_ColorfulBird_icon_normal.png"
  },
  {
    id: 28,
    name: "Flopie #28",
    type: "Leaf",
    level: 1,
    description: "Star of the Flower Beds",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FlowerRabbit_icon_normal.png"
  },
  {
    id: 29,
    name: "Mozzarina #29",
    type: "Normal",
    level: 1,
    description: "Grade A Beef",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_CowPal_icon_normal.png"
  },
  {
    id: 30,
    name: "Bristla #30",
    type: "Leaf",
    level: 1,
    description: "Thorny Rose",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_LittleBriarRose_icon_normal.png"
  },
  {
    id: 31,
    name: "Gobfin #31",
    type: "Water",
    level: 1,
    description: "Sea Thug",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_SharkKid_icon_normal.png"
  },
  {
    id: 32,
    name: "Gobfin Ignis #32",
    type: "Fire",
    level: 1,
    description: "Volcano Thug",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_SharkKid_Fire_icon_normal.png"
  },
  {
    id: 33,
    name: "Hangyu #33",
    type: "Earth",
    level: 1,
    description: "Bringer of Luck",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_WindChimes_icon_normal.png"
  },
  {
    id: 34,
    name: "Mossanda #34",
    type: "Leaf",
    level: 1,
    description: "Guardian of the Forest",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_GrassPanda_icon_normal.png"
  },
  {
    id: 35,
    name: "Woolipop #35",
    type: "Normal",
    level: 1,
    description: "Giant Cotton Candy",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_SweetsSheep_icon_normal.png"
  },
  {
    id: 36,
    name: "Caprity #36",
    type: "Leaf",
    level: 1,
    description: "Walking Farm",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BerryGoat_icon_normal.png"
  },
  {
    id: 37,
    name: "Melpaca #37",
    type: "Normal",
    level: 1,
    description: "Pompous Shanks",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Alpaca_icon_normal.png"
  },
  {
    id: 38,
    name: "Nitewing #38",
    type: "Normal",
    level: 1,
    description: "Wings of the Firmament",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_HawkBird_icon_normal.png"
  },
  {
    id: 39,
    name: "Ribbuny #39",
    type: "Normal",
    level: 1,
    description: "Heart-Melting Smile",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_PinkRabbit_icon_normal.png"
  },
  {
    id: 40,
    name: "Incineram #40",
    type: ["Fire", "Dark"],
    level: 1,
    description: "Hyena of the Wild",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Baphomet_icon_normal.png"
  },
  {
    id: 41,
    name: "Cinnamoth #41",
    type: "Leaf",
    level: 1,
    description: "Butterfly Promenade",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_CuteButterfly_icon_normal.png"
  },
  {
    id: 42,
    name: "Arsox #42",
    type: "Fire",
    level: 1,
    description: "Blazing Brute",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FlameBuffalo_icon_normal.png"
  },
  {
    id: 43,
    name: "Dumud #43",
    type: ["Earth", "Water"],
    level: 1,
    description: "Perpetual Procrastinator",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_LazyCatfish_icon_normal.png"
  },
  {
    id: 44,
    name: "Cawgnito #44",
    type: "Dark",
    level: 1,
    description: "Shadow-Cloaked Schemer",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_DarkCrow_icon_normal.png"
  },
  {
    id: 45,
    name: "Leezpunk #45",
    type: "Dark",
    level: 1,
    description: "Self-Proclaimed Genius",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_LizardMan_icon_normal.png"
  },
  {
    id: 46,
    name: "Loupmoon #46",
    type: "Dark",
    level: 1,
    description: "Enraptured by Moonlight",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Werewolf_icon_normal.png"
  },
  {
    id: 47,
    name: "Galeclaw #47",
    type: "Normal",
    level: 1,
    description: "Proud Courier",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Eagle_icon_normal.png"
  },
  {
    id: 48,
    name: "Robinquill #48",
    type: "Leaf",
    level: 1,
    description: "Archer of the Forest",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_RobinHood_icon_normal.png"
  },
  {
    id: 49,
    name: "Gorirat #49",
    type: "Normal",
    level: 1,
    description: "Jungle Punk",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Gorilla_icon_normal.png"
  },
  {
    id: 50,
    name: "Beegarde #50",
    type: "Leaf",
    level: 1,
    description: "Guardian Commander",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_SoldierBee_icon_normal.png"
  },
  {
    id: 51,
    name: "Elizabee #51",
    type: "Leaf",
    level: 1,
    description: "Empress of the Hive",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_QueenBee_icon_normal.png"
  },
  {
    id: 52,
    name: "Grintale #52",
    type: "Normal",
    level: 1,
    description: "Marshmallow Body",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_NaughtyCat_icon_normal.png"
  },
  {
    id: 53,
    name: "Swee #53",
    type: "Ice",
    level: 1,
    description: "Curious Floof",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_MopBaby_icon_normal.png"
  },
  {
    id: 54,
    name: "Sweepa #54",
    type: "Ice",
    level: 1,
    description: "King of the Floof",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_MopKing_icon_normal.png"
  },
  {
    id: 55,
    name: "Chillet #55",
    type: ["Ice", "Dragon"],
    level: 1,
    description: "Dancer on the Steppe",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_WeaselDragon_icon_normal.png"
  },
  {
    id: 56,
    name: "Univolt #56",
    type: "Electricity",
    level: 1,
    description: "Swift Deity",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Kirin_icon_normal.png"
  },
  {
    id: 57,
    name: "Foxcicle #57",
    type: "Ice",
    level: 1,
    description: "Claws of Ice",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_IceFox_icon_normal.png"
  },
  {
    id: 58,
    name: "Pyrin #58",
    type: "Fire",
    level: 1,
    description: "Steed of Flames",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FireKirin_icon_normal.png"
  },
  {
    id: 59,
    name: "Reindrix #59",
    type: "Ice",
    level: 1,
    description: "Frosthorn Beast",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_IceDeer_icon_normal.png"
  },
  {
    id: 60,
    name: "Rayhound #60",
    type: "Electricity",
    level: 1,
    description: "Electro-Charged Zoomies",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_ThunderDog_icon_normal.png"
  },
];

// ฟังก์ชัน render การ์ด Pal
function renderPals() {
  const palList = document.getElementById("pal-list");
  if (!palList) return;

  palList.innerHTML = "";
  palData.forEach(pal => {
    const li = document.createElement("li");
    li.className = "pal-card";
    li.dataset.type = pal.type;
    li.innerHTML = `
      <img src="${pal.image}" alt="${pal.name}">
      <h2>${pal.name}</h2>
      <p>Type: ${pal.type}</p>
      <p>Level: ${pal.level}</p>
      <p>${pal.description}</p>
    `;
    palList.appendChild(li);
  });
}

// ฟังก์ชันเพิ่ม Pal ใหม่ (Admin)
function addPal(newPal) {
  palData.push(newPal);
  renderPals();
}

// ฟังก์ชันเพิ่ม Pal ใหม่ (Admin) พร้อมสร้าง id อัตโนมัติ
function setupAdmin() {
  const addBtn = document.getElementById("add-pal");
  if (!addBtn) return;

  addBtn.addEventListener("click", () => {
    const newPal = {
      id: palData.length ? palData[palData.length - 1].id + 1 : 1, // สร้าง id อัตโนมัติ
      name: document.getElementById("pal-name").value,
      type: document.getElementById("pal-type").value,
      level: Number(document.getElementById("pal-level").value),
      description: document.getElementById("pal-description").value,
      image: document.getElementById("pal-image").value || "https://placehold.co/100x100"
    };
    addPal(newPal);

    // เคลียร์ฟอร์ม
    document.getElementById("pal-name").value = "";
    document.getElementById("pal-type").value = "";
    document.getElementById("pal-level").value = "";
    document.getElementById("pal-description").value = "";
    document.getElementById("pal-image").value = "";
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

// เรียก render ตอนโหลดหน้า
renderPals();
