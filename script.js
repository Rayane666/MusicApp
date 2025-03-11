var audioPlayer = document.getElementById("audioPlayer");
var progressBar = document.querySelector(".progress");

var favoriteSongs = [];
var currentSongIndex = 0;

var albums = {
    "ألبوم 1": [
        { title: "أغنية 1", src: "song1.mp3", cover: "cover1.jpg" },
        { title: "أغنية 2", src: "song2.mp3", cover: "cover1.jpg" }
    ],
    "ألبوم 2": [
        { title: "أغنية 3", src: "song3.mp3", cover: "cover2.jpg" }
    ]
};

function loadAlbums() {
    var albumContainer = document.getElementById("album-list");
    albumContainer.innerHTML = "";
    for (let album in albums) {
        let albumElement = document.createElement("div");
        albumElement.classList.add("album");
        albumElement.innerHTML = `<img src="${albums[album][0].cover}" alt="${album}"><p>${album}</p>`;
        albumElement.onclick = () => loadAlbum(album);
        albumContainer.appendChild(albumElement);
    }
}

function loadAlbum(album) {
    alert("تم تحميل " + album);
}

function togglePlayPause() {
    let playPauseBtn = document.getElementById("playPause");
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    } else {
        audioPlayer.pause();
        playPauseBtn.innerHTML = `<i class="fas fa-play"></i>`;
    }
}

function showFavorites() {
    alert("⭐ قائمة المفضلة: " + (favoriteSongs.length ? favoriteSongs.join(", ") : "لا توجد أغاني مفضلة"));
}

function showAllSongs() {
    alert("🎶 جميع الأغاني متاحة الآن !");
}

loadAlbums();