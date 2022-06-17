const all = [
  {
    food: 'Adana Roll',
    catagory: 'Main',
    img: 'imgs/adanaroll.jpg',
    price: 30,
    description: 'Terayağı ve sebzeler ile birlikte hazırlanılmıştır.',
  },
  {
    food: 'Adana Kebab',
    catagory: 'Main',
    img: 'imgs/adana-kebap.jpg',
    price: 40,
    description:
      'Terayağı, yoğurt ve sebzeler ile birlikte hazırlanışmış bir tabak adana kebap.',
  },
  {
    food: 'Kuzu Ciğer',
    catagory: 'Main',
    img: 'imgs/kuzu-ciğer.jpg',
    price: 30,
    description: 'Lokum kıvamında harika ciğer sote',
  },
  {
    food: 'Tavuk Dürüm',
    catagory: 'Main',
    img: 'imgs/tavuk-durum.jpg',
    price: 25,
    description: 'Klasik bir tavuk dürüm, bol yeşillikli',
  },
  {
    food: 'Tavuk Kanat',
    catagory: 'Main',
    img: 'imgs/tavuk-kanat.jpg',
    price: 35,
    description: 'Izgara mangalda hazırlanılmış nefis tavuk kanatları',
  },
  {
    food: 'Urfa Kebab',
    catagory: 'Main',
    img: 'imgs/urfa-kebap.jpg',
    price: 30,
    description:
      'Terayağı, yoğurt ve sebzeler ile birlikte hazırlanışmış bir tabak urfa kebap.',
  },
  {
    food: 'Ayran',
    catagory: 'bevarages',
    img: 'imgs/ayran.jpg',
    price: 5,
    description: 'Acı hissini alan soğuk içecek',
  },
  {
    food: 'Kutu Kola',
    catagory: 'bevarages',
    img: 'imgs/kutuKola.jpg',
    price: 10,
    description: 'Etlerin hızlı sindirilmesini sağlayan soğuk içecek',
  },
  {
    food: 'Şalgam',
    catagory: 'bevarages',
    img: 'imgs/şalgam.jpg',
    price: 7,
    description: 'Şalgamdan yapılmış soğuk içecek',
  },
  {
    food: 'Sprite',
    catagory: 'bevarages',
    img: 'imgs/sprite.jpg',
    price: 10,
    description: 'Etlerin hızlı sindirilmesini sağlayan soğuk içecek',
  },
  {
    food: 'Su',
    catagory: 'bevarages',
    img: 'imgs/su.jpg',
    price: 3,
    description: 'Susuzluğa bire bir',
  },
  {
    food: 'Fanta',
    catagory: 'bevarages',
    img: 'imgs/fanta.jpg',
    price: 10,
    description: 'Nam-ı Değer sarı kola',
  },
  {
    food: 'Kabak Tatlısı',
    catagory: 'desserts',
    img: 'imgs/pumpkin-dessert.jpg',
    price: 33,
    description: 'Tahin ve cevizle birlikte servis edilir',
  },
  {
    food: 'Kadayıf',
    catagory: 'desserts',
    img: 'imgs/kadayıf.jpg',
    price: 28,
    description: 'Antep fıstıklarıyla birlikte servis edilir',
  },
  {
    food: 'Küfene',
    catagory: 'desserts',
    img: 'imgs/künefe.jpg',
    price: 50,
    description: 'Peynir ve şerbetin buluştuğu bir tatlı',
  },
];

window.onload = findAll;

//buttons

let allBtn = document.getElementById('all');
let mainCourseBtn = document.getElementById('mainCourse');
let bevaragesBtn = document.getElementById('bevarages');
let dessertsBtn = document.getElementById('desserts');

let list = document.querySelector('.list');

///event.listeners

allBtn.addEventListener('click', findAll);
mainCourseBtn.addEventListener('click', findMainCourse);
bevaragesBtn.addEventListener('click', findBevarages);
dessertsBtn.addEventListener('click', findDesserts);

function findAll() {
  let element = '';
  all.map((item) => {
    element += createObj(item);
  });
  list.innerHTML = element;
}

function findMainCourse() {
  let element = '';
  all.map((item) => {
    if (item.catagory === 'Main') {
      element += createObj(item);
    }
  });
  list.innerHTML = element;
}

function findBevarages() {
  let element = '';
  all.map((item) => {
    if (item.catagory === 'bevarages') {
      element += createObj(item);
    }
  });
  list.innerHTML = element;
}

function findDesserts() {
  let element = '';
  all.map((item) => {
    if (item.catagory === 'desserts') {
      element += createObj(item);
    }
  });
  list.innerHTML = element;
}

function createObj(food) {
  let newOne = `

    <div id="food">
                <img src=${food.img} alt="">
                <div id="features">
                    <div style="display: flex; justify-content: space-between;">
                        <h3>${food.food}</h3>
                        <h3>${food.price} Lira</h3>
                    </div>
                    
                    <hr>
                    <p>${food.description}</p>
                </div>
                
            </div>
    
    `;

  return newOne;
}
