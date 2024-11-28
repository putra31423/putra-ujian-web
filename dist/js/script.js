const btnhamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

btnhamburger.addEventListener("click", () => {
  btnhamburger.classList.toggle("is-active");
  menu.classList.toggle("menu-active");
});

const loadmore = document.querySelector(".load-more-btn");
let jumlahitem = 3;


loadmore.addEventListener("click", () => {
  // console.log("testing");
  let boxes = [...document.querySelectorAll(".feedback-box .box")];
  for (let i = jumlahitem; i < jumlahitem + 3; i++) {
    boxes[i].style.display = "inline-block"
  }

  jumlahitem += 3;

  if (jumlahitem >= boxes.length){
    loadmore.style.display = "none";
  }
});
  