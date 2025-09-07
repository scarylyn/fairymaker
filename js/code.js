window.onload = init;

function init() {
  console.log("window has loaded");
  state.a = 1;
  state.b = 1;
  state.c = 1;
  state.d = 1;
  state.e = 1;
  state.f = 1;
  state.g = 1;
}

var state = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
};

const nxtbckgnd = document.getElementById("nextbckgnd");

nxtbckgnd.addEventListener("click", function nextBckgnd() {
  console.log("inside function nextBckgnd");
  console.log(state.f);
  var bckgnd = document.getElementById("dollbckgnd");
  if (state.f === 0) {
    bckgnd.setAttribute("class", "dollbckgnd1");
    state.f++;
    console.log(state.f);
  } else if (state.f === 1) {
    bckgnd.setAttribute("class", "dollbckgnd2");
    state.f++;
    console.log(state.f);
  } else if (state.f === 2) {
    bckgnd.setAttribute("class", "dollbckgnd3");
    state.f++;
    console.log(state.f);
  } else if (state.f === 3) {
    bckgnd.setAttribute("class", "dollbckgnd4");
    state.f++;
    console.log(state.f);
  } else if (state.f === 4) {
    bckgnd.setAttribute("class", "dollbckgnd5");
    state.f = 0;
  }
});

const nxtwings = document.getElementById("nextwings");

nxtwings.addEventListener("click", function nextWings() {
  console.log("inside function nextWings");
  console.log(state.a);
  var wings = document.getElementById("wings");
  if (state.a === 0) {
    wings.setAttribute("class", "wings1");
    state.a++;
    console.log(state.a);
  } else if (state.a === 1) {
    wings.setAttribute("class", "wings2");
    state.a++;
    console.log(state.a);
  } else if (state.a === 2) {
    wings.setAttribute("class", "wings3");
    state.a++;
    console.log(state.a);
  } else if (state.a === 3) {
    wings.setAttribute("class", "wings4");
    state.a++;
    console.log(state.a);
  } else if (state.a === 4) {
    wings.setAttribute("class", "wings5");
    state.a++;
    console.log(state.a);
  } else if (state.a === 5) {
    wings.setAttribute("class", "wings6");
    state.a++;
    console.log(state.a);
  } else if (state.a === 6) {
    wings.setAttribute("class", "wings7");
    state.a = 0;
  }
});

const nxtbody = document.getElementById("nextbody");

nxtbody.addEventListener("click", function nextBody() {
  console.log("inside function nextBody");
  console.log(state.b);
  var body = document.getElementById("body");
  if (state.b === 0) {
    body.setAttribute("class", "body1");
    state.b++;
    console.log(state.b);
  } else if (state.b === 1) {
    body.setAttribute("class", "body2");
    state.b++;
    console.log(state.b);
  } else if (state.b === 2) {
    body.setAttribute("class", "body3");
    state.b++;
    console.log(state.b);
  } else if (state.b === 3) {
    body.setAttribute("class", "body4");
    state.b++;
    console.log(state.b);
  } else if (state.b === 4) {
    body.setAttribute("class", "body5");
    state.b = 0;
  }
});

const nxthair = document.getElementById("nexthair");

nxthair.addEventListener("click", function nextHair() {
  console.log("inside function nextHair");
  console.log(state.c);
  var hair = document.getElementById("hair");
  if (state.c === 0) {
    hair.setAttribute("class", "hair1");
    state.c++;
    console.log(state.c);
  } else if (state.c === 1) {
    hair.setAttribute("class", "hair2");
    state.c++;
    console.log(state.c);
  } else if (state.c === 2) {
    hair.setAttribute("class", "hair3");
    state.c++;
    console.log(state.c);
  } else if (state.c === 3) {
    hair.setAttribute("class", "hair4");
    state.c++;
    console.log(state.c);
  } else if (state.c === 4) {
    hair.setAttribute("class", "hair5");
    state.c++;
    console.log(state.c);
  } else if (state.c === 5) {
    hair.setAttribute("class", "hair6");
    state.c = 0;
  }
});

const nxtdress = document.getElementById("nextdress");

nxtdress.addEventListener("click", function nextDress() {
  console.log("inside function nextDress");
  console.log(state.d);
  var dress = document.getElementById("dress");
  if (state.d === 0) {
    dress.setAttribute("class", "dress1");
    state.d++;
    console.log(state.d);
  } else if (state.d === 1) {
    dress.setAttribute("class", "dress2");
    state.d++;
    console.log(state.d);
  } else if (state.d === 2) {
    dress.setAttribute("class", "dress3");
    state.d++;
    console.log(state.d);
  } else if (state.d === 3) {
    dress.setAttribute("class", "dress4");
    state.d = 0;
  }
});

const nxtshoes = document.getElementById("nextshoes");

nxtshoes.addEventListener("click", function nextShoes() {
  console.log("inside function nextShoes");
  console.log(state.e);
  var shoes = document.getElementById("shoes");
  if (state.e === 0) {
    shoes.setAttribute("class", "shoes1");
    state.e++;
    console.log(state.e);
  } else if (state.e === 1) {
    shoes.setAttribute("class", "shoes2");
    state.e++;
    console.log(state.e);
  } else if (state.e === 2) {
    shoes.setAttribute("class", "shoes3");
    state.e++;
    console.log(state.e);
  } else if (state.e === 3) {
    shoes.setAttribute("class", "shoes4");
    state.e = 0;
  }
});

const nxtaccent = document.getElementById("nextaccent");

nxtaccent.addEventListener("click", function nextAccent() {
  console.log("inside function nextAccent");
  console.log(state.g);
  var accent = document.getElementById("accent");
  if (state.g === 0) {
    accent.setAttribute("class", "accent1");
    state.g++;
    console.log(state.g);
  } else if (state.g === 1) {
    accent.setAttribute("class", "accent2");
    state.g++;
    console.log(state.g);
  } else if (state.g === 2) {
    accent.setAttribute("class", "accent3");
    state.g = 0;
  }
});
