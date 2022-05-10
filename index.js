const sayHi = name => console.log("Hi " + name);
const sayBye = name => console.log("I'm tired " + name + " see you... Bye!");

sayHi("Stefano");
sayHi("Simon");

const greetWithEnthusiasm = (str, symbol, customFunc) => {
  const enthusiasmStr = str + symbol;

  customFunc(enthusiasmStr); //sayHi("Sidath!!!"); sayBye("Adex<>")
};

greetWithEnthusiasm("Sidath", "!!!", sayHi);
greetWithEnthusiasm("Adex", "<>", sayBye);
greetWithEnthusiasm("Adex", "<>", sayBye);
greetWithEnthusiasm("Adex", "<>", sayBye);
greetWithEnthusiasm("Sidath", "!!!", sayHi);
greetWithEnthusiasm("Adex", "<>", sayBye);

const animals = ["cat", "dog", "mouse", "horse", "lion", "lizard", "giraffe", "elephant", "crocodile", "snake"];

const displayAnimal = string => {
  console.log("I looked inside and found a " + string);
};

const displayAnimal2 = string => {
  console.log("Hey what a nice " + string + "!");
};

// displayAnimal(animals[2])

const getRandomAnimal = (array, callback) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const selectedAnimal = array[randomIndex];
  callback(selectedAnimal);
};

getRandomAnimal(animals, displayAnimal);
getRandomAnimal(animals, displayAnimal2);
getRandomAnimal(animals, name => console.log("I love " + name + "s"));

console.log(displayAnimal2);

//div.addEventListener("click", function(){})

//.then((data) =>  )

// const then = (callback) => {
// Computed DATA...

//     callback(data)
// }

const withRest = (p1, p2, p3, ...rest) => {
  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(rest);
};

withRest(2, 5, 7, 9, 10, 12, 13);

const person = {
  name: "Stefano",
  location: { country: "Italy" },
  job: "Front-ender",
};

// console.log(person.name)
// console.log(person.location.country)
// console.log(person.job)

const {
  name,
  location: { country },
  job,
} = person;

console.log(country);

const getPerson = obj => {
  console.log(obj.location.country);
  console.log(obj);
};

const getPerson2 = ({ name, job, location: { country } }) => {
  console.log(name);
  console.log(job);
  console.log(country);
};

getPerson(person);
getPerson2(person);

const randomArr = ["a", "b", "c", "e", "f"];

const [, , third, ...rest] = randomArr;

console.log(third);
console.log(rest);

const person2 = {
  name: "Riccardo",
  job: "Back-ender",
};

// const person3 = Object.assign({}, person, {job: "homeless"}, person2}
const person3 = { ...person, job: "homeless", ...person2 };

person3.job = "random";

console.log(person);
console.log(person2);
console.log(person3);

const randomArr2 = ["8", "9", "10"];

const newArr = [...randomArr, "HEY", ...randomArr2];

console.log(newArr);
const arrFromString = [..."Hello Epicoders"];
console.log(arrFromString);
