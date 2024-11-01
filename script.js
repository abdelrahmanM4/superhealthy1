document.addEventListener("DOMContentLoaded", function () {
  const hasVisited = localStorage.getItem("hasVisited");

  if (!hasVisited) {
    alert(
      "Welcome to Super Healthy! This site offers sustainable agricultural solutions with high-quality organic products. Enjoy exploring our range!"
    );
    localStorage.setItem("hasVisited", "true");
  }

  // استعادة وضع التفضيلات من localStorage
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  }

  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.add("active");
      setTimeout(() => {
        this.classList.remove("active");
      }, 150);
    });
  });
});

function openWhatsApp() {
  window.open("https://wa.me/01007589956", "_blank");
}

function openEmail() {
  window.location.href = "mailto:rashrashad364@gmail.com";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
}

function rateProducts() {
  let rating = prompt("Please rate our products from 1 to 5:");
  if (rating >= 1 && rating <= 5) {
    alert("Thank you for rating us " + rating + " stars!");
  } else {
    alert("Invalid rating. Please enter a number between 1 and 5.");
  }
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "dark-mode",
    document.body.classList.contains("dark-mode")
  );
}

// استعادة وضع التفضيلات من localStorage
window.onload = function () {
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  }
};
function toggleSettings() {
  // يمكنك هنا إضافة أي وظائف تحتاجها لزر الإعدادات
  alert("Settings button clicked!"); // مثال بسيط
}
