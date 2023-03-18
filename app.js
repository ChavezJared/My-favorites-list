let a = document.createElement("a");
a.herf = 'https://github.com/ChavezJared/My-favorites-list.git';
a.textContent = 'Favorite Movies and things in my closet';

document.body.appendChild(a);

const list = document.getElementById('my-favorite-books');
let newBook = document.createElement('li');
newBook.textContent = 'Eleven Rings';
list.appendChild(newBook);

let newBook1 = document.createElement(li);
newBook1.innerText = 'Cant Hurt Me';
let second = list.children[1];
console.log(second);
list.insertBefore(newBook1, second);

const closeList = document.getElementById('my-closet');
let newCloset = document.createElement(li);
newCloset.textContent = 'Jordans';
list.appendChild(newCloset);
