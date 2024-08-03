// const hoverElement = document.querySelector(".page-title");
// const affectedElement = document.querySelector(".hrs");

// hoverElement.addEventListener("mouseover", () => {
//   affectedElement.style.backgroundColor = "red";
//   affectedElement.style.width = "";
// });

// hoverElement.addEventListener("mouseout", () => {
//   affectedElement.style.backgroundColor = "";
//   affectedElement.style.width = ""; // Reset to default
// });
const hoverElement = document.querySelector(".page-title");
const affectedElement = document.querySelector(".hrs hr");

if (hoverElement) {
  // Check if hoverElement exists
  hoverElement.addEventListener("mouseover", () => {
    affectedElement.style.background =
      "-webkit-linear-gradient(left, #21d4fd, #b721ff)";
    affectedElement.style.width = "";
    affectedElement.style.animation = "flipInX 0.6s ease";
  });

  hoverElement.addEventListener("mouseout", () => {
    affectedElement.style.background = "";
    affectedElement.style.width = ""; // Reset to default
    affectedElement.style.animation = "";
  });
} else {
  console.error("Element with class '.page-title' not found!");
}
