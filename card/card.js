const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const cartItmes = [];

function checkout() {
  let price = cartItmes.reduce(function (pre, curr) {
    return pre + curr.qty * curr.price;
  }, 0);

  console.log(price);
}

function addItems(productId) {
  let product = menu.find(function (value) {
    return value.id == productId;
  });

  let prdocutExistInCart = cartItmes.find(function (value) {
    return value.id == productId;
  });

  if (!prdocutExistInCart) {
    product.qty = 1;
    cartItmes.push(product);
  } else {
    prdocutExistInCart.qty = prdocutExistInCart.qty + 1;
  }

  console.log(cartItmes);
}

function display(menu) {
  let card = menu.map(function (value) {
    return `<article class="menu-item">
          <img src="${value.img}" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>${value.title}</h4>
              <h4 class="price">$${value.price}</h4>
            </header>
            <p class="item-text">
            ${value.desc}
            </p>
            <div class="category">${value.category}</div>
          </div>
           <button class="filter-btn" onclick="addItems(${value.id})">AddToCart </button>
        </article>`;
  });

  document.getElementById("menu").innerHTML = card.join(" ");
}

const arrayOfCategory = [];

const buttons = menu.map(function (value) {
  if (!arrayOfCategory.includes(value.category)) {
    arrayOfCategory.push(value.category);
    return ` <button type="button" class="filter-btn" 
    data-id="breakfast"  onclick="filterData('${value.category}')">
           ${value.category}
          </button>`;
  }
});

buttons.unshift(`<button type="button" class="filter-btn" 
    data-id="breakfast"  onclick="showAllCategory()">
           All
          </button>`);

function showAllCategory() {
  display(menu);
}
document.getElementById("btn").innerHTML = buttons.join(" ");

function filterData(catinfo) {
  let filterCategory = menu.filter(function (value) {
    return value.category === catinfo;
  });

  display(filterCategory);
  console.log(filterCategory);
}

// function arangearray(field, order) {
//   menu.sort(function (a, b) {
//     if (field == "price" && order == "a") {
//       return a.price - b.price;
//     } else if (field == "price" && order == "d") {
//       return b.price - a.price;
//     }
//   });
//   display(menu);
// }

function arrangeArray(field, order) {
  menu.sort(function (a, b) {
    if (field == "price" && order == "asc") {
      return a.price - b.price;
    } else if (field == "price" && order == "desc") {
      return b.price - a.price;
    }
  });

  display(menu);
}

showAllCategory();
