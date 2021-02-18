import "../scss/main.scss";
import moment from 'moment';
// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const firstName = "Maciek";
const age = 32;

const greet = (age, firstName) => {
  console.log(
    `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lata.`
  );
};

const calculate = (myNumber) => myNumber * 7;

console.log(calculate(7));

greet(32, "Maciek");

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

function helloWorld() {
  console.log("witaj świecie");
}

helloWorld();

createContent(".week-summary__description--js", "Siema siema");

createContent(".week-summary__title--js", "Podmieniony tytuł");

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed 💥`);
  },
  isOperating: true,
  name: "Death Star",
  levels: 357,
  population: 10000,
  isLightOn: true,
  commander: {
    name: "Darth Vader",
    age: 44,
  },
};

const myProperty = "name";

const showMeProperty = (myProperty) => {
  console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
};

showMeProperty("nieistnieje");

const humanOne = {
  name: "Maciek",
  age: 32,
  address: {
    street: "Warszawska",
    city: "Białystok",
  },
};

const humanTwo = {
  name: "Stefan",
  age: 31,
  address: humanOne.address,
};

console.log(typeof 2);
console.log(typeof "2");

if (humanOne.age > humanTwo.age) {
  console.log("Human one jest starszy");
} else if (humanOne.age === humanTwo.age) {
  console.log("są równolatkami");
} else if (humanOne.age === 32) {
  console.log("human one ma 32");
} else {
  console.log("human two jest starszy");
}

if (!("Javascript" == "Java")) {
  console.log("to sie wykona");
}

const myNumber = { name: "maciek" };

switch (myNumber) {
  case 7:
    console.log("jestem siódemką");
    break;
  case 9:
    console.log("jestem dziewiątką");
    break;
  default:
    console.log("jestem czymś innym");
}

if (32 > 20) {
  console.log("to prawda");
} else {
  console.log("to nieprawda");
}

const ageResult = humanOne.age > humanTwo.age ? age : false;

console.log(ageResult);

const button = document.querySelector(".action--js");

console.log(button);

button.addEventListener("click", () => {
  const heading = document.querySelector(".main__heading--js");
  heading.innerHTML = `Witaj Drogi Odwiedzający, nazywam się Maciek`;
  console.log();
});

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});

const startOfDay = moment().startOf('day').fromNow();

const timePlaceholder = document.querySelector('.time--js');

timePlaceholder.innerHTML = startOfDay;

document.cookie = 'name = maciek'
document.cookie = 'test = xd'

localStorage.setItem('klucz', JSON.stringify({auto: 'BMW'}));

console.log({auto: 'BMW'});
console.log(localStorage.getItem('klucz'));

const fromLocalStorage = localStorage.getItem('klucz');
const newObject = JSON.parse(fromLocalStorage);
newObject.model = 'Z5';
console.log(newObject);


const entry = localStorage.getItem('entry');
let result = '';

if(entry) {
  console.log(`Wartość z entry: ${entry}`)
  result = entry;
}

const entryInput = document.querySelector('.entry--js');
entryInput.value = result;


const entryButton = document.querySelector(".action--js");

entryButton.addEventListener("click", () => {
  localStorage.setItem('entry', entryInput.value);
});