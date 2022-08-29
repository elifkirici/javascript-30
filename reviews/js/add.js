const person = [
  {
    id: 1,
    name: "Selena Gomez",
    job: "singer",
    about:
      "Selena Marie Gomez, Amerikalı oyuncu, şarkıcı. En iyi bilinen rolü Emmy ödüllü Waverly Büyücüleri adlı Disney Channel dizisindeki Alex Russo karakteridir. Sonradan Selena, Another Cinderella Story, Waverly Büyücüleri: Film ve Prenses Koruma Programı gibi filmlerde de rol aldı.",
    img: "https://i.tmgrup.com.tr/vogue/img/sq/21-04/24/selena-gomez-1189888346.jpg?0.2900799934270357",
  },
  {
    id: 2,
    name: "johnny depp",
    job: "actor",
    about:
      "John Christopher Depp II, Amerikalı oyuncu, yapımcı ve müzisyen. On kere Altın Küre Ödülü'ne aday gösterildi, Sweeney Todd: Fleet Sokağı'nın Şeytani Berberi filmindeki Demon Barber rolüyle En İyi Erkek Oyuncu Akademi Ödülü'ne aday gösterildi.",
    img: "https://tr.web.img3.acsta.net/c_310_420/pictures/22/04/18/16/11/4406324.jpg",
  },
  {
    id: 3,
    name: "ariana grande",
    job: "singer",
    about:
      "Ariana Grande-Butera, 2 Grammy Ödülü sahibi Amerikan & İtalyan şarkıcı, söz yazarı, iş kadını ve aktris. Boca Raton, Florida'da doğdu. Çoğu kişisel deneyimlere dayanan müziği, medyanın yoğun ilgisine konuk olurken, dört oktavlık vokali eleştirel beğeni topladı.",
    img: "https://pbs.twimg.com/profile_images/1400911397656088590/1f5reBHw_400x400.jpg",
  },
  {
    id: 4,
    name: "barbara palvin",
    job: "Model",
    about:
      "Barbara Palvin, Macar model. İlk olarak 2016 yılında Sports Illustrated Swimsuit Issue dergisinde yer aldı. 2019'da Victoria's Secret Meleği oldu. Aynı zamanda bir Armani Güzellik elçisidir",
    img: "https://i.pinimg.com/originals/c3/37/25/c3372516fe1731d4c63efe2196022674.jpg",
  },
  {
    id: 5,
    name: "cristiano ronaldo",
    job: "footballer",
    about:
      "Cristiano Ronaldo dos Santos Aveiro, Premier League ekiplerinden Manchester United için forvet olarak oynayan ve Portekiz'in kaptanlığını yapan Portekizli profesyonel bir futbolcudur.",
    img: "https://img.a.transfermarkt.technology/portrait/big/8198-1631656078.jpg?lm=1",
  },
  {
    id: 6,
    name: "emma watson",
    job: "actor",
    about:
      "Emma Charlotte Duerre Watson İngiliz oyuncu, model ve aktivist. Watson Harry Potter film serisinde canlandırdığı Hermione Granger karakteriyle tanındı.",
    img: "https://tr.web.img4.acsta.net/c_310_420/pictures/14/03/26/17/55/164231.jpg",
  },
  {
    id: 7,
    name: "justin bieber",
    job: "singer",
    about:
      " Justin Drew Bieber, Kanadalı pop, çağdaş R&B şarkıcısı, oyuncu ve şarkı yazarıdır. Kariyeri, video paylaşım sitesi Youtube'a koyduğu videoların 2008 yılında Scooter Braun tarafından keşfedilmesiyle başladı. Sonraki günlerde Braun, Justin Bieber'ın menajeri olmuştur.",
    img: "https://cdn.allfamous.org/people/avatars/justin-bieber-m3g4-allfamous.org.jpg",
  },
  {
    id: 8,
    name: "hailey baldwin",
    job: "Model",
    about:
      "Hailey Rhode Bieber Amerikalı bir model, oyuncu, sunucu ve televizyon kişiliğidir. Waterloo, Ontario, Kanada'da yaşamaktadır. Şarkıcı Justin Bieber ile evlidir. ",
    img: "https://iaahbr.tmgrup.com.tr/9607a8/0/0/0/0/0/0?u=https://iahbr.tmgrup.com.tr/2022/03/14/justin-bieberin-esi-hailey-baldwin-oldu-mu-hailey-baldwin-kimdir-kac-yasinda-saglik-durumu-nasil-1647257488480.jpg&mw=616",
  },
  {
    id: 9,
    name: "Dwayne Johnson ",
    job: "actor",
    about:
      "Dwayne Douglas Johnson, ya da ring adı ile The Rock, Amerikalı aktör, iş adamı ve eski profesyonel güreşçidir. Geniş çapta tüm zamanların en büyük ve en etkili profesyonel güreşçilerinden biri olarak kabul edilen Johnson, oyunculuk kariyerine devam etmeden önce sekiz yıl boyunca WWF/E adına güreşti",
    img: "https://production-livingdocs-bluewin-ch.imgix.net/2021/12/01/3a4991b5-5d69-4927-a893-cb43dd62e81f.jpeg?w=994&auto=format",
  },
];

let photoDOM =document.querySelector(".photo")
let nameDOM =document.querySelector(".name")
let jobDOM =document.querySelector(".job")
let aboutDOM =document.querySelector(".menu-text")

let currentitem = 0
window.addEventListener('DOMContentLoaded' ,function(){
    showperson(currentitem) 


})
function showperson(people){
    const item =person[people]
    photoDOM.src = item.img
    nameDOM.textContent = item.name
    jobDOM.textContent = item.job
    aboutDOM.textContent = item.about

}
function buttonright() {
  currentitem++
  showperson(currentitem)
   
}
function buttonleft(){
    currentitem--
    showperson(currentitem)
}
