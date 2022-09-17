const products = [
  {
    id: 1,
    name: "Mango Sofa Won",

    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  ",
      price:2000,
    img: "http://www.cocorepublic.co.nz/media/catalog/product/c/o/coco-republic_sofas_huxley_modular_25_1.jpeg",
  },
  {
    id: 2,
    name: "Mango Sofa Won",
   
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  ",
      price:600,
    img: "https://cdn.shopify.com/s/files/1/0576/8783/4816/products/SKU-01_f3b315a2-dea6-4eeb-a839-ab73c15b64cc_1024x.jpg?v=1650968006",
  },
  {
    id: 3,
    name: "Mango Sofa Won",

    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  ",
      price:60,
    img: "https://cdn.shopify.com/s/files/1/0576/8783/4816/products/02_3e295832-6dd4-4a6e-b34f-b47f54e23192_1024x.jpg?v=1646105449",
  },
  {
    id: 4,
    name: "Mango Sofa Won",

    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  ",
      price:130,
    img: "https://images.squarespace-cdn.com/content/v1/5885f92dbe659434862e4ebb/1567704784832-P24NAOJ2YT7YUU87U4CF/oblong%2Bloungestol%2Bnorthern?format=1000w",
  },
  {
    id: 5,
    name: "Mango Sofa Won",
 
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  ",
      price:240,
    img: "https://images.squarespace-cdn.com/content/v1/5885f92dbe659434862e4ebb/1567702485688-HIF6AKDAW8XMSOZ68F3D/Aften+ygg%26lyng+lenestol?format=1000w",
  },
  {
    id: 6,
    name: "Mango Sofa Won",

    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  ",
      price:130,
    img: "https://www.designerhome.no/wp-content/uploads/2019/10/vika-lounge-.jpg",
  },
  {
    id: 7,
    name: "Mango Sofa Won",

    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  ",
      price:6523,
    img: "https://www.cultfurniture.com/images/wickham-2-seater-sofa-black-p9661-2755643_image.jpg",
  },
  {
    id: 8,
    name: "Mango Sofa Won",

    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's   ",
      price:156,
    img: "https://ae01.alicdn.com/kf/H4e1a1b1d08844c0d95c29f79feef9f44i/Nordic-Living-Room-Sofa-Chair-Home-Balcony-Fabric-Ins-Leisure-Backrest-Chair-Bedroom-Armchair-Single-Reading.jpg_640x640.jpg",
  },
  {
    id: 9,
    name: "Mango Sofa Won ",

    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  ",
      price:720,
    img: "https://be-media.swooneditions.com/catalog/product/w/a/wattsdeskmango1_productpage_carousel_1_mobile.jpg?auto=webp&format=pjpg",
  },
];

let productslength = document.querySelector(".products-length")
productslength.innerHTML=`${products.length}  Ürün gösteriliyor.`


let flexCheckDefaultdom =document.getElementById("flexCheckDefault")
flexCheckDefaultdom.addEventListener("change",(productsitem)=>{
  const filter= products.sort((a,b)=> a.price-b.price)
  
  
  const Bigdiv = document.createElement("div");
  filter.map((productsitem) => {
       
    const div = document.createElement("div");
    div.classList.add("card")
 
     div.innerHTML = `<img class="imgProduct" src=${productsitem.img}>
     
     <h5 class="userName">${productsitem.name.toUpperCase()}</h5>
     <p class="textAbout">${productsitem.about}</p>
     <div class="pay">
     <span class="price">$${productsitem.price}</span>
       
     <button class="basketButton">
     <a href="#" >SEPETE EKLE+</a>
   </button>
   <div>
     
     `;
     Bigdiv.appendChild(div);
     let userListShowDom = document.getElementById("showProducts");
     userListShowDom.innerHTML = Bigdiv.innerHTML;
       
    });
 
})


let flexCheckCheckedDom =document.getElementById("flexCheckChecked")
flexCheckCheckedDom.addEventListener("change",(productsitem)=>{
  const filter= products.sort((a,b)=> b.price-a.price)
  
  
  const Bigdiv = document.createElement("div");
  filter.map((productsitem) => {
       
    const div = document.createElement("div");
    div.classList.add("card")
 
     div.innerHTML = `<img class="imgProduct" src=${productsitem.img}>
     
     <h5 class="userName">${productsitem.name.toUpperCase()}</h5>
     <p class="textAbout">${productsitem.about}</p>
     <div class="pay">
     <span class="price">$${productsitem.price}</span>
       
     <button class="basketButton">
     <a href="#" >SEPETE EKLE+</a>
   </button>
   <div>
     `;
     Bigdiv.appendChild(div);
     let userListShowDom = document.getElementById("showProducts");
     userListShowDom.innerHTML = Bigdiv.innerHTML;
       
    });
 
})


function showPRODUCTS() {
  const Bigdiv = document.createElement("div");

  products.map((productsitem) => {
    const div = document.createElement("div");
   div.classList.add("card")

    div.innerHTML = `<img class="imgProduct" src=${productsitem.img}>
    
    <h5 class="userName">${productsitem.name.toUpperCase()}</h5>
    <p class="textAbout">${productsitem.about}</p>
    <div class="pay">
     <span class="price">$${productsitem.price}</span>
       
     <button class="basketButton">
     <a href="#" >SEPETE EKLE+</a>
   </button>
   <div>
    
    `;
    Bigdiv.appendChild(div);
    let userListShowDom = document.getElementById("showProducts");
    userListShowDom.innerHTML = Bigdiv.innerHTML;
  });
}






window.addEventListener("load", showPRODUCTS());

let basketButton = Array.from( document.getElementsByClassName("basketButton"))

let basketnumDom = document.getElementById("basket-num")
basketnumDom.innerText=0
basketButton.map((button)=>{
  button.addEventListener("click", ()=>{
    basketnumDom.innerHTML++
  
  })
})