// Premitives: numbers, strings, boolean
// More complex types: arrays, objects
// Function types, parameters

// Premitives

let age: number = 12;

let username: string | string[];

username = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

// Wrong

// person = {
//   isEmployee: true,
// };

let people: Person[];

// Type Inference

let course: string | number = "React course";

course = 1234;

// Functions and Types

function adds(a: number, b: number): number | string {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
