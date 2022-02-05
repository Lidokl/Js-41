console.log('module 1.1');
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
//     const value = [];
//     for (const product of products) {
//         if(product.hasOwnProperty(propName) )
//    // if(product.(propName) === propName) {----якщо одне значення потрібно
//     value.push(product[propName]);
//   }
// }
//  // console.log(product[propName]);
//   console.log(value);
//   return value;
  
// }
//     // Change code above this line
  
// //   console.log(products[0]);
// getAllPropValues("name")
// getAllPropValues("category") 

//                   задача 20

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//   const Price = [];
//     for (const product of products) {
//       if(product.name === productName) {
//       Price.push(product.price * product.quantity);
//       }
//     }
//     console.log(Price);
//   return Price;
//     // Пиши код выше этой строки
//   }
  
//   calculateTotalPrice("Blaster");
//   calculateTotalPrice("Radar");
//   calculateTotalPrice("Droid");
//   calculateTotalPrice("Grip");
//   calculateTotalPrice("Scanner")

// задача 21

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//      for (const potion of this.potions) {
//       if (newPotion.name === potion.name) {
//          return `Error! Potion ${newPotion.name} is already in your inventory!`;
//        }
//      }
//      this.potions.push(newPotion);
//    },

//   removePotion(potionName) {
   
//  for (const potion of this.potions) {
//     if (potion["name"] === potionName) {
//      const potionIndex = this.potions.indexOf(potion);
//       this.potions.splice(potionIndex, 1);
       
//       return this.potions;
      
//     }
//     }
//   return `Potion ${potionName} is not in inventory!`;
   
//   },
  
//   updatePotionName(oldName, newName) {
//    for ( const potion of this.potions) {

//     if (potion["name"] === oldName) {
//       potion["name"] = newName;
//       return this.potions;
    
//     }
//    }
//      return `Potion ${oldName} is not in inventory!`;
//    }, };


// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// function deliverPizza(pizzaName) {
//   console.log("Eating pizza <имя пиццы>");
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//      console.log(`Eating pizza ${pizzaName}`); });
          


// 

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(iteam => {
//       totalPrice += iteam }
// ;
//   return totalPrice;
// }

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total,player) => {
//   return player.playtime / player.gamesPlayed; } 0);


// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a,b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a,b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((c,d) => c-d);

// const sortedByDescentingRating = [...books].sort((c,d) => d-c);



// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const getSortedFriends = users => {
//   const names = [...users].filter(user => user.friends)
//   .sort((a,b) => a.friends.localeCompare(b.friends))
//   return names
// };
// console.log(getSortedFriends);




// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return  this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable =  this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// //pizzaPalace.order = checkPizza;
// console.log(pizzaPalace.checkPizza());
// pizzaPalace.checkPizza();

// // const bookShelf = {
// //   authors: ["Бернард Корнуэлл", "Роберт Шекли"],
// //   getAuthors() {
// //     return this.authors;
// //   },
// //   addAuthor(authorName) {
// //     this.authors.push(authorName);
// //   },
// // };

// // console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли"]
// // bookShelf.addAuthor("Ли Танит");
// // console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли", "Ли Танит"]


    // Задача 2 модуль 5

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
    
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//         // задача 11.  модуль 5
// class StringBuilder {
//     constructor(value) {
//     this.value = value;
//     }
//   getValue() {
//   return this.value;
//   };
  
//     padEnd(str) {
//     this.value += str;
    
//     };
    
//     padStart(str) {
//       this.value = str +  this.value;
//     };
    
//     padBoth(str) {
//       this.value = str +  this.value + str ;
//     };
    
//   }
  
  
//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="
  
//     //  задача 13
// class Storage {
//     // Change code below this line
//   #items;
//     constructor(items) {
//       this.#items = items;
//     }
  
//     getItems() {
//       return this.#items;
//     }
  
//     addItem(newItem) {
//       this.#items.push(newItem);
//     }
  
//     removeItem(itemToRemove) {
//       this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
//   }
  
//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
  
//                15задача

// class Car {
//   // Change code below this line
//   #brand;
// #model;
//   #price;
  
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//  set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

//       // задача 16


// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
  
  
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE)
//     this.#price = newPrice ;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//     //  задача 17
// class Car {
//   static #MAX_PRICE = 50000;
// static checkPrice(price) {
//    if(Car.#MAX_PRICE < price) {
//    return "Error! Price exceeds the maximum"
//    }
//      return "Success! Price is within acceptable limits"
//   // Change code below this line
// }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//         // задача 19

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     constructor ({email, accessLevel}){  
//       super(email); 
//      this.accessLevel = accessLevel  }
    
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     // Change code above this line
//   }
  
//   const mango = new Admin ({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
  

//задача 20 модуль 5 


// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     // Change code below this line
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     constructor({ email, accessLevel }) {
//       super(email);
//       this.accessLevel = accessLevel;
//     }
//    blacklistedEmails = []
//      blacklist(email) {
//      this.blacklistedEmails.push(email)
//      }
//     isBlacklisted(email) {
//     this.blacklistedEmails.includes(email);
//     return this.blacklistedEmails.includes(email); 
//     }
  
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
  
//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true
  /* * * * * * * * * * * * * * * * *
 * Pagination
 * javascript page navigation
 * * * * * * * * * * * * * * * * */

var Pagination = {

    code: '',

    // --------------------
    // Utility
    // --------------------

    // converting initialize data
    Extend: function(data) {
        data = data || {};
        Pagination.size = data.size || 300;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 3;
    },

    // add pages by number (from [s] to [f])
    Add: function(s, f) {
        for (var i = s; i < f; i++) {
            Pagination.code += '<a>' + i + '</a>';
        }
    },

    // add last page with separator
    Last: function() {
        Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
    },

    // add first page with separator
    First: function() {
        Pagination.code += '<a>1</a><i>...</i>';
    },



    // --------------------
    // Handlers
    // --------------------

    // change page
    Click: function() {
        Pagination.page = +this.innerHTML;
        Pagination.Start();
    },

    // previous page
    Prev: function() {
        Pagination.page--;
        if (Pagination.page < 1) {
            Pagination.page = 1;
        }
        Pagination.Start();
    },

    // next page
    Next: function() {
        Pagination.page++;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        Pagination.Start();
    },