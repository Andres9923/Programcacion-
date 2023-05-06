const menu = [
  {
    id: 1,
    title: "Moby-Dick",
    category: "Aventuras",
    price: 0,
    img: "./images/Moby-1.jpeg",
    desc: `Moby Dick​ es una novela del escritor Herman Melville publicada en 1851. Narra la travesía del barco ballenero Pequod, comandado por el capitán Ahab, junto a Ismael y el arponero Queequeg en la obsesiva y autodestructiva persecución de un gran cachalote blanco.`,
  },
  {
    id: 2,
    title: "La cabaña",
    category: "Terror",
    price: 0,
    img: "./images/ter-2.jpeg",
    desc: `Un fin de semana de juerga en una cabaña remota es justamente lo que Mackenzie necesita. Quiere divertirse a tope con sus amigos, lejos de los padres y las obligaciones. Pero tras una noche loca dos de ellos mueren asesinados.Fecha de publicación original: 10 de mayo de 2018
    Autora: Natasha Preston `,
  },
  {
    id: 3,
    title: "La celestina",
    category: "Clasico",
    price: 0,
    img: "./images/t3.jpeg",
    desc: `Esta obra clásica y admirable, contada por algunos entre las novelas, si bien su fondo es esencialmente dramático, lleva por título verdadero el de Tragicomedia de Calixto y Melibea, y fue impresa por primera vez en 1499, y en Burgos, según la opinión más autorizada y probable.`,
  },
  {
    id: 4,
    title: "Divina comedia",
    category: "comedia",
    price: 0,
    img: "./images/t4.jpeg",
    desc: `La Divina comedia, también conocida simplemente como Comedia, es un poema escrito por Dante Alighieri. `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "Filosofia",
    price: 0,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 0,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 0,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 0,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 0,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});
