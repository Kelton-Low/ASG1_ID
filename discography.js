function album(name, date, category, link, img) {
    this.name = name;
    this.date = date;
    this.category = category;
    this.link = link;
    this.img = img;
}

function openLink(url) {
    window.open(url, "_blank");
}
//Load the info
let song1 = new album("TEN: The Story Goes On", "2025.10.10", "ALBUM", "https://youtube.com/playlist?list=PLxA687tYuMWiAo1h6vBN0CdsG7KwyzZ8w&si=zmNtGrnQKqDJP4Vt", "46fbf2ccb5164fd3a71f0c5f0b20e2a3-TW_10SP_Onlinecover_0826.jpg")
let song2 = new album("LIL FANTASY vol.1", "2025.09.12", "SINGLE", "https://youtube.com/playlist?list=PLxA687tYuMWhzPd8lFRhfweJIcXIimho2&si=Hb6DzNwzJdnUcjo4", "dbd954c8bc6741579e629ce931402d4d-CY_1st_LIL+FANTASY+vol.1+Online+Cover_0714.jpg")
let song3 = new album("THIS IS FOR", "2025.07.11", "ALBUM", "https://youtube.com/playlist?list=PLyYknuq7e2jbrfp1yUWXBhEvSQp4xpL3s&si=SSZqDfR4-sBOTEvw", "b5ed3fb0a39b48668211db552d9392c7-TW_4th_THIS+IS+FOR+Online+Cover_0509.jpg")
let song4 = new album("STRATEGY", "2024.12.06", "ALBUM", "https://youtube.com/playlist?list=OLAK5uy_m5MAjC6wkd7wlY8DNoJNkdRE8Twh1Mik4&si=jOIz47-1jdc9956I", "5e1048275ed84e22abb48b8f643419e6-TW-M14-Strategy-OnlineCover(1030).jpg")
let song5 = new album("aboutTZU", "2024.09.06", "SINGLE", "https://youtube.com/playlist?list=PLyo6W3g1j4QZMrXIGRuvcBWizOYHXMjm9&si=Opp0h4l7tkFxPxEX", "e252a551b3104708a22c3c290bf5ffe6-TY_M1_online+cover_0702+(1).jpg")
let song6 = new album("NAYEON", "2024.06.14", "SINGLE", "https://youtube.com/playlist?list=PLicr9CtAAwdfkZMlpiga932mtnftdHu_r&si=iMQd563cZNmJXrJ8", "d6edc9d3803c406995ffc494a7136d9e-온라인+커버+이미지.jpg")

const songs = [song1, song2, song3, song4, song5, song6];

function renderSongs(list) {
    const container = document.querySelector(".container");
    container.innerHTML = "";

    list.forEach(song => {
        const node = document.createElement("div");
        node.className = "album";
        node.setAttribute("onclick", `openLink('${song.link}')`);

        // IMG
        const img = document.createElement("img");
        img.src = "assets/" + song.img;
        node.appendChild(img);

        // RIGHT CONTENT
        const right = document.createElement("div");

        const meta = document.createElement("div");
        meta.className = "meta";
        meta.innerHTML = `${song.date} | ${song.category}`;
        right.appendChild(meta);

        const name = document.createElement("div");
        name.className = "name";

        // newline after colon
        name.innerHTML = song.name

        right.appendChild(name);

        node.appendChild(right);

        container.appendChild(node);
    });
}

// SORT BY NAME (A → Z)
function sortByName() {
    const sorted = [...songs].sort((a, b) => a.name.localeCompare(b.name));
    renderSongs(sorted);
}

// SORT BY DATE (Newest first)
function sortByDate() {
    const sorted = [...songs].sort();
    renderSongs(sorted);
}

// DEFAULT LOAD (alphabetical or date — your choice)
sortByDate();

