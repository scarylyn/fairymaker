// Image Arrays
const witchyBackground = [
  "images/bg-dm-1.png",
  "images/bg-dm-2.png",
  "images/bg-dm-3.png",
  "images/bg-dm-4.png",
  "images/bg-dm-5.png",
  "images/bg-dm-6.png",
];

const body = [
  "images/Samantha_Base-13.png",
  "images/Samantha_Base13a.png",
  "images/Samantha_Base13c.png",
  "images/Samantha_Base13d.png",
  "images/Samantha_Base-13e.png",
  "images/Samantha_Base13f.png",
  "images/Samantha_Base13g.png",
  "images/Samantha_Base-14.png",
  "images/Samantha_Base-15.png",
  "images/Samantha_Base-17.png",
  "images/Samantha_Base-18.png",
  "images/Samantha_Base-19.png",
  "images/Samantha_Base-20.png",
  "images/Samantha_Base-21.png",
  "images/Samantha_Base-22.png",
  "images/Samantha_Base-23.png",
  "images/Samantha_Base-24.png",
  "images/Samantha_Base-25.png",
  "images/Samantha_Base-26.png",
  "images/Samantha_Base-27.png",
];

const hair = [
  "images/hair-long-1.png",
  "images/hair-long-2.png",
  "images/hair-long-3.png",
  "images/hair-long-4.png",
  "images/hair-long-5.png",
  "images/hair-short-1.png",
  "images/hair-short-2.png",
  "images/hair-short-3.png",
  "images/hair-short-4.png",
  "images/hair-short-5.png",
  "images/hair-short-6.png",
  "images/witch-blue-1.png",
  "images/witch-blue-2.png",
  "images/witch-blue-3.png",
  "images/witch-pink-1.png",
  "images/witch-pink-2.png",
  "images/witch-pink-3.png",
  "images/witch-red-1.png",
  "images/witch-red-2.png",
  "images/witch-red-3.png",
  "images/witch-sage-1.png",
  "images/witch-sage-2.png",
  "images/witch-sage-3.png",
];

const dress = [
  "images/dress-1.png",
  "images/dress-2.png",
  "images/dress-3.png",
  "images/dress-4.png",
  "images/cloak-1.png",
  "images/cloak-2.png",
  "images/cloak-3.png",
  "images/cloak-4.png",
  "images/cloak-5.png",
];

const pet = [
  "images/pet-cat-black-1.png",
  "images/pet-cat-black-2.png",
  "images/pet-cat-brown-1.png",
  "images/pet-cat-brown-2.png",
  "images/pet-cat-white-1.png",
  "images/pet-cat-white-2.png",
];

const accent = [
  "images/accent-cauldron.png",
  "images/accent-potion-1.png",
  "images/accent-potion-2.png",
  "images/accent-potion-3.png",
  "images/blank.png",
];

// Background Functions
let bckgndIndex = 1;

function showBckgnd(index) {
  if (index >= 0 && index < witchyBackground.length) {
    let bckgndEl = document.getElementById("witchybckgnd");
    bckgndEl.src = witchyBackground[index];
    bckgndIndex = index;
    sessionStorage.setItem("witchybckgnd", JSON.stringify(index));
  }
}

function nextBckgnd() {
  if (bckgndIndex < witchyBackground.length - 1) {
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
    bckgndIndex = 6;
    showBckgnd(bckgndIndex);
  }
}

// Pet Functions
let petIndex = 1;

function showPet(index) {
  if (index >= 0 && index < pet.length) {
    let petEl = document.getElementById("witchypet");
    petEl.src = pet[index];
    petIndex = index;
    sessionStorage.setItem("witchypet", JSON.stringify(index));
  }
}

function nextPet() {
  if (petIndex < pet.length - 1) {
    showPet(petIndex + 1);
  } else {
    petIndex = 0;
    showPet(petIndex);
  }
}

function previousPet() {
  if (petIndex > 0) {
    showPet(petIndex - 1);
  } else {
    petIndex = 6;
    showPet(petIndex);
  }
}

// Body Functions
let bodyIndex = 15;

function showBody(index) {
  if (index >= 0 && index < body.length) {
    let bodyEl = document.getElementById("witchybody");
    bodyEl.src = body[index];
    bodyIndex = index;
    sessionStorage.setItem("witchybody", JSON.stringify(index));
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
    bodyIndex = 20;
    showBody(bodyIndex);
  }
}

// Hair Functions
let hairIndex = 1;

function showHair(index) {
  if (index >= 0 && index < hair.length) {
    let hairEl = document.getElementById("witchyhair");
    hairEl.src = hair[index];
    hairIndex = index;
    sessionStorage.setItem("witchyhair", JSON.stringify(index));
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
    hairIndex = 23;
    showHair(hairIndex);
  }
}

// Dress Functions
let dressIndex = 2;

function showDress(index) {
  if (index >= 0 && index < dress.length) {
    let dressEl = document.getElementById("witchydress");
    dressEl.src = dress[index];
    dressIndex = index;
    sessionStorage.setItem("witchydress", JSON.stringify(index));
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
    dressIndex = 9;
    showDress(dressIndex);
  }
}

// Accent Functions
let accentIndex = 0;

function showAccent(index) {
  if (index >= 0 && index < accent.length) {
    let accentEl = document.getElementById("witchyaccent");
    accentEl.src = accent[index];
    accentIndex = index;
    sessionStorage.setItem("witchyaccent", JSON.stringify(index));
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
    accentIndex = 5;
    showAccent(accentIndex);
  }
}

// Reset Button
function resetPage() {
  const input = document.getElementById("city");
  input.value = "";
  sessionStorage.clear();
  location.reload();
}

// Hide Button
function hideButtons() {
  const hiddenBtns = document.getElementsByClassName("btn");
  const titleChange = document.getElementById("pagetitle");
  for (let i = 0; i < hiddenBtns.length; i++) {
    if (hiddenBtns[i].style.display === "none") {
      hiddenBtns[i].style.display = "block";
      titleChange.innerHTML = `Create Your Weather Witch`;
    } else {
      hiddenBtns[i].style.display = "none";
      titleChange.innerHTML = `The Weather Witch`;
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
