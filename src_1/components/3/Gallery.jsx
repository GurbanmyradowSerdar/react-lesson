import Profile from "./Profile";

let data = [
  {
    color: "Purple",
    firstName: "Jedediah",
  },
  {
    color: "Red",
    firstName: "Robyn",
  },
  {
    color: "Green",
    firstName: "Marco",
  },
  {
    color: "Aquamarine",
    firstName: "Mick",
  },
  {
    color: "Blue",
    firstName: "Lynnell",
  },
  {
    color: "Fuscia",
    firstName: "Konrad",
  },
  {
    color: "Crimson",
    firstName: "Jeffry",
  },
  {
    color: "Indigo",
    firstName: "Shalom",
  },
  {
    color: "Teal",
    firstName: "Alidia",
  },
  {
    color: "Blue",
    firstName: "Belva",
  },
  {
    color: "Indigo",
    firstName: "Thomas",
  },
  {
    color: "Indigo",
    firstName: "Francine",
  },
  {
    color: "Fuscia",
    firstName: "Kevina",
  },
  {
    color: "Yellow",
    firstName: "Vasily",
  },
  {
    color: "Pink",
    firstName: "Dukie",
  },
  {
    color: "Mauv",
    firstName: "Elliot",
  },
  {
    color: "Teal",
    firstName: "Allissa",
  },
  {
    color: "Goldenrod",
    firstName: "Eward",
  },
  {
    color: "Teal",
    firstName: "Bran",
  },
  {
    color: "Teal",
    firstName: "Gina",
  },
  {
    color: "Indigo",
    firstName: "Gerik",
  },
  {
    color: "Goldenrod",
    firstName: "Demetria",
  },
  {
    color: "Violet",
    firstName: "Cozmo",
  },
  {
    color: "Goldenrod",
    firstName: "Garwood",
  },
  {
    color: "Turquoise",
    firstName: "Wait",
  },
  {
    color: "Mauv",
    firstName: "Adrian",
  },
  {
    color: "Indigo",
    firstName: "Etheline",
  },
  {
    color: "Orange",
    firstName: "Adan",
  },
  {
    color: "Aquamarine",
    firstName: "Clint",
  },
  {
    color: "Red",
    firstName: "Leicester",
  },
  {
    color: "Indigo",
    firstName: "Robby",
  },
  {
    color: "Green",
    firstName: "Antonino",
  },
  {
    color: "Puce",
    firstName: "Vinson",
  },
  {
    color: "Khaki",
    firstName: "Barrett",
  },
  {
    color: "Mauv",
    firstName: "Kleon",
  },
  {
    color: "Purple",
    firstName: "Amandy",
  },
  {
    color: "Indigo",
    firstName: "Casandra",
  },
  {
    color: "Teal",
    firstName: "Carlene",
  },
  {
    color: "Indigo",
    firstName: "Mikol",
  },
  {
    color: "Turquoise",
    firstName: "Josephina",
  },
  {
    color: "Aquamarine",
    firstName: "Wiatt",
  },
  {
    color: "Turquoise",
    firstName: "Brok",
  },
  {
    color: "Turquoise",
    firstName: "Reube",
  },
  {
    color: "Goldenrod",
    firstName: "Eden",
  },
  {
    color: "Red",
    firstName: "Trumann",
  },
  {
    color: "Green",
    firstName: "Farlay",
  },
  {
    color: "Indigo",
    firstName: "Osborn",
  },
  {
    color: "Blue",
    firstName: "Berte",
  },
  {
    color: "Pink",
    firstName: "Doralia",
  },
  {
    color: "Puce",
    firstName: "Xymenes",
  },
  {
    color: "Fuscia",
    firstName: "Mariana",
  },
  {
    color: "Fuscia",
    firstName: "Matty",
  },
  {
    color: "Aquamarine",
    firstName: "Rutledge",
  },
  {
    color: "Maroon",
    firstName: "Griffin",
  },
  {
    color: "Maroon",
    firstName: "Velvet",
  },
  {
    color: "Purple",
    firstName: "Carly",
  },
  {
    color: "Green",
    firstName: "Ase",
  },
  {
    color: "Pink",
    firstName: "Alec",
  },
  {
    color: "Puce",
    firstName: "Floris",
  },
  {
    color: "Pink",
    firstName: "Nancy",
  },
  {
    color: "Indigo",
    firstName: "Giacopo",
  },
  {
    color: "Red",
    firstName: "Dasie",
  },
  {
    color: "Mauv",
    firstName: "Antoinette",
  },
  {
    color: "Blue",
    firstName: "Buckie",
  },
  {
    color: "Goldenrod",
    firstName: "Jayson",
  },
  {
    color: "Orange",
    firstName: "Bowie",
  },
  {
    color: "Violet",
    firstName: "Stella",
  },
  {
    color: "Pink",
    firstName: "Betti",
  },
  {
    color: "Orange",
    firstName: "Jedidiah",
  },
  {
    color: "Puce",
    firstName: "Donal",
  },
  {
    color: "Yellow",
    firstName: "Chicky",
  },
  {
    color: "Turquoise",
    firstName: "Nanete",
  },
  {
    color: "Fuscia",
    firstName: "Dianemarie",
  },
  {
    color: "Orange",
    firstName: "Nell",
  },
  {
    color: "Turquoise",
    firstName: "Dan",
  },
  {
    color: "Puce",
    firstName: "Lauri",
  },
  {
    color: "Indigo",
    firstName: "Montgomery",
  },
  {
    color: "Pink",
    firstName: "Kath",
  },
  {
    color: "Turquoise",
    firstName: "Koralle",
  },
  {
    color: "Aquamarine",
    firstName: "Sheree",
  },
  {
    color: "Yellow",
    firstName: "Kristy",
  },
  {
    color: "Teal",
    firstName: "Tamiko",
  },
  {
    color: "Fuscia",
    firstName: "Melany",
  },
  {
    color: "Mauv",
    firstName: "Nessa",
  },
  {
    color: "Maroon",
    firstName: "Gauthier",
  },
  {
    color: "Maroon",
    firstName: "Ebenezer",
  },
  {
    color: "Fuscia",
    firstName: "Wallache",
  },
  {
    color: "Teal",
    firstName: "Cesya",
  },
  {
    color: "Teal",
    firstName: "Terese",
  },
  {
    color: "Pink",
    firstName: "Reagan",
  },
  {
    color: "Puce",
    firstName: "Nicholas",
  },
  {
    color: "Pink",
    firstName: "Dulsea",
  },
  {
    color: "Puce",
    firstName: "Ebony",
  },
  {
    color: "Aquamarine",
    firstName: "Marybelle",
  },
  {
    color: "Turquoise",
    firstName: "Davin",
  },
  {
    color: "Turquoise",
    firstName: "Demetris",
  },
  {
    color: "Indigo",
    firstName: "Kamillah",
  },
  {
    color: "Purple",
    firstName: "Adrien",
  },
  {
    color: "Yellow",
    firstName: "Frederigo",
  },
  {
    color: "Purple",
    firstName: "Nikolas",
  },
];

export default function Gallery() {
  function handleClick(e) {
    console.log(e);
  }
  return (
    // ! ui part
    <div className="flex flex-col space-y-10" onClick={handleClick}>
      <h1 className="text-center text-5xl font-bold">Gallery</h1>
      <div className="grid grid-cols-6 gap-10 mx-10">
        {data.map((item, i) => (
          <Profile key={i} color={item.color} name={item.firstName} />
        ))}
      </div>
    </div>
  );
}
