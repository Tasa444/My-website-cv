// Add the class 'slide-in' to the image when the page finishes loading
window.addEventListener("load", function () {
  const image = document.querySelector(".tasaImg");
  image.classList.add("slide-in"); // Add the slide-in class to the image
});

// Function to add the slide-in effect to the logo
function slideInLogo() {
  // Select the logo element
  var logo = document.querySelector(".logoContact");

  // Add the 'logo-slide-in' class after the page loads
  logo.classList.add("logo-slide-in");
}

// Wait for the DOM to fully load before executing the function
window.addEventListener("load", slideInLogo);
