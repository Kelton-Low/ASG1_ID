document.write(`
  <style>
    /* Menu button */
.menu-btn {
position: fixed;
border: none;
background: none;
top: 60px;
right: 80px;
padding: 10px 20px;
cursor: pointer;
z-index: 2001;
}

/* FULL SCREEN PANEL (correct, unified class name) */
.fullscreen-panel {
position: fixed;
top: 0;
left: 0;

width: 100vw;
height: 80vh;

background: #f0f0f0;

opacity: 0;
transform: translateY(-20px);
pointer-events: none;

transition: opacity 0.35s ease, transform 0.35s ease;

padding: 30px;
box-sizing: border-box;
z-index: 2000;
}

/* When active */
.fullscreen-panel.active {
opacity: 1;
transform: translateY(0);
pointer-events: auto;
}

/* Close button */
.close-btn {
position: fixed;
top: 60px;
right: 80px;
font-size: 24px;
cursor: pointer;
}
.menu-btn.hidden {
    display: none;
}
.overlay {
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;

background: rgba(0, 0, 0, 0.75); /* dim */
backdrop-filter: blur(8px); /* blur effect */

opacity: 0;
pointer-events: none;

transition: opacity 0.35s ease;
z-index: 1500;
}

.overlay.active {
opacity: 1;
pointer-events: auto;
}



.menu{
    text-align: center;
    margin-top: 15vh;

}

.menu-btn-link {
    border: none;
    padding: 12px 20px;
    font-size: 70px;
    margin: 15px 0;
    font-weight: bold;
    color: black;
    cursor: pointer;
    transition: 0.2s;
}

.menu-btn-link:hover {
    letter-spacing: 10px;
    color: pink;
}

</style>

<menu>
    <button class="menu-btn" onclick="togglePanel()">Menu</button>

    <div class="fullscreen-panel" id="panel" onmouseleave="closePanel()">
      <div class="close-btn" onclick="togglePanel()">✕</div>
        <div class = "menu">
          <button class="menu-btn-link" onclick="window.location.href='profile.html'">Profile</button>
          <br>
          <button class="menu-btn-link" onclick="window.location.href='discography.html'">Discography</button>
        </div>
    </div>

    <div class="overlay" id="overlay" onclick="closePanel()"></div>
</menu>


<script>
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

</script>
`);
