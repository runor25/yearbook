// const hoverElement = document.querySelector(".page-title");
// const affectedElement = document.querySelector(".hrs");

const passwordInput = document.querySelector(".passin");
const showPasswordBtn = document.querySelector(".btn-show-pass");

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

// label fix

const inputs = document.querySelectorAll(".input100");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.toggle("has-val", input.value.trim() !== "");
    console.log("Input value:", input.value);
    console.log("Class list:", input.classList);
  });
});

const inputo = document.querySelectorAll(".inputpass");

inputo.forEach((inpu) => {
  if (inpu > "") {
    inpu.classList.add("has-val");
    inpu.classList.toggle("has-val", inpu.value.trim() !== "");
    console.log("Input value:", inpu.value);
    console.log("Class list:", inpu.classList);
  }
});

//      show password

showPasswordBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordBtn.classList.add("active"); // Optional: Add a class to change icon
  } else {
    passwordInput.type = "password";
    showPasswordBtn.classList.remove("active"); // Optional: Remove the class
  }
});
