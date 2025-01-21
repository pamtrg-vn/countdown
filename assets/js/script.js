const tetDate = new Date("2025-01-29T00:00:00Z");

function updateCountdown() {
    const now = new Date();
    const diff = tetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "<h2>Chúc Mừng Năm Mới!</h2>";
        // Dừng âm nhạc nền
        document.getElementById("background-music").pause();
        // Phát âm thanh pháo nổ
        playFireworkSound();
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');


}

// Hiệu ứng hoa mai rơi
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * 100 + "vw"; // Vị trí ngang ngẫu nhiên
    flower.style.animationDuration = Math.random() * 5 + 5 + "s"; // Thời gian rơi ngẫu nhiên
    flower.style.animationDelay = Math.random() * 2 + "s"; // Độ trễ ngẫu nhiên
    document.getElementById("falling-flowers").appendChild(flower);

    // Xóa hoa sau khi rơi xong
    flower.addEventListener("animationend", () => {
        flower.remove();
    });
}
// Thêm âm thanh pháo nổ
function playFireworkSound() {
    const fireworkSound = document.getElementById("firework-sound");
    fireworkSound.currentTime = 0;
    fireworkSound.play();
}






// Tạo nhiều hoa mai
setInterval(createFlower, 300);

// Cập nhật đếm ngược mỗi giây
setInterval(updateCountdown, 1000);