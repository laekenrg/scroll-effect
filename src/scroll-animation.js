let fondo = document.getElementById("fondo");
let solRE = document.getElementById("solRE");
let ciclista = document.getElementById("ciclista");
let monDE = document.getElementById("monDE");
let monIZ = document.getElementById("monIZ");
let nubeRE = document.getElementById("nubeRE");
let rocas = document.getElementById("rocas");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  fondo.style.marginLeft = value * 0.7 + "px";
  ciclista.style.marginLeft = value * 7 + "px";
  monIZ.style.left = value * -5 + "px";
  monDE.style.right = value * 1 + "px";
  solRE.style.left = value * -5 + "px";
  nubeRE.style.left = value * -5 + "px";
  rocas.style.left = value * -5 + "px";
});
