const slider = [
  {
    id: "1",
    img: "https://i2.gazetevatan.com/i/gazetevatan/75/0x410/628b84a8a3705a264475dd27.jpg",
  },
  {
    id: "2",
    img: "https://cumhuriyet.com.tr/Archive/2021/10/2/1873664/kapak_175709.jpg",
    personImage:
      "https://media.istockphoto.com/photos/glasses-girl-in-white-picture-id1089633230?k=20&m=1089633230&s=170667a&w=0&h=4lw6aaKUxnvosWihKSAwM2Q-RIxZVCcYbu7nWKmNhgM=",
  },
  {
    id: "3",
    img: "https://i2.milimaj.com/i/milliyet/75/0x410/6169713d86b244414c2746e2.jpg",
  },
];

let buttonLeftDOM = document.querySelector("#buttonLeft");
let buttonRightDOM = document.querySelector("#buttonRight");
let photoDOM = document.querySelector(".photo");
let personImageDOM = document.querySelector(".personImage");
let idDOM = document.querySelector(".id");


let currentItem = 0;
function showSlider(sliders) {
  const item = slider[sliders];
  idDOM.textContent = item.id;
  photoDOM.src = item.img;
  personImageDOM.src = item.personImage;

  if (item.id == "2") {
    personImageDOM.style.removeProperty("visibility");
    buttonRightDOM.style.removeProperty("visibility");
    buttonLeftDOM.style.removeProperty("display");
    buttonLeftDOM.style.removeProperty("margin-top");

  }
  if (item.id == "3") {
    personImageDOM.style["visibility"] = " hidden";
    buttonRightDOM.style["visibility"] = " hidden";
    buttonLeftDOM.style["display"] = " block";
    buttonLeftDOM.style["margin"] = " auto";
    buttonLeftDOM.style["margin-top"] = "20px";
  }
  if (item.id == "1") {
    personImageDOM.style["visibility"] = " hidden";
    buttonLeftDOM.style["visibility"] = " hidden";
    buttonRightDOM.style["display"] = " block";
    buttonRightDOM.style["margin"] = " auto";
    buttonRightDOM.style["margin-top"] = "-40px";
  }
}

function buttonNext() {

  buttonLeftDOM.style.removeProperty("visibility");
  buttonRightDOM.style.removeProperty("display");
  buttonRightDOM.style.removeProperty("margin");
  buttonRightDOM.style.removeProperty("margin-top");
  currentItem++;
  showSlider(currentItem);


}

function buttonBack() {
  currentItem--;
  showSlider(currentItem);
}

window.addEventListener("load", function () {
  showSlider(currentItem);
});
