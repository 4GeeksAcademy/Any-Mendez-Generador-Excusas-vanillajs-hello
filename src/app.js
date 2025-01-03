/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const excusaElement = document.getElementById("excusa");
  let who = ["El niño", "Mi sobrina", "El perro", "El cocodrilo"];
  let action = ["tiró", "mordió", "mojó", "robó"];
  let what = ["mi papel", "la televisión", "el agua", "la leche"];
  let when = [
    "mientras salía de la escuela",
    "justo antes de llegar",
    "al salir de la iglesia",
    "en la noche"
  ];
  function GenerandoExcusas() {
    let anyWho = who[Math.floor(Math.random() * who.length)];
    let anyAction = action[Math.floor(Math.random() * action.length)];
    let anyWhat = what[Math.floor(Math.random() * what.length)];
    let anyWhen = when[Math.floor(Math.random() * when.length)];

    let excusa = anyWho + " " + anyAction + " " + anyWhat + " " + anyWhen + ".";
    return excusa;
  }
  excusaElement.textContent = GenerandoExcusas();
  // console.log("Hello Rigo from the console!");
};
