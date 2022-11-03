function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const sidebar = document.querySelector(".sidebar");
  menuToggle.classList.toggle("active");
  sidebar.classList.toggle("active");
}

let skills = document.getElementById("skills");
let percent = document.querySelectorAll(".percent");
let dot = document.querySelectorAll(".dot");

// window.addEventListener("scroll", () => {
//   let sectionPos = skills.getBoundingClientRect().top;
//   let screenPos = window.innerHeight;

//   if (sectionPos < screenPos - 500) {
//     console.log("show progress");
//     percent.classList.add(".dot_animate");
//   } else {
//     console.log("hide progress");
//   }
// });

function skillAnimate() {
  let sectionPos = skills.getBoundingClientRect().top;
  let screenPos = window.innerHeight;

  if (sectionPos < screenPos - 500) {
    console.log("show progress");
    let card = document.querySelectorAll(".card");
    for (let i = 0; i < card.length; i++) card[i].classList.add("active");
    window.removeEventListener("scroll", skillAnimate);
  } else {
    console.log("hide progress");
  }
}
window.addEventListener("scroll", skillAnimate);
