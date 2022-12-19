function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const sidebar = document.querySelector(".sidebar");
  menuToggle.classList.toggle("active");
  sidebar.classList.toggle("active");
}

function skillAnimate() {
  let sectionPos = skills.getBoundingClientRect().top;
  let screenPos = window.innerHeight;

  if (sectionPos < screenPos - 500) {
    console.log("show progress");
    let card = document.querySelectorAll(".card");
    for (let i = 0; i < card.length; i++) card[i].classList.add("active");
    window.removeEventListener("scroll", skillAnimate);
  } else {
    // console.log("hide progress");
  }
}
window.addEventListener("scroll", skillAnimate);

let inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    if (input.checkValidity()) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  });
});
