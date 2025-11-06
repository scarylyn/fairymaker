// Image Arrays
const backgrounds = [
  // These are the backgrounds for the doll
  "images/fairy/dollbckgnd0.png",
  "images/fairy/dollbckgnd1.png",
  "images/fairy/dollbckgnd2.png",
  "images/fairy/dollbckgnd3.png",
  "images/fairy/dollbckgnd4.png",
];

const wings = [
  "images/fairy/wing-dm001.png",
  "images/fairy/wing-dm002.png",
  "images/fairy/wing-dm003.png",
  "images/fairy/wing-dm004.png",
  "images/fairy/wing-dm005.png",
  "images/fairy/wing-dm006.png",
  "images/fairy/wing-dm007.png",
];

const body = [
  "images/bodies/Samantha_Base-13.png",
  "images/bodies/Samantha_Base13a.png",
  "images/bodies/Samantha_Base13c.png",
  "images/bodies/Samantha_Base13d.png",
  "images/bodies/Samantha_Base-13e.png",
  "images/bodies/Samantha_Base13f.png",
  "images/bodies/Samantha_Base13g.png",
  "images/bodies/Samantha_Base-14.png",
  "images/bodies/Samantha_Base-15.png",
];

const hair = [
  "images/fairy/hair-dm022.png",
  "images/fairy/hair-dm023.png",
  "images/fairy/hair-dm024.png",
  "images/fairy/hair-dm025.png",
  "images/fairy/hair-dm026.png",
  "images/fairy/hair-dm027.png",
];

const dress = [
  "images/fairy/dress-dm005.png",
  "images/fairy/dress-dm006.png",
  "images/fairy/dress-dm007.png",
  "images/fairy/dress-dm008.png",
];

const shoes = [
  "images/fairy/shoe-dm004.png",
  "images/fairy/shoe-dm005.png",
  "images/fairy/shoe-dm006.png",
  "images/fairy/shoe-dm007.png",
];

const accent = [
  "images/fairy/acc-dm058.png",
  "images/fairy/acc-dm062.png",
  "images/fairy/acc-dm069.png",
  "images/blank.png",
];

// Doll Background Functions
let bckgndIndex = 0;

function showBckgnd(index) {
  if (index >= 0 && index < backgrounds.length) {
    let bckgndEl = document.getElementById("dollbckgnd");
    bckgndEl.src = backgrounds[index];
    bckgndIndex = index;
    localStorage.setItem("fairybckgnd", JSON.stringify(index));
  }
}

function nextBckgnd() {
  if (bckgndIndex < backgrounds.length - 1) {
    showBckgnd(bckgndIndex + 1);
  } else {
    bckgndIndex = 0;
    showBckgnd(bckgndIndex);
  }
}

function previousBckgnd() {
  if (bckgndIndex > 0) {
    showBckgnd(bckgndIndex - 1);
  } else {
    bckgndIndex = 5;
    showBckgnd(bckgndIndex);
  }
}

// Wings Functions
let wingsIndex = 2;

function showWings(index) {
  if (index >= 0 && index < wings.length) {
    let wingsEl = document.getElementById("wings");
    wingsEl.src = wings[index];
    wingsIndex = index;
    localStorage.setItem("fairywings", JSON.stringify(index));
  }
}

function nextWings() {
  if (wingsIndex < wings.length - 1) {
    showWings(wingsIndex + 1);
  } else {
    wingsIndex = 0;
    showWings(wingsIndex);
  }
}

function previousWings() {
  if (wingsIndex > 0) {
    showWings(wingsIndex - 1);
  } else {
    wingsIndex = 7;
    showWings(wingsIndex);
  }
}

// Body Functions
let bodyIndex = 2;

function showBody(index) {
  if (index >= 0 && index < body.length) {
    let bodyEl = document.getElementById("dollbody");
    bodyEl.src = body[index];
    bodyIndex = index;
    localStorage.setItem("fairybody", JSON.stringify(index));
  }
}

