const whiteKeys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

const blackKeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

const outerContainer = document.querySelector(".outer");
const innerContainer = document.querySelector(".inner");
const audioContainer = document.querySelector(".audio");

function createButtons(container, classNames, keyArray, isBlack) {
  keyArray.forEach((key, index) => {
    const button = document.createElement("button");
    button.classList.add(classNames);
    button.setAttribute("data-id", index);
    container.appendChild(button);

    button.addEventListener("click", () => playButtonNote(button, isBlack));
  });
}

function createAudioElements(container, total) {
  for (let i = 0; i <= total; i++) {
    const audio = document.createElement("audio");
    audio.id = "aud" + i;
    audio.className = "audioMain";
    container.appendChild(audio);

    const source = document.createElement("source");
    source.src = i + ".mp3";
    source.type = "audio/mp3";
    audio.appendChild(source);
  }
}

function playButtonNote(button, isBlack) {
  const dataId = button.getAttribute("data-id");
  const audio = document.getElementById("aud" + dataId);
  playAudio(audio);
  animateButton(button, isBlack);
}

function playAudio(audio) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function animateButton(button, isBlack) {
  const boxShadowStyle = isBlack
    ? "inset 0px 1px 2px #f3f3f3ed"
    : "inset 1px 2px 2px #000000c2";
  button.style.boxShadow = boxShadowStyle;
  setTimeout(() => {
    button.style.boxShadow = "none";
  }, 200);
}

function handleKeyPress(event) {
  const key = event.key;
  const whiteKeyIndex = whiteKeys.indexOf(key);
  const blackKeyIndex = blackKeys.indexOf(key);

  if (whiteKeyIndex !== -1) {
    const whiteButton = document.querySelector(
      `.whiteBtn[data-id="${whiteKeyIndex}"]`
    );
    if (whiteButton) {
      playButtonNote(whiteButton, false);
    }
  } else if (blackKeyIndex !== -1) {
    const blackButton = document.querySelector(
      `.blackBtn[data-id="${blackKeyIndex}"]`
    );
    if (blackButton) {
      playButtonNote(blackButton, true);
    }
  }
}

createButtons(outerContainer, "whiteBtn", whiteKeys, false);
createButtons(innerContainer, "blackBtn", blackKeys, true);
createAudioElements(audioContainer, 14);

document.addEventListener("keydown", handleKeyPress);

const toggleButton = document.querySelector(".toggle-button");

const pianoWhiteKeys = document.querySelectorAll(".whiteBtn");
const pianoBlackKeys = document.querySelectorAll(".blackBtn");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  updateLabels();
});

function updateLabels() {
  pianoWhiteKeys.forEach((key, index) => {
    if (toggleButton.classList.contains("active")) {
      key.innerHTML = whiteKeys[index];
    } else {
      key.innerHTML = null;
    }
  });
  pianoBlackKeys.forEach((key, index) => {
    if (toggleButton.classList.contains("active")) {
      key.innerHTML = blackKeys[index];
    } else {
      key.innerHTML = null;
    }
  });
}
