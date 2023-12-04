//===== Back to top =====//
//Get the button
let mybutton = document.querySelector(".btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// var toggleButtons = document.querySelectorAll(".toggle-password");

// toggleButtons.forEach(function(button) {
//   button.addEventListener("click", function() {
//     if (this.classList.contains("bi-eye")) {
//       this.classList.remove("bi-eye");
//       this.classList.add("bi-eye-slash");
//     } else {
//       this.classList.remove("bi-eye-slash");
//       this.classList.add("bi-eye");
//     }

//     var input = document.querySelector(this.getAttribute("toggle"));

//     if (input.getAttribute("type") === "password") {
//       input.setAttribute("type", "text");
//     } else {
//       input.setAttribute("type", "password");
//     }
//   });
// });

