/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function getRandomElemnt(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  function generateExcuse() {
    let excuse =
      getRandomElemnt(who) +
      " " +
      getRandomElemnt(action) +
      " " +
      getRandomElemnt(what) +
      " " +
      getRandomElemnt(when) +
      ".";
    return excuse;
  }

  document.getElementById("excuse").innerHTML = generateExcuse();
};
