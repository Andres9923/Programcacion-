const menu = [
  {
    id: 1,
    title: "Moby-Dick",
    category: "Aventuras",
    price: 0,
    img: "./images/Moby-1.jpeg",
    desc: `Moby Dick​ es una novela del escritor Herman Melville publicada en 1851. Narra la travesía del barco ballenero Pequod, comandado por el capitán Ahab, junto a Ismael y el arponero Queequeg en la obsesiva y autodestructiva persecución de un gran cachalote blanco. `,
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
    category: "Comedia",
    price: 0,
    img: "./images/t4.jpeg",
    desc: `La Divina comedia, también conocida simplemente como Comedia, es un poema escrito por Dante Alighieri. `,
  },
  {
    id: 5,
    title: " Aristoteles etica",
    category: "Filosofia",
    price: 0,
    img: "./images/t5.jpeg",
    desc: `La ética aristotélica reflexiona sobre la conducta humana. Para Aristóteles todo comportamiento persigue un fin, es decir, se mueve por un objeto o motivo, no es en vano. Sin embargo, Aristóteles diferenció entre dos tipos de fines. `,
  },
  {
    id: 6,
    title: "El libro de la ciencia 3 edicion ",
    category: "Ciencia",
    price: 0,
    img: "./images/t6.jpeg",
    desc: `Se puede afirmar que la curiosidad del hombre por conocer el origen de los hechos, y su deseo de entender el mundo, han trazado los caminos de la ciencia.`,
  },
  {
    id: 7,
    title: "Un mapa en la cabeza",
    category: "Viajes",
    price: 0,
    img: "./images/t7.jpeg",
    desc: ` Este libro es sobre esa gente, amantes de los viajes en auto por carretera, buscadores de tesoros que siguen unas coordenadas GPS publicadas por otros locos del geocaching, programadores de Google Earth o cartógrafos de tierras imaginarias.`,
  },
  {
    id: 8,
    title: "El poder de confiar en ti",
    category: "Literatura",
    price: 0,
    img: "./images/t8.jpeg",
    desc: ` El acto de generosidad más grande que puedes hacer por ti y por los que te rodean es ser felizEl poder de confiar en ti te invita a convertirte en tu propio coach y a ser tu propio guía con pautas y ejercicios para que aprendas a sentirte bien y a hacer realidad tus verdaderos deseos y aspiraciones  `,
  },
  {
    id: 9,
    title: "El dragón de las estrellas y yo",
    category: "Infantil",
    price: 0,
    img: "./images/t9.jpeg",
    desc: `El dragón y las estrellas es un libro que enseña dos valores para los pequeños: PERSEVERANCIA  Y VALENTÍA 
    Ya que mientras Javi, el Niño, y Dugul el dragón iban buscando su hogar, lo iban acompañando`,
  },
  {
    id: 10,
    title: "Historia de México",
    category: "Historia",
    price: 0,
    img: "./images/t10.jpeg",
    desc: `La historia de México: Una Guía Fascinante de la Historia Mexicana, Desde el Ascenso de Tenochtitlan y el Imperio de Maximiliano hasta la Revolución Mexicana y el Levantamiento Indígena Zapatista
    La Revolución mexicana: Una guía fascinante sobre la guerra civil mexicana y cómo Pancho Villa y Emiliano Zapata tuvieron un impacto en México`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
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
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "Todo") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
