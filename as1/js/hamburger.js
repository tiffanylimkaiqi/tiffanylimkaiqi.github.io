// Hamburger menu: opens and closes the nav on tablet and mobile
const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");

    // Change icon
    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&#10005;";  // ✕ (cross)
    } else {
        toggleButton.innerHTML = "&#9776;";   // ☰ (hamburger)
    }
});