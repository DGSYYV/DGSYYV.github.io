document.addEventListener("DOMContentLoaded", function () {
    const sentences = [
    "UI/UX Designer",
    "Front-End Developer",
    ];
    let index = 0;

    function typeText() {
    const typedText = document.getElementById("typed-text");
    const currentSentence = sentences[index];

    let charIndex = 0;

    function type() {
        if (charIndex < currentSentence.length) {
        typedText.textContent += currentSentence.charAt(charIndex);
        charIndex++;
          setTimeout(type, 100); 
        } else {
          setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
    if (typedText.textContent.length > 0) {
        typedText.textContent = typedText.textContent.slice(0, -1);
          setTimeout(eraseText, 50); 
        } else {
        index = (index + 1) % sentences.length;
          setTimeout(typeText, 500);
        }
    }

    type();
    }

    typeText(); // Mulai animasi ketika halaman dimuat
});