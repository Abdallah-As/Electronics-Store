let bar = document.getElementById("bar");
let listBar = document.getElementById("listBar");
let clo1se = document.getElementById("clo1se");

bar.onclick = function () {
  listBar.classList.remove("hide");

  clo1se.onclick = function () {
    listBar.classList.add("hide");
  };
};

document.getElementById("menu1").addEventListener("click", () => {
  myFunction();
});

function myFunction() {
  document.getElementById("list").classList.toggle("show");
}

document.getElementById("menu").onclick = function () {
  myFuNction();
};

function myFuNction() {
  document.getElementById("list2").classList.toggle("show");
}

document.getElementById("clc").onclick = function () {
  myFun();
};

function myFun() {
  document.getElementById("list").classList.toggle("show");

  document.getElementById("clc2").onclick = function () {
    myFun2();
  };
  function myFun2() {
    document.getElementById("list").classList.toggle("show");
  }

  document.getElementById("clc3").onclick = function () {
    myFun3();
  };
  function myFun3() {
    document.getElementById("list").classList.toggle("show");
  }

  document.getElementById("clc4").onclick = function () {
    myFun3();
  };
  function myFun3() {
    document.getElementById("list").classList.toggle("show");
  }

  document.getElementById("clc5").onclick = function () {
    myFun3();
  };
  function myFun3() {
    document.getElementById("list").classList.toggle("show");
  }
}

let up = document.getElementById("up");

window.onscroll = function (eo) {
  let value = scrollY;
  if (scrollY >= 366) {
    up.classList.remove("hide");
  } else if (scrollY <= 366) {
    up.classList.add("hide");
  }
};

document.getElementById("btnclk").onclick = function () {
  clk();
};
function clk() {
  document.getElementById("contact").classList.remove("hide");
}
