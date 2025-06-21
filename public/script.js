const targetDate = new Date("2025-07-19T00:00:00");
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        countdownEl.textContent = "💍 결혼식 당일입니다! 축하해요! 🎉";
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    countdownEl.textContent = `D-day까지 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
}

// 초마다 갱신
setInterval(updateCountdown, 1000);
updateCountdown(); // 초기 실행
