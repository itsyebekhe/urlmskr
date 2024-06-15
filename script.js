const input = document.querySelector("#input");
const maskButton = document.querySelector("#mask-button");
const copy = document.querySelector("#copy-button");
const output = document.querySelector(".output");
const modeText = document.querySelector("#mode-button p");
let currentMode = "redirect";

// Event listeners

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    encode(input.value);
  }
});

maskButton.addEventListener("click", () => {
  encode(input.value);
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(output.innerText);
  copy.innerText = `✅ Copied Masked URL`;
  setTimeout(() => {
    copy.innerText = "🔗 Copy Masked URL";
  }, 2000);
});

// Change mode

function modeChange() {
  if (currentMode == 'text') {
    currentMode = 'redirect';
  } else {
    currentMode = 'text';
  }
  modeText.style.transform = "translate(-150%, 0)";
  setTimeout(() => {
    modeText.innerText = `Mode: ${currentMode}`;
    modeText.style.transform = "translate(0, 0)";
  }, 350);
}

// Encode

function encode(value) {
  if (value.replaceAll(" ", "") == "") {
    output.innerText = `Input cannot be empty. Type something properly.`;
  } else {
    let encodedValue = window.btoa(value);
    if (currentMode == "redirect") {
      output.innerText = `https://itsyebekhe.github.io/urlmskr/${encodedValue}`;
    } else if (currentMode == "text") {
      output.innerText = `https://itsyebekhe.github.io/urlmskr/?t=${encodedValue}`;
    }
  }
}

// Electric Surge

function createBolt() {
  const bolt = document.createElement("div");
  bolt.className = "bolt";
  bolt.style.left = `${Math.random() * 100}%`;

  const electricSurge = document.getElementById("electric-surge");
  const electricSurgeRect = electricSurge.getBoundingClientRect();
  const boltRect = bolt.getBoundingClientRect();

  if (
    boltRect.left + boltRect.width >
    electricSurgeRect.left + electricSurgeRect.width
  ) {
    const newLeft =
      electricSurgeRect.left + electricSurgeRect.width - boltRect.width;
    bolt.style.left = `${newLeft}px`;
  }

  electricSurge.appendChild(bolt);
  setTimeout(() => {
    bolt.remove();
  }, 800);
}

setInterval(createBolt, 600);
