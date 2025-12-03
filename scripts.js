const panel = document.getElementById("panel");
const overlay = document.getElementById("overlay");
const menuBtn = document.querySelector(".menu-btn");

function togglePanel() {
const isOpen = panel.classList.toggle("active");

overlay.classList.toggle("active", isOpen);
menuBtn.classList.toggle("hidden", isOpen);
}

function closePanel() {
panel.classList.remove("active");
overlay.classList.remove("active");
menuBtn.classList.remove("hidden");
}
