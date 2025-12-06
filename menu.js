document.write(`
<style>
/* --- NEW: Logo button (top-left) --- */
.logo-btn {
position: fixed;
top: 40px;
left: 60px;
width: 90px;     /* change size if needed */
height: 90px;
cursor: pointer;
z-index: 2002;
backgroun:red;
}

.logo-btn img {
width: 100%;
height: 100%;
object-fit: contain;
}


/* Menu button */
.menu-btn {
position: fixed;
border: none;
background: none;
top: 50px;
right: 40px;
padding: 10px 20px;
cursor: pointer;
z-index: 2001;
}

/* FULL SCREEN PANEL */
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
font-size: 30px;
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

background: rgba(0, 0, 0, 0.75);
backdrop-filter: blur(8px);

opacity: 0;
pointer-events: none;

transition: opacity 0.35s ease;
z-index: 1500;
}

.overlay.active {
opacity: 1;
pointer-events: auto;
}

.menu {
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

/* Hamburger icon inside the menu button */
.menu-icon {
    width: 35px;
    height: 26px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.menu-icon span {
    display: block;
    height: 2px;
    background: black;
    border-radius: 4px;
    transition: 0.3s;
}


.menu-btn-link:hover {
letter-spacing: 10px;
color: pink;
}
</style>

<menu>

    <!-- ✨ NEW TOP-LEFT LOGO BUTTON -->
    <div class="logo-btn" onclick="window.location.href='index.html'">
        <img src="assets/TWICE-Logo.png" alt="TWICE Logo">
    </div>

    <button class="menu-btn" onclick="togglePanel()">
    <div class="menu-icon">
        <span></span>
        <span></span>
        <span></span>
    </div>
    </button>

    <div class="fullscreen-panel" id="panel" onmouseleave="closePanel()">
        <div class="close-btn" onclick="togglePanel()">✕</div>

        <div class="menu">
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
