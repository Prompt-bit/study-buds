const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const playPauseIcon = playPauseBtn.querySelector("i");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const timeDisplay = document.getElementById("time");

let isPlaying = false;

// 🎵 Play / Pause toggle
playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
});

// 🎶 Update icon when playing or pausing
audio.addEventListener("play", () => {
  isPlaying = true;
  playPauseIcon.classList.replace("fa-play", "fa-pause");
});

audio.addEventListener("pause", () => {
  isPlaying = false;
  playPauseIcon.classList.replace("fa-pause", "fa-play");
});

// 🕓 Update progress bar + time
audio.addEventListener("timeupdate", () => {
  const { currentTime, duration } = audio;
  const percent = (currentTime / duration) * 100;
  progress.style.width = `${percent}%`;
  timeDisplay.textContent = formatTime(currentTime);
});

// ⏩ Allow clicking on progress bar
progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

// 🕒 Helper function to format time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" + secs : secs}`;
}