function nextBody() {
  if (bodyIndex < body.length - 1) {
    showBody(bodyIndex + 1);
  } else {
    bodyIndex = 0;
    showBody(bodyIndex);
  }
}

function previousBody() {
  if (bodyIndex > 0) {
    showBody(bodyIndex - 1);
  } else {
    bodyIndex = 9;
    showBody(bodyIndex);
  }
}

// Hair Functions
let hairIndex = 1;

function showHair(index) {
  if (index >= 0 && index < hair.length) {
    let hairEl = document.getElementById("hair");
    hairEl.src = hair[index];
    hairIndex = index;
    localStorage.setItem("fairyhair", JSON.stringify(index));
  }
}

function nextHair() {
  if (hairIndex < hair.length - 1) {
    showHair(hairIndex + 1);
  } else {
    hairIndex = 0;
    showHair(hairIndex);
  }
}

function previousHair() {
  if (hairIndex > 0) {
    showHair(hairIndex - 1);
  } else {
    hairIndex = 6;
    showHair(hairIndex);
  }
}

// Dress Functions
let dressIndex = 0;

function showDress(index) {
  if (index >= 0 && index < dress.length) {
    let dressEl = document.getElementById("dress");
    dressEl.src = dress[index];
    dressIndex = index;
    localStorage.setItem("fairydress", JSON.stringify(index));
  }
}

function nextDress() {
  if (dressIndex < dress.length - 1) {
    showDress(dressIndex + 1);
  } else {
    dressIndex = 0;
    showDress(dressIndex);
  }
}

function previousDress() {
  if (dressIndex > 0) {
    showDress(dressIndex - 1);
  } else {
    dressIndex = 4;
    showDress(dressIndex);
  }
}

// Shoe Functions
let shoesIndex = 0;

function showShoes(index) {
  if (index >= 0 && index < shoes.length) {
    let shoesEl = document.getElementById("shoes");
    shoesEl.src = shoes[index];
    shoesIndex = index;
    localStorage.setItem("fairyshoes", JSON.stringify(index));
  }
}

function nextShoes() {
  if (shoesIndex < shoes.length - 1) {
    showShoes(shoesIndex + 1);
  } else {
    shoesIndex = 0;
    showShoes(shoesIndex);
  }
}

function previousShoes() {
  if (shoesIndex > 0) {
    showShoes(shoesIndex - 1);
  } else {
    shoesIndex = 4;
    showShoes(shoesIndex);
  }
}

// Accent Functions
let accentIndex = 1;

function showAccent(index) {
  if (index >= 0 && index < accent.length) {
    let accentEl = document.getElementById("accent");
    accentEl.src = accent[index];
    accentIndex = index;
    localStorage.setItem("fairyaccent", JSON.stringify(index));
  }
}

function nextAccent() {
  if (accentIndex < accent.length - 1) {
    showAccent(accentIndex + 1);
  } else {
    accentIndex = 0;
    showAccent(accentIndex);
  }
}

function previousAccent() {
  if (accentIndex > 0) {
    showAccent(accentIndex - 1);
  } else {
    accentIndex = 4;
    showAccent(accentIndex);
  }
}

// Hide Button
function hideButtons() {
  const hiddenBtns = document.getElementsByClassName("btn");
  const titleChange = document.getElementById("pagetitle");

  for (let i = 0; i < hiddenBtns.length; i++) {
    if (hiddenBtns[i].style.display === "none") {
      hiddenBtns[i].style.display = "block";
      titleChange.innerHTML = `Create Your Weather Fairy`;
    } else {
      hiddenBtns[i].style.display = "none";
      titleChange.innerHTML = `The Weather Fairy`;
    }
  }

  // Toggle button text
  const hideBtn = document.getElementById("hide");
  if (hideBtn.textContent === "Hide Buttons") {
    hideBtn.textContent = "Show Buttons";
  } else {
    hideBtn.textContent = "Hide Buttons";
  }
}
