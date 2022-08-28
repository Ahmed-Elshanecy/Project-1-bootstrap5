// slider height

let upperBar = document.querySelector(".upper-bar");
let navBar = document.querySelector(".navbar");
let slider = document.querySelector("#slider");
let carousalItems = document.querySelectorAll(
  ".slider .carousel-inner .carousel-item"
);
let imgs = document.querySelectorAll(".slider .carousel-inner img");

let height1 = upperBar.clientHeight;
let height2 = navBar.clientHeight;

slider.style.height = window.innerHeight - (height1 + height2) + "px";

for (let i = 0; i < carousalItems.length; i++) {
  carousalItems[i].style.height =
    window.innerHeight - (height1 + height2) + "px";
}

for (let i = 0; i < imgs.length; i++) {
  imgs[i].style.height = window.innerHeight - (height1 + height2) + "px";
}
// end slider

// start shuffle
let buttons = document.querySelectorAll(".featured-work .container button");
let btnArray = Array.from(buttons);
let featuredImgs = document.querySelectorAll(".featured-work  img");

btnArray.forEach((button) => {
  button.addEventListener("click", function (ele) {
    // default styles fot button
    for (let i = 0; i < btnArray.length; i++) {
      btnArray[i].style.color = "#c08a37";
      btnArray[i].style.backgroundColor = "white";
    }
    button.style.color = "red";
    button.style.backgroundColor = "#198754";
    // imgs
    for (let i = 0; i < featuredImgs.length; i++) {
      featuredImgs[i].style.opacity = "0.2";
      if (featuredImgs[i].classList.contains(button.dataset.show)) {
        featuredImgs[i].style.opacity = "1";
      }
    }
  });
});

// end shuffle
// start statistics
let spanNum = document.getElementsByClassName("number");
let spansArray = Array.from(spanNum);
let stats = document.getElementById("stats");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop - 500) {
    if (!started) {
      spansArray.forEach((span) => startCount(span));
      started = true;
    }
  }
};
function startCount(ele) {
  let target = ele.dataset.target;
  let myInterval = setInterval(() => {
    if (target < 500) {
      ele.innerHTML++;
      if (ele.innerHTML == target) {
        clearInterval(myInterval);
      }
    } else if (target == 1204) {
      ele.innerHTML = +ele.innerHTML + 4;
      if (ele.innerHTML == target) {
        clearInterval(myInterval);
      }
    }
    if (target == 4060) {
      ele.innerHTML = +ele.innerHTML + 10;
      if (ele.innerHTML == target) {
        clearInterval(myInterval);
      }
    }
  }, 2000 / target);
}
// end statistics
