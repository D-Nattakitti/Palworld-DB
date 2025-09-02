console.log("อั่นแหนะ แอบดู source code หรอ? 😜"); 

// Array เก็บข้อมูล Pal (ใช้แทน JSON)
let palData = [
  {
    id: -11,
    name: "Blue Slime #-11",
    type: "Water",
    level: 1,
    description: "",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_YakushimaMonster001_Blue_icon_normal.png"
  },
  {
    id: -10,
    name: "Cave Bat #-10",
    type: "Normal",
    level: 1,
    description: "",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_YakushimaMonster003_icon_normal.png"
  },
  {
    id: -9,
    name: "Demon Eye #-9",
    type: "Dark",
    level: 1,
    description: "",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_YakushimaBoss001_Small_icon_normal.png"
  },
  {
    id: -8,
    name: "Enchanted Sword #-8",
    type: "Normal",
    level: 1,
    description: "",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_YakushimaMonster002_icon_normal.png"
  },
  {
    id: -7,
    name: "Eye of Cthulhu #-7",
    type: "Dark",
    level: 1,
    description: "",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_YakushimaBoss001_icon_normal.png"
  },
  {
    id: -6,
    name: "Green Slime #-6",
    type: "Leaf",
    level: 1,
    description: "",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_YakushimaMonster001_icon_normal.png"
  },
  {
    id: -5,
    name: "Illuminant Bat #-5",
    type: "Normal",
    level: 1,
    description: "",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_YakushimaMonster003_Purple_icon_normal.png"
  },
    {
    id: -4,
    name: "Illuminant Slime #-4",
    type: "Normal",
    level: 1,
    description: "",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_YakushimaMonster001_Pink_icon_normal.png"
  },
  {
    id: -3,
    name: "Purple Slime #-2",
    type: "Dark",
    level: 1,
    description: "",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_YakushimaMonster001_Purple_icon_normal.png"
  },
  {
    id: -1,
    name: "Rainbow Slime #-1",
    type: "Normal",
    level: 1,
    description: "",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_YakushimaMonster001_Rainbow_icon_normal.png"
  },
  {
    id: 0,
    name: "RRed Slime #0",
    type: "Fire",
    level: 1,
    description: "",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_YakushimaMonster001_Red_icon_normal.png"
  },
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
    id: 5_1,
    name: "Foxparks Cryst #5B",
    type: "Ice",
    level: 1,
    description: "Icy Blossom Voyager",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Kitsunebi_Ice_icon_normal.png"
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
    id: 6_1,
    name: "Fuack Ignis #6B",
    type: ["Water", "Fire"],
    level: 1,
    description: "Runaway Wave Rider",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BluePlatypus_Fire_icon_normal.png"
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
    name: "Rooby #10B",
    type: ["Water", "Ice"],
    level: 1,
    description: "Ate Too Much",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Penguin_icon_normal.png"
  },
    {
    id: 10_1,
    name: "Pengullet Lux #10",
    type: ["Water", "Electricity"],
    level: 1,
    description: "Had One Too Many",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Penguin_Electric_icon_normal.png"
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
    id: 11_1,
    name: "Penking Lux #11B",
    type: ["Water", "Electricity"],
    level: 1,
    description: "Pioneer of the Black",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_CaptainPenguin_Black_icon_normal.png"
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
    id: 12_1,
    name: "Jolthog Cryst #12B",
    type: "Ice",
    level: 1,
    description: "Watch Your Feet!",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Hedgehog_Ice_icon_normal.png"
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
    id: 23_1,
    name: "Killamari Primo #23B",
    type: ["Normal","Water"],
    level: 1,
    description: "Devoid of Emotion",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_NegativeOctopus_Neutral_icon_normal.png"
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
    id: 24_1,
    name: "Mau Cryst #24B",
    type: "Ice",
    level: 1,
    description: "Serene Glimmer",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Bastet_Ice_icon_normal.png"
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
    id: 25_1,
    name: "Celaray Lux #25B",
    type: ["Water", "Electricity"],
    level: 1,
    description: "Sky-Swimming Fish",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FlyingManta_Thunder_icon_normal.png"
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
    id: 31_1,
    name: "Gobfin Ignis #31B",
    type: "Fire",
    level: 1,
    description: "Volcano Thug",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_SharkKid_Fire_icon_normal.png"
  },
  {
    id: 32,
    name: "Hangyu #32",
    type: "Earth",
    level: 1,
    description: "Bringer of Luck",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_WindChimes_icon_normal.png"
  },
  {
    id: 32_1,
    name: "Hangyu Cryst #32B",
    type: "Ice",
    level: 1,
    description: "Glacial Harbinger",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_WindChimes_Ice_icon_normal.png"
  },
  {
    id: 33,
    name: "Mossanda #33",
    type: "Leaf",
    level: 1,
    description: "Guardian of the Forest",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_GrassPanda_icon_normal.png"
  },
  {
    id: 33_1,
    name: "Mossanda Lux #33B",
    type: "Electricity",
    level: 1,
    description: "Inheritor of the Storm",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_GrassPanda_Electric_icon_normal.png"
  },
  {
    id: 34,
    name: "Woolipop #34",
    type: "Normal",
    level: 1,
    description: "Giant Cotton Candy",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_SweetsSheep_icon_normal.png"
  },
  {
    id: 35,
    name: "Caprity #35",
    type: "Leaf",
    level: 1,
    description: "Walking Farm",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BerryGoat_icon_normal.png"
  },
  {
    id: 35_1,
    name: "Caprity Noct #35B",
    type: "Dark",
    level: 1,
    description: "Tainted Farm",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BerryGoat_Dark_icon_normal.png"
  },
  {
    id: 36,
    name: "Melpaca #36",
    type: "Normal",
    level: 1,
    description: "Pompous Shanks",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Alpaca_icon_normal.png"
  },
  {
    id: 37,
    name: "Eikthyrdeer #37",
    type: "Normal",
    level: 1,
    description: "Protector of the Herd",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Deer_icon_normal.png"
  },
  {
    id: 37_1,
    name: "Eikthyrdeer Terra #37B",
    type: "Earth",
    level: 1,
    description: "Antler of Gold",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Deer_Ground_icon_normal.png"
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
    id: 39_1,
    name: "Ribbuny Botan #39B",
    type: "Leaf",
    level: 1,
    description: "Sparkling Smile",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_PinkRabbit_Grass_icon_normal.png"
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
    id: 40_1,
    name: "Incineram Noct #40B",
    type: "Dark",
    level: 1,
    description: "Hyena of the Darkest Night",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Baphomet_Dark_icon_normal.png"
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
    id: 43_1,
    name: "Dumud Gild #43B",
    type: ["Earth", "Water"],
    level: 1,
    description: "Piece of Cake",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_LazyCatfish_Gold_icon_normal.png"
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
    id: 45_1,
    name: "Leezpunk Ignis #45B",
    type: "Fire",
    level: 1,
    description: "Self-Proclaimed Fashionista",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_LizardMan_Fire_icon_normal.png"
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
    id: 46_1,
    name: "Loupmoon Cryst #46B",
    type: "Ice",
    level: 1,
    description: "Enraptured by the Frozen Moonlight",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Werewolf_Ice_icon_normal.png"
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
    id: 48_1,
    name: "Robinquill Terra #48B",
    type: ["Leaf", "Earth"],
    level: 1,
    description: "Archer of the Forest",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_RobinHood_Ground_icon_normal.png"
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
    id: 49_1,
    name: "Gorirat Terra #49B",
    type: "Earth",
    level: 1,
    description: "Up for a Brawl",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Gorilla_Ground_icon_normal.png"
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
    id: 55_1,
    name: "Chillet Ignis #55B",
    type: ["Fire", "Dragon"],
    level: 1,
    description: "Cherry Blossom Dancer",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_WeaselDragon_Fire_icon_normal.png"
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
    id: 58,
    name: "Pyrin Noct #58",
    type: ["Fire", "Dark"],
    level: 1,
    description: "Steed of Darkness",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FireKirin_Dark_icon_normal.png"
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
  {
    id: 61,
    name: "Kitsun #61",
    type: "Fire",
    level: 1,
    description: "Guardian of the Azure Flame",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_AmaterasuWolf_icon_normal.png"
  },
  {
    id: 61_1,
    name: "Kitsun Noct #61B",
    type: "Dark",
    level: 1,
    description: "Guardian of the Dark Flame",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_AmaterasuWolf_Dark_icon_normal.png"
  },
  {
    id: 62,
    name: "Dazzi #62",
    type: "Electricity",
    level: 1,
    description: "Born of the Storm",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_RaijinDaughter_icon_normal.png"
  },
  {
    id: 62_1,
    name: "Dazzi Noct #62B",
    type: ["Dark", "Electricity"],
    level: 1,
    description: "Born of the Thunderclouds",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_RaijinDaughter_Water_icon_normal.png"
  },
  {
    id: 63,
    name: "Lunaris #63",
    type: "Normal",
    level: 1,
    description: "Extraterrestrial",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Mutant_icon_normal.png"
  },
  {
    id: 64,
    name: "Dinossom #64",
    type: ["Leaf", "Dragon"],
    level: 1,
    description: "Guardian of Blossoming Gardens",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FlowerDinosaur_icon_normal.png"
  },
  {
    id: 64_1,
    name: "Dinossom Lux #64B",
    type: ["Electricity", "Dragon"],
    level: 1,
    description: "Guardian of Lightning",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FlowerDinosaur_Electric_icon_normal.png"
  },
  {
    id: 65,
    name: "Surfent #65",
    type: "Water",
    level: 1,
    description: "The Ocean's Wrath",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Serpent_icon_normal.png"
  },
  {
    id: 65_1,
    name: "Surfent Terra #65B",
    type: "Earth",
    level: 1,
    description: "The Desert's Wrath",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Serpent_Ground_icon_normal.png"
  },
  {
    id: 66,
    name: "Maraith #66",
    type: "Dark",
    level: 1,
    description: "Messenger of Death",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_GhostBeast_icon_normal.png"
  },
  {
    id: 67,
    name: "Digtoise #67",
    type: "Earth",
    level: 1,
    description: "Drilling Machine",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_DrillGame_icon_normal.png"
  },
  {
    id: 68,
    name: "Tombat #68",
    type: "Dark",
    level: 1,
    description: "Trickster",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_CatBat_icon_normal.png"
  },
  {
    id: 69,
    name: "Lovander #69",
    type: "Normal",
    level: 1,
    description: "Pal on the Prowl",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_PinkLizard_icon_normal.png"
  },
  {
    id: 70,
    name: "Flambelle #70",
    type: "Fire",
    level: 1,
    description: "Molten Daughter",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_LavaGirl_icon_normal.png"
  },
  {
    id: 71,
    name: "Vanwyrm #71",
    type: ["Fire", "Dark"],
    level: 1,
    description: "Aerial Marauder",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BirdDragon_icon_normal.png"
  },
  {
    id: 71_1,
    name: "Vanwyrm Cryst #71B",
    type: ["Ice", "Dark"],
    level: 1,
    description: "Marauder of Frozen Skies",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BirdDragon_Ice_icon_normal.png"
  },
  {
    id: 72,
    name: "Bushi #72",
    type: "Fire",
    level: 1,
    description: "Vagrant Warrior",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Ronin_icon_normal.png"
  },
  {
    id: 72_1,
    name: "Bushi Noct #72B",
    type: ["Fire", "Dark"],
    level: 1,
    description: "Samurai of Darkness",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Ronin_Dark_icon_normal.png"
  },
  {
    id: 73,
    name: "Beakon #73",
    type: "Electricity",
    level: 1,
    description: "Wings of Thunder",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_ThunderBird_icon_normal.png"
  },
  {
    id: 74,
    name: "Ragnahawk #74",
    type: "Fire",
    level: 1,
    description: "Wings of Inferno",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_RedArmorBird_icon_normal.png"
  },
  {
    id: 75,
    name: "Katress #75",
    type: "Dark",
    level: 1,
    description: "Phantasmal Feline",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_CatMage_icon_normal.png"
  },
  {
    id: 75_1,
    name: "Katress Ignis #75B",
    type: ["Dark", "Fire"],
    level: 1,
    description: "Fire Licked Feline",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_CatMage_Fire_icon_normal.png"
  },
  {
    id: 76,
    name: "Wixen #76",
    type: "Fire",
    level: 1,
    description: "Fire Licked Furball",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FoxMage_icon_normal.png"
  },
  {
    id: 76_1,
    name: "Wixen Noct #76B",
    type: ["Fire", "Dark"],
    level: 1,
    description: "Phantasmal Furball",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FoxMage_Dark_icon_normal.png"
  },
  {
    id: 77,
    name: "Verdash #77",
    type: "Leaf",
    level: 1,
    description: "Gale of the Forest",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_GrassRabbitMan_icon_normal.png"
  },
  {
    id: 78,
    name: "Vaelet #78",
    type: "Leaf",
    level: 1,
    description: "Voice of the Violets",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_VioletFairy_icon_normal.png"
  },
  {
    id: 79,
    name: "Sibelyx #79",
    type: "Ice",
    level: 1,
    description: "Pallid Lady",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_WhiteMoth_icon_normal.png"
  },
  {
    id: 80,
    name: "Elphidran #80",
    type: "Dragon",
    level: 1,
    description: "Gentle Sky Dragon",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FairyDragon_icon_normal.png"
  },
  {
    id: 80_1,
    name: "Elphidran Aqua #80B",
    type: ["Dragon", "Water"], 
    level: 1,
    description: "Beast of the Tides",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FairyDragon_Water_icon_normal.png"
  },
  {
    id: 81,
    name: "Kelpsea #81",
    type: "Water",
    level: 1,
    description: "Child of the Deep",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Kelpie_icon_normal.png"
  },
  {
    id: 81_1,
    name: "Kelpsea Ignis #81B",
    type: "Fire",
    level: 1,
    description: "Child of Molten Depths",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Kelpie_Fire_icon_normal.png"
  },
  {
    id: 82,
    name: "Azurobe #82",
    type: ["Water", "Dragon"],
    level: 1,
    description: "Lady of the Lake",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BlueDragon_icon_normal.png"
  },
  {
    id: 82_1,
    name: "Azurobe Cryst #82B",
    type: ["Ice", "Dragon"],
    level: 1,
    description: "Lady of the Frozen Lake",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BlueDragon_Ice_icon_normal.png"
  },
  {
    id: 83,
    name: "Cryolinx #83",
    type: "Ice",
    level: 1,
    description: "Predator of Snowy Peaks",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_WhiteTiger_icon_normal.png"
  },
  {
    id: 83_1,
    name: "Cryolinx Terra #83B",
    type: "Earth",
    level: 1,
    description: "Predator of the Earth",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_WhiteTiger_Ground_icon_normal.png"
  },
  {
    id: 84,
    name: "Blazehowl #84",
    type: "Fire",
    level: 1,
    description: "Crimson Goliath",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Manticore_icon_normal.png"
  },
  {
    id: 84_1,
    name: "Blazehowl Noct #84B",
    type: ["Fire", "Dark"],
    level: 1,
    description: "Inferno Goliath",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Manticore_Dark_icon_normal.png"
  },
  {
    id: 85,
    name: "Relaxaurus #85",
    type: ["Dragon", "Water"],
    level: 1,
    description: "Gluttonous Dragon",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_LazyDragon_icon_normal.png"
  },
  {
    id: 85_1,
    name: "Relaxaurus Lux #85B",
    type: ["Dragon", "Electricity"],
    level: 1,
    description: "Gluttonous Thunder Dragon",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_LazyDragon_Electric_icon_normal.png"
  },
  {
    id: 86,
    name: "Broncherry #86",
    type: "Leaf",
    level: 1,
    description: "Winds of Spring",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_SakuraSaurus_icon_normal.png"
  },
  {
    id: 86_1,
    name: "Broncherry Aqua #86B",
    type: ["Leaf", "Water"],
    level: 1,
    description: "Waves of Summer",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_SakuraSaurus_Water_icon_normal.png"
  },
  {
    id: 87,
    name: "Petallia #87",
    type: "Leaf",
    level: 1,
    description: "Lady of the Flower Garden",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FlowerDoll_icon_normal.png"
  },
  {
    id: 88,
    name: "Reptyro #88",
    type: ["Fire", "Earth"],
    level: 1,
    description: "Lava-Devouring Juggernaut",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_VolcanicMonster_icon_normal.png"
  },
  {
    id: 88_1,
    name: "Reptyro Cryst #88B",
    type: ["Ice", "Earth"],
    level: 1,
    description: "Ice-Breaking Juggernaut",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_VolcanicMonster_Ice_icon_normal.png"
  },
  {
    id: 89,
    name: "Kingpaca #89",
    type: "Normal",
    level: 1,
    description: "Supreme Fluff Commander",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_KingAlpaca_icon_normal.png"
  },
  {
    id: 89_1,
    name: "Kingpaca Cryst #89B",
    type: "Ice",
    level: 1,
    description: "Azure Fluff Commander",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_KingAlpaca_Ice_icon_normal.png"
  },
  {
    id: 90,
    name: "Mammorest #90",
    type: ["Leaf", "Earth"],
    level: 1,
    description: "King of the Forest",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_GrassMammoth_icon_normal.png"
  },
  {
    id: 90_1,
    name: "Mammorest Cryst #90B",
    type: ["Ice", "Earth"],
    level: 1,
    description: "Frozen King",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_GrassMammoth_Ice_icon_normal.png"
  },
  {
    id: 91,
    name: "Wumpo #91",
    type: "Ice",
    level: 1,
    description: "Guardian of the Snowy Mountain",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Yeti_icon_normal.png"
  },
  {
    id: 91_1,
    name: "Wumpo Botan #91B",
    type: "Leaf",
    level: 1,
    description: "Guardian of the Grassy Fields",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Yeti_Grass_icon_normal.png"
  },
  {
    id: 92,
    name: "Warsect #92",
    type: ["Earth", "Leaf"],
    level: 1,
    description: "Unyielding Colossus",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_HerculesBeetle_icon_normal.png"
  },
  {
    id: 92,
    name: "Warsect Terra #92",
    type: "Earth",
    level: 1,
    description: "Golden Armor Warrior",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_HerculesBeetle_Ground_icon_normal.png"
  },
  {
    id: 93,
    name: "Fenglope #93",
    type: "Normal",
    level: 1,
    description: "Drifting Cloud",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FengyunDeeper_icon_normal.png"
  },
  {
    id: 93_1,
    name: "Fenglope Lux #93B",
    type: "Electricity",
    level: 1,
    description: "Drifting Thundercloud",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FengyunDeeper_Electric_icon_norma.png"
  },
  {
    id: 94,
    name: "Felbat #94",
    type: "Dark",
    level: 1,
    description: "Gloom-Shrouded Bloodsucker",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_CatVampire_icon_normal.png"
  },
  {
    id: 95,
    name: "Quivern #95",
    type: "Dragon",
    level: 1,
    description: "Snow-White Soarer",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_SkyDragon_icon_normal.png"
  },
  {
    id: 95_1,
    name: "Quivern Botan #95B",
    type: ["Dragon", "Leaf"],
    level: 1,
    description: "Evergreen Flyer",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_SkyDragon_Grass_icon_normal.png"
  },
  {
    id: 96,
    name: "Blazamut #96",
    type: "Fire",
    level: 1,
    description: "Cursed Tyrant",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_KingBahamut_icon_normal.png"
  },
  {
    id: 96_1,
    name: "Blazamut Ryu #96B",
    type: ["Dragon","Fire"],
    level: 1,
    description: "Incarnation of the Eternal Flame",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_KingBahamut_Dragon_icon_normal.png"
  },
  {
    id: 97,
    name: "Helzephyr #97",
    type: "Dark",
    level: 1,
    description: "Wings of The Underworld",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_HadesBird_icon_normal.png"
  },
  {
    id: 97_1,
    name: "Helzephyr Lux #97B",
    type: ["Dark", "Electricity"],
    level: 1,
    description: "Wings of Thunder",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_HadesBird_Electric_icon_normal.png"
  },
  {
    id: 98,
    name: "Astegon #98",
    type: ["Dragon", "Dark"],
    level: 1,
    description: "Monarch of the Steel Dragon",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BlackMetalDragon_icon_normal.png"
  },
  {
    id: 99,
    name: "Menasting #99",
    type: ["Dark", "Earth"],
    level: 1,
    description: "Unstoppable Stinger",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_DarkScorpion_icon_normal.png"
  },
  {
    id: 99_1,
    name: "Menasting Terra #99B",
    type: "Earth",
    level: 1,
    description: "UGold-Piercing Spear",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_DarkScorpion_Ground_icon_normal.png"
  },
  {
    id: 100,
    name: "Anubis #100",
    type: "Earth",
    level: 1,
    description: "Guardian of the Dark Sun",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Anubis_icon_normal.png"
  },
  {
    id: 101,
    name: "Jormuntide #101",
    type: ["Dragon", "Water"],
    level: 1,
    description: "Emperor of the Sea",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Umihebi_icon_normal.png"
  },
  {
    id: 101_1,
    name: "Jormuntide Ignis #101B",
    type: ["Dragon", "Fire"],
    level: 1,
    description: "Volcanic Emperor",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Umihebi_Fire_icon_normal.png"
  },
  {
    id: 102,
    name: "Suzaku #102",
    type: "Fire",
    level: 1,
    description: "Ruler of the Crimson Dawn",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Suzaku_icon_normal.png"
  },
  {
    id: 102,
    name: "Suzaku Aqua #102",
    type: "Water",
    level: 1,
    description: "Ruler of the Cobalt Dusk",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Suzaku_Water_icon_normal.png"
  },
  {
    id: 103,
    name: "Grizzbolt #103",
    type: "Electricity",
    level: 1,
    description: "Claws of Lightningr",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_ElecPanda_icon_normal.png"
  },
  {
    id: 104,
    name: "Lyleen #104",
    type: "Leaf",
    level: 1,
    description: "Lily Empress",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_LilyQueen_icon_normal.png"
  },
  {
    id: 104_1,
    name: "Lyleen Noct #104B",
    type: "Dark",
    level: 1,
    description: "Empress of the Abyss",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_LilyQueen_Dark_icon_normal.png"
  },
  {
    id: 105,
    name: "Faleris #105",
    type: "Fire",
    level: 1,
    description: "Sentinel of Dawn",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Horus_icon_normal.png"
  },
  {
    id: 105_1,
    name: "Faleris Aqua #105B",
    type: "Water",
    level: 1,
    description: "Sentinel of the Tides",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Horus_Water_icon_normal.png"
  },
  {
    id: 106,
    name: "Orserk #106",
    type: ["Dragon", "Electricity"],
    level: 1,
    description: "Roaring Thunder",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_ThunderDragonMan_icon_normal.png"
  },
  {
    id: 107,
    name: "Shadowbeak #107",
    type: "Dark",
    level: 1,
    description: "Unknown Life Form",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BlackGriffon_icon_normal.png"
  },
  {
    id: 108,
    name: "Paladius #108",
    type: "Normal",
    level: 1,
    description: "Holy Knight of Legend",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_SaintCentaur_icon_normal.png"
  },
  {
    id: 109,
    name: "Necromus #109",
    type: "Dark",
    level: 1,
    description: "Dark Knight of Legend",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BlackCentaur_icon_normal.png"
  },
  {
    id: 110,
    name: "Frostallion #110",
    type: "Ice",
    level: 1,
    description: "Legendary Steed of Ice",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_IceHorse_icon_normal.png"
  },
  {
    id: 110_1,
    name: "Frostallion Noct #110B",
    type: "Dark",
    level: 1,
    description: "Legendary Steed of Darkness",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_IceHorse_Dark_icon_normal.png"
  },
  {
    id: 111,
    name: "Jetragon #111",
    type: "Dragon",
    level: 1,
    description: "Legendary Celestial Dragon",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_JetDragon_icon_normal.png"
  },
  {
    id: 112,
    name: "Bellanoir #112",
    type: "Dark",
    level: 1,
    description: "Eclipsed Siren",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_NightLady_icon_normal.png"
  },
  {
    id: 112_1,
    name: "Bellanoir Libero #112B",
    type: "Dark",
    level: 1,
    description: "Twilight Siren",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_NightLady_Dark_icon_normal.png"
  },
  {
    id: 113,
    name: "Selyne #113",
    type: ["Dark", "Normal"],
    level: 1,
    description: "Crescent of the Darkest Night",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_MoonQueen_icon_normal.png"
  },
  {
    id: 114,
    name: "Croajiro #114",
    type: "Water",
    level: 1,
    description: "Harakiri Master",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_KendoFrog_icon_normal.png"
  },
  {
    id: 114_1,
    name: "Croajiro Noct #114B",
    type: ["Water", "Dark"],
    level: 1,
    description: "Natural Born Killer",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_KendoFrog_Dark_icon_normal.png"
  },
  {
    id: 115,
    name: "Lullu #115",
    type: "Leaf",
    level: 1,
    description: "Primal Source of Hay Fever",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_LeafPrincess_icon_normal.png"
  },
  {
    id: 116,
    name: "Shroomer #116",
    type: "Leaf",
    level: 1,
    description: "Creeping Mushroom",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_MushroomDragon_icon_normal.png"
  },
  {
    id: 116,
    name: "Shroomer Noct #116",
    type: ["Leaf", "Dark"],
    level: 1,
    description: "Dangerous Mushroom",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_MushroomDragon_Dark_icon_normal.png"
  },
  {
    id: 117,
    name: "Kikit #117",
    type: "Earth",
    level: 1,
    description: "Armored to the Teeth",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_SmallArmadillo_icon_normal.png"
  },
  {
    id: 118,
    name: "Sootseer #118",
    type: ["Dark", "Fire"],
    level: 1,
    description: "Flickering Flame",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_CandleGhost_icon_normal.png"
  },
  {
    id: 119,
    name: "Prixter #119",
    type: ["Dark", "Earth"],
    level: 1,
    description: "Bad Boy",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_ScorpionMan_icon_normal.png"
  },
  {
    id: 120,
    name: "Knocklem #120",
    type: "Earth",
    level: 1,
    description: "Suit of Armor",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_WingGolem_icon_normal.png"
  },
  {
    id: 121,
    name: "Yakumo #121",
    type: "Normal",
    level: 1,
    description: "Unwavering Loyalty",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_GuardianDog_icon_normal.png"
  },
  {
    id: 122,
    name: "Dogen #122",
    type: "Normal",
    level: 1,
    description: "State of Enlightenment",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_SifuDog_icon_normal.png"
  },
  {
    id: 123,
    name: "Dazemu #123",
    type: "Earth",
    level: 1,
    description: "Brilliant Steps",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_FeatherOstrich_icon_normal.png"
  },
  {
    id: 124,
    name: "Mimog #124",
    type: "Normal",
    level: 1,
    description: "Treasure Trove",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_MimicDog_icon_normal.png"
  },
  {
    id: 125,
    name: "Xenovader #125",
    type: "Dark",
    level: 1,
    description: "Interloper from Outer Space",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_DarkAlien_icon_normal.png"
  },
  {
    id: 126,
    name: "Xenogard #126",
    type: "Dragon",
    level: 1,
    description: "Planet-Devouring Dragon",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_WhiteAlienDragon_icon_normal.png"
  },
  {
    id: 127,
    name: "Xenolord #127",
    type: ["Dark", "Dragon"],
    level: 1,
    description: "Invader from Space",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_DarkMechaDragon_icon_normal.png"
  },
  {
    id: 128,
    name: "Nitemary #128",
    type: "Dark",
    level: 1,
    description: "Soul of the Dark Rabbit",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_GhostRabbit_icon_normal.png"
  },
  {
    id: 129,
    name: "Starryon #129",
    type: "Dark",
    level: 1,
    description: "Midnight Blue Mane",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_NightBlueHorse_icon_normal.png"
  },
  {
    id: 130,
    name: "Silvegis #130",
    type: "Dragon",
    level: 1,
    description: "Guardian Dragon of Ironclad",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_WhiteShieldDragon_icon_normal.png"
  },
  {
    id: 131,
    name: "Smokie #131",
    type: "Dark",
    level: 1,
    description: "Jet-Black Little Hero",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BlackPuppy_icon_normal.png"
  },
  {
    id: 132,
    name: "Celesdir #132",
    type: "Normal",
    level: 1,
    description: "Beast of Salvation",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_WhiteDeer_icon_normal.png"
  },
  {
    id: 133,
    name: "Omascul #133",
    type: "Dark",
    level: 1,
    description: "Hundred-Faced Apostle",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_MysteryMask_icon_normal.png"
  },
  {
    id: 134,
    name: "Splatterina #134",
    type: "Dark",
    level: 1,
    description: "Crimson Butcher",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_GrimGirl_icon_normal.png"
  },
  {
    id: 135,
    name: "Tarantriss #135",
    type: "Dark",
    level: 1,
    description: "Tactician of the Thread Realm",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_PurpleSpider_icon_normal.png"
  },
  {
    id: 136,
    name: "Azurmane #136",
    type: "Electricity",
    level: 1,
    description: "Blue Lightning Steed",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BlueThunderHorse_icon_normal.png"
  },
  {
    id: 137,
    name: "Bastigor #137",
    type: "Ice",
    level: 1,
    description: "King of Frostfang",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_SnowTigerBeastman_icon_normal.png"
  },
  {
    id: 138,
    name: "Prunelia #138",
    type: ["Leaf", "Dark"],
    level: 1,
    description: "Indigo Handmaiden",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BlueberryFairy_icon_normal.png"
  },
  {
    id: 139,
    name: "Nyafia #139",
    type: "Dark",
    level: 1,
    description: "Night Shade Hunter",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_BadCatgirl_icon_normal.png"
  },
  {
    id: 140,
    name: "Gildane #140",
    type: "Earth",
    level: 1,
    description: "Guardian Beast of Twilight",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_GoldenHorse_icon_normal.png"
  },
  {
    id: 141,
    name: "Herbil #141",
    type: ["Leaf", "Normal"],
    level: 1,
    description: "Percussive Maintenance",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_LeafMomonga_icon_normal.png"
  },
  {
    id: 142,
    name: "Icelyn #142",
    type: "Ice",
    level: 1,
    description: "Icy Smile",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_IceWitch_icon_normal.png"
  },
  {
    id: 143,
    name: "Frostplume #143",
    type: "Ice",
    level: 1,
    description: "Snowlaced Feather Mantle",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_SnowPeafowl_icon_normal.png"
  },
  {
    id: 144,
    name: "Palumba #144",
    type: "Leaf",
    level: 1,
    description: "No Dance, No Life",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_TropicalOstrich_icon_normal.png"
  },
  {
    id: 145,
    name: "Braloha #145",
    type: ["Leaf", "Earth"],
    level: 1,
    description: "Ancient Bloombringer",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_Plesiosaur_icon_normal.png"
  },
  {
    id: 146,
    name: "Munchill #146",
    type: ["Ice", "Water"],
    level: 1,
    description: "Walking Refrigerator",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_IceCrocodile_icon_normal.png"
  },
  {
    id: 147,
    name: "Polapup #147",
    type: ["Ice", "Water"],
    level: 1,
    description: "Idol on Ice",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_IceSeal_icon_normal.png"
  },
  {
    id: 148,
    name: "Turtacle #148",
    type: "Water",
    level: 1,
    description: "Mini Fortress",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_TentacleTurtle_icon_normal.png"
  },
  {
    id: 148_1,
    name: "Turtacle Terra #148B",
    type: ["Water", "Earth"],
    level: 1,
    description: "Golden Fortress",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_TentacleTurtle_Ground_icon_normal.png"
  },
  {
    id: 149,
    name: "Jellroy #149",
    type: ["Water", "Dark"],
    level: 1,
    description: "Shade Drifter",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_JellyfishGhost_icon_normal.png"
  },
  {
    id: 150,
    name: "Jelliette #150",
    type: "Water",
    level: 1,
    description: "Sunlight Drifter",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_JellyfishFairy_icon_normal.png"
  },
  {
    id: 151,
    name: "Gloopie #151",
    type: ["Water", "Dark"],
    level: 1,
    description: "Trickster of the Sea",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_OctopusGirl_icon_normal.png"
  },
  {
    id: 152,
    name: "Finsider #152",
    type: "Water",
    level: 1,
    description: "Eyes from the Abyss",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_StuffedShark_icon_normal.png"
  },
  {
    id: 152_1,
    name: "Finsider Ignis #152B",
    type: ["Water", "Fire"],
    level: 1,
    description: "Eyes from the Flames",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_StuffedShark_Fire_icon_normal.png"
  },
  {
    id: 153,
    name: "Ghangler #153",
    type: ["Dark", "Water"],
    level: 1,
    description: "Temptation in the Deep",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_GhostAnglerfish_icon_normal.png"
  },
  {
    id: 153_1,
    name: "Ghangler Ignis #153B",
    type: ["Fire", "Water"],
    level: 1,
    description: "Longing in the Deep",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_GhostAnglerfish_Fire_icon_normal.png"
  },
  {
    id: 154,
    name: "Whalaska #154",
    type: ["Ice", "Water"],
    level: 1,
    description: "Nice Ice Lance",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_IceNarwhal_icon_normal.png"
  },
  {
    id: 154_1,
    name: "Whalaska Ignis #154B",
    type: ["Ice", "Fire"],
    level: 1,
    description: "Nice Crimson Lance",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_IceNarwhal_Fire_icon_normal.png"
  },
  {
    id: 155,
    name: "Neptilius #155",
    type: "Water",
    level: 1,
    description: "Legend of the Seas",
    image: "https://palworld.gg/_ipx/q_80&s_130x130/images/full_palicon/T_PoseidonOrca_icon_normal.png"
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
