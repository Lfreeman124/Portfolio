let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let e = document.getElementById("e");
let f = document.getElementById("f");
let g = document.getElementById("g");
let h = document.getElementById("h");
let i = document.getElementById("i");
let j = document.getElementById("j");
let k = document.getElementById("k");
let l = document.getElementById("l");
let m = document.getElementById("m");
let n = document.getElementById("n");
let o = document.getElementById("o");
let p = document.getElementById("p");

let ids = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p];

for (let i of ids) {
  let random1 = Math.floor(Math.random() * 40);
  let random2 = Math.floor(Math.random() * 36);
  i.style.gridArea = `${random1} / ${random2} / ${random1 + 4} / ${
    random2 + 5
  }`;
}
