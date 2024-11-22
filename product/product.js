const products = [
  {
    id: "rec43w3ipXvP28vog",
    title: "high-back bench",
    company: "ikea",
    image:
      "https://www.optimonk.com/wp-content/uploads/types-of-product-images-07.jpg",
    price: 9.99,
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    image:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
    price: 79.99,
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    image:
      "https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123",
    price: 788.99,
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    image:
      "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0=",
    price: 1279.99,
  },
  {
    id: "rec8kkCmSiMkbkiko",
    title: "accent chair",
    company: "caressa",
    image: "https://www.seoclerk.com/pics/407226-2eWiCl1471372939.jpg",
    price: 25.99,
  },
  {
    id: "recBohCqQsot4Q4II",
    title: "wooden table",
    company: "caressa",
    image:
      "https://cdn.4imprint.com/qtz/homepage/categories/images21/drinkware0222.jpg",
    price: 45.99,
  },
  {
    id: "recDG1JRZnbpRHpoy",
    title: "dining table",
    company: "caressa",
    image:
      "https://toppromotionalproductweb.files.wordpress.com/2018/03/17.jpg",
    price: 6.99,
  },
  {
    id: "recNWGyP7kjFhSqw3",
    title: "sofa set",
    company: "liddy",
    image:
      "https://www.flashbay.com/images/blog/Ideas/branded-water-bottles.jpg",
    price: 69.99,
  },
  {
    id: "recZEougL5bbY4AEx",
    title: "modern bookshelf",
    company: "marcos",
    image:
      "https://ekit.co.uk/GalleryEntries/eCommerce_solutions_and_services/MedRes_Product-presentation-2.jpg?q=27012012153123",
    price: 8.99,
  },
  {
    id: "recjMK1jgTb2ld7sv",
    title: "emperor bed",
    company: "liddy",
    image:
      "https://paymentcloudinc.com/blog/wp-content/uploads/2021/08/product-ideas-to-sell.jpg",
    price: 21.99,
  },
  {
    id: "recmg2a1ctaEJNZhu",
    title: "utopia sofa",
    company: "marcos",
    image:
      "https://www.shutterstock.com/image-photo/paper-boxes-parcel-trolley-on-260nw-1938280768.jpg",
    price: 39.95,
  },
  {
    id: "recvKMNR3YFw0bEt3",
    title: "entertainment center",
    company: "liddy",
    image:
      "https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688502.jpg",
    price: 29.98,
  },
  {
    id: "recxaXFy5IW539sgM",
    title: "albany sectional",
    company: "ikea",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5kmSyRirHk25-A13QJ59lEEEh97oeeW2vQ&s",
    price: 10.99,
  },
  {
    id: "recyqtRglGNGtO4Q5",
    title: "leather sofa",
    company: "liddy",
    image:
      "https://img.freepik.com/premium-psd/white-t-shirt-with-black-white-label-that-says-your-design-here_67297-276.jpg",
    price: 9.99,
  },
];

function display(products) {
  let product = products.map(function (value) {
    return ` <article class="product">
            <img
              src="${value.image}"
              class="product-img img"
              alt=""
            />
            <footer>
              <h5 class="product-name">${value.title}</h5>
              <span class="product-price">$${value.price}</span>
            </footer>
          </article>`;
  });
  document.getElementById("products").innerHTML = product.join(" ");
}

const arrayofproduct = [];
const buttons = products.map(function (value) {
  if (!arrayofproduct.includes(value.company)) {
    arrayofproduct.push(value.company);
    return `<button class="company-btn" onclick="filterCompany('${value.company}')">${value.company}</button>`;
  }
});

buttons.unshift(
  `<button class="company-btn" onclick="allcompany()">All</button>`
);

function allcompany() {
  display(products);
}

document.getElementById("companies").innerHTML = buttons.join(" ");

function filterCompany(CompInfo) {
  let Data = products.filter(function (value) {
    return value.company === CompInfo;
  });

  display(Data);
  console.log(Data);
}

function filterProduct() {
  let term = document.getElementById("searchTerm").value;

  var p = products.filter(function (value) {
    return value.title === term;
  });

  display(p);
}

allcompany();
