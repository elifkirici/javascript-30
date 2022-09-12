const user = [
  {
    id: 1,
    user: "SELENA GOMEZ",
    job: "singer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ",
    img: "https://i.tmgrup.com.tr/vogue/img/sq/21-04/24/selena-gomez-1189888346.jpg?0.2900799934270357",
  },
  {
    id: 2,
    user: "JOHNY DEEP",
    job: "actor",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ",
    img: "https://tr.web.img3.acsta.net/c_310_420/pictures/22/04/18/16/11/4406324.jpg",
  },
  {
    id: 3,
    user: "ARİANE GRANDE",
    job: "singer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ",
    img: "https://img-s1.onedio.com/id-60af76957bb3c2812b04aefe/rev-0/w-620/f-jpg/s-6146cf85965309d62a658206305c48c7a6ba4ab9.jpg",
  },
  {
    id: 4,
    user: "JOHN WAYNE",
    job: "Model",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ",
    img: "https://static.daktilo.com/sites/496/uploads/2021/06/15/john-wayne-1.jpg",
  },
  {
    id: 5,
    user: "RIHANNA",
    job: "singer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Rihanna_Fenty_2018.png",
  },
  {
    id: 6,
    user: "EMMA WATSON",
    job: "actor",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ",
    img: "https://tr.web.img4.acsta.net/c_310_420/pictures/14/03/26/17/55/164231.jpg",
  },
  {
    id: 7,
    user: "DUA LİPA",
    job: "singer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ",
    img: "https://45secondes.fr/wp-content/uploads/2022/05/Dua-Lipa-dit-que-la-haine-quelle-a-recue-a.jpg",
  },
  {
    id: 8,
    user: "STANA KATIC",
    job: "actor",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five  ",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/99/LACI_Greentech_Global_Showcase_%2821795050993%29_%28cropped%29_-_Stana_Katic.jpg",
  },
  {
    id: 9,
    user: "DWAYNE JOHNSON ",
    job: "actor",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ",
    img: "https://production-livingdocs-bluewin-ch.imgix.net/2021/12/01/3a4991b5-5d69-4927-a893-cb43dd62e81f.jpeg?w=994&auto=format",
  },
];

function search() {
  let filterInputDOM = document.querySelector("#filterInput");
  let filter = user.filter((useritem) =>
    useritem.user.includes(filterInputDOM.value)
  );
  const Bigdiv = document.createElement("div");

  filter.map((useritem) => {
    
    const div = document.createElement("div");
    div.classList.add("userList");
    
    div.innerHTML = `<img src=${useritem.img}>
    <h5 class="userName">${useritem.user.toUpperCase()}</h5>
    <p class="textAbout">${useritem.about}</p>
    `;
    Bigdiv.appendChild(div);

    let userListShowDom = document.querySelector(".userListShow");
    userListShowDom.innerHTML = Bigdiv.innerHTML;
    
  });
}

function showUser() {
  const Bigdiv = document.createElement("div");

  user.map((useritem) => {
    const div = document.createElement("div");
    div.classList.add("userList");

    div.innerHTML = `<img src=${useritem.img}>
    
    <h5 class="userName">${useritem.user.toUpperCase()}</h5>
    <p class="textAbout">${useritem.about}</p>
    
    `;
    Bigdiv.appendChild(div);
    let userListShowDom = document.querySelector(".userListShow");
    userListShowDom.innerHTML = Bigdiv.innerHTML;
  });
}

window.addEventListener("load", showUser());
