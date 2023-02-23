let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
 let mainTitle = document.getElementById('main-title')
 mainTitle.innerText = "Dom's Website"
 console.log(mainTitle);

  // Part 2
this.body.style.backgroundColor = 'lightpink'

  // Part 3
//Select DOM's Favorite Things list and remove the last list item.
const favThings = document.getElementById('favorite-things')
console.log(favThings);
favThings.lastElementChild.remove()

  // Part 4
//Select all .special-titleclass elements and change their font-sizeto 2rem
const specialTitle = document.querySelectorAll('.special-title');
console.log(specialTitle);

specialTitle.forEach(element => {
  element.style.fontSize = '2rem';
});

  // Part 5
//Access the Past Races list and remove Chicago.
const pastRaces = document.getElementById('past-races')
console.log(pastRaces.children);

const remChicago = pastRaces.children[3]
console.log(remChicago.textContent);
remChicago.remove()

  // Part 6
//Let's add to DOM's Past Races list Create a new <li>element, 
//change the new <li>text to the name of a city, and append it to the Past Races list.
const newLi = document.createElement('li')
newLi.textContent = "New York"
pastRaces.appendChild(newLi)
console.log(newLi);

  // Part 7
//create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text.
const newDiv = document.createElement('div')
newDiv.classList.toggle('blog-post')
console.log(newDiv);
const addLi = document.createElement('h2')
const addP = document.createElement('p')



  // Part 8


  // Part 9


});
