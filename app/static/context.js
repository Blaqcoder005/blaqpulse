// 🌗 Auto Dark Mode
const hour = new Date().getHours();
if (hour >= 18 || hour < 6) {
  document.documentElement.classList.add("dark");
}

// 🌍 Locale Detection
const locale = navigator.language || navigator.userLanguage;
let greeting = "Hello";

if (locale.startsWith("fr")) greeting = "Salut";
else if (locale.startsWith("es")) greeting = "Hola";
else if (locale.startsWith("de")) greeting = "Hallo";
else if (locale.startsWith("pt")) greeting = "Olá";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("greeting").textContent = `${greeting}, dev 👨🏾‍💻`;
});

// ⌨️ Typing Speed Tracker
let keystrokes = 0;
let lastCheck = Date.now();

const textarea = document.getElementById("codeBox");
const speedDisplay = document.getElementById("speedDisplay");

textarea.addEventListener("keydown", () => {
  keystrokes++;
  const now = Date.now();
  if (now - lastCheck > 5000) {
    const speed = keystrokes / 5;
    speedDisplay.textContent = `Typing Speed: ${speed.toFixed(2)} keys/sec`;

    if (speed > 2) {
      speedDisplay.classList.remove("text-gray-500");
      speedDisplay.classList.add("text-green-500");
    } else {
      speedDisplay.classList.remove("text-green-500");
      speedDisplay.classList.add("text-gray-500");
    }

    keystrokes = 0;
    lastCheck = now;
  }
});
