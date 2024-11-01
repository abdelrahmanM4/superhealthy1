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

  // استعادة اللغة من localStorage
  const savedLanguage = localStorage.getItem("language") || "en";
  updateLanguage(savedLanguage);

  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.add("active");
      setTimeout(() => {
        this.classList.remove("active");
      }, 150);
    });
  });
});

// فتح قائمة الإعدادات مع تأثير الأنيميشن
function toggleDropdown() {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.classList.toggle("show");
}

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

function changeLanguage(lang) {
  localStorage.setItem("language", lang);
  updateLanguage(lang);
}

function updateLanguage(lang) {
  if (lang === "en") {
    document.getElementById("main-title").textContent = "Super Healthy";
    document.getElementById("main-description").textContent =
      "Your Guide to Sustainable Agriculture";
    document.getElementById("welcome-title").textContent =
      "Welcome to Super Healthy!";
    document.getElementById("welcome-description").textContent =
      "Discover sustainable solutions for agriculture with our range of high-quality organic products.";
  } else if (lang === "ar") {
    document.getElementById("main-title").textContent = "صحة ممتازة";
    document.getElementById("main-description").textContent =
      "دليلك للزراعة المستدامة";
    document.getElementById("welcome-title").textContent =
      "مرحبًا بكم في صحة ممتازة!";
    document.getElementById("welcome-description").textContent =
      "اكتشف حلول مستدامة للزراعة مع مجموعتنا من المنتجات العضوية عالية الجودة.";
  }
}

function toggleNotifications() {
  alert("Notifications toggled!");
}
