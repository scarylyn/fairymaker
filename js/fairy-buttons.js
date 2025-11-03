// Image Arrays
const backgrounds = [
  "../images/dollbckgnd0.png",
  "../images/dollbckgnd1.png",
  "../images/dollbckgnd2.png",
  "../images/dollbckgnd3.png",
  "../images/dollbckgnd4.png",
];

const wings = [
  "../images/wing-dm001.png",
  "../images/wing-dm002.png",
  "../images/wing-dm003.png",
  "../images/wing-dm004.png",
  "../images/wing-dm005.png",
  "../images/wing-dm006.png",
  "../images/wing-dm007.png",
];

const body = [
  "../images/Samantha_Base-13.png",
  "../images/Samantha_Base13a.png",
  "../images/Samantha_Base13c.png",
  "../images/Samantha_Base13d.png",
  "../images/Samantha_Base-13e.png",
  "../images/Samantha_Base13f.png",
  "../images/Samantha_Base13g.png",
  "../images/Samantha_Base-14.png",
  "../images/Samantha_Base-15.png",
];

const hair = [
  "../images/hair-dm022.png",
  "../images/hair-dm023.png",
  "../images/hair-dm024.png",
  "../images/hair-dm025.png",
  "../images/hair-dm026.png",
  "../images/hair-dm027.png",
];

const dress = [
  "../images/dress-dm005.png",
  "../images/dress-dm006.png",
  "../images/dress-dm007.png",
  "../images/dress-dm008.png",
];

const shoes = [
  "../images/shoe-dm004.png",
  "../images/shoe-dm005.png",
  "../images/shoe-dm006.png",
  "../images/shoe-dm007.png",
];

const accent = [
  "../images/acc-dm058.png",
  "../images/acc-dm062.png",
  "../images/acc-dm069.png",
  "../images/blank.png",
];

// Background Functions
let bckgndIndex = 0;

function showBckgnd(index) {
  if (index >= 0 && index < backgrounds.length) {
    let bckgndEl = document.getElementById("dollbckgnd");
    bckgndEl.src = backgrounds[index];
    bckgndIndex = index;
    localStorage.setItem("background", JSON.stringify(index));
  }
}

function nextBckgnd() {
  if (bckgndIndex < backgrounds.length - 1) {
    showBckgnd(bckgndIndex + 1);
  }
}

function previousBckgnd() {
  if (bckgndIndex > 0) {
    showBckgnd(bckgndIndex - 1);
  }
}

// Wings Functions
let wingsIndex = 0;

function showWings(index) {
  if (index >= 0 && index < wings.length) {
    let wingsEl = document.getElementById("wings");
    wingsEl.src = wings[index];
    wingsIndex = index;
    localStorage.setItem("wings", JSON.stringify(index));
  }
}

function nextWings() {
  if (wingsIndex < wings.length - 1) {
    showWings(wingsIndex + 1);
  }
}

function previousWings() {
  if (wingsIndex > 0) {
    showWings(wingsIndex - 1);
  }
}

// Body Functions
let bodyIndex = 0;

function showBody(index) {
  if (index >= 0 && index < body.length) {
    let bodyEl = document.getElementById("dollbody");
    bodyEl.src = body[index];
    bodyIndex = index;
    localStorage.setItem("body", JSON.stringify(index));
  }
}

function nextBody() {
  if (bodyIndex < body.length - 1) {
    showBody(bodyIndex + 1);
  }
}

function previousBody() {
  if (bodyIndex > 0) {
    showBody(bodyIndex - 1);
  }
}

// Hair Functions
let hairIndex = 0;

function showHair(index) {
  if (index >= 0 && index < hair.length) {
    let hairEl = document.getElementById("hair");
    hairEl.src = hair[index];
    hairIndex = index;
    localStorage.setItem("hair", JSON.stringify(index));
  }
}

function nextHair() {
  if (hairIndex < hair.length - 1) {
    showHair(hairIndex + 1);
  }
}

function previousHair() {
  if (hairIndex > 0) {
    showHair(hairIndex - 1);
  }
}

// Dress Functions
let dressIndex = 0;

function showDress(index) {
  if (index >= 0 && index < dress.length) {
    let dressEl = document.getElementById("dress");
    dressEl.src = dress[index];
    dressIndex = index;
    localStorage.setItem("dress", JSON.stringify(index));
  }
}

function nextDress() {
  if (dressIndex < dress.length - 1) {
    showDress(dressIndex + 1);
  }
}

function previousDress() {
  if (dressIndex > 0) {
    showDress(dressIndex - 1);
  }
}

// Shoe Functions
let shoesIndex = 0;

function showShoes(index) {
  if (index >= 0 && index < shoes.length) {
    let shoesEl = document.getElementById("shoes");
    shoesEl.src = shoes[index];
    shoesIndex = index;
    localStorage.setItem("shoes", JSON.stringify(index));
  }
}

function nextShoes() {
  if (shoesIndex < shoes.length - 1) {
    showShoes(shoesIndex + 1);
  }
}

function previousShoes() {
  if (shoesIndex > 0) {
    showShoes(shoesIndex - 1);
  }
}

// Accent Functions
let accentIndex = 0;

function showAccent(index) {
  if (index >= 0 && index < accent.length) {
    let accentEl = document.getElementById("accent");
    accentEl.src = accent[index];
    accentIndex = index;
    localStorage.setItem("accent", JSON.stringify(index));
  }
}

function nextAccent() {
  if (accentIndex < accent.length - 1) {
    showAccent(accentIndex + 1);
  }
}

function previousAccent() {
  if (accentIndex > 0) {
    showAccent(accentIndex - 1);
  }
}
