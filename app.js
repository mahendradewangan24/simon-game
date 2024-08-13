let gameSeq = [];
let usersq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;

    levelup();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelup() {
  usersq = [];
  level++;
  h2.innerText = `level ${level}`;

  let ranInd = Math.floor(Math.random() * 4);
  let ranCol = btns[ranInd];
  let randBtn = document.querySelector(`.${ranCol}`);
  // console.log(ranInd);
  // console.log(ranCol);
  // console.log(randBtn);
  gameSeq.push(ranCol);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (usersq[idx] == gameSeq[idx]) {
    if (usersq.length == gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game over! Your score was <b>${level}<b> <br>Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  usersq.push(userColor);
  checkAns(usersq.length - 1);
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  gameSeq = [];
  started = false;
  usersq = [];
  level = 0;
}
