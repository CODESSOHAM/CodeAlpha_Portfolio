const homePhrases = [
  "an innovator",
  "a web developer",
  "a coder",
  "a robotics-freak",
  "a database manager"
];

const aboutPhrases = [
  "a full-stack enthusiast",
  "a hardware tinkerer",
  "a passionate learner",
  "an AI dreamer",
  "a system builder",
  "a team player",
  "a good leader"
];

function createTypingEffect(phrases, targetSelector, delay = 150, deleteSpeed = 60) {
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  const typingSpan = document.querySelector(targetSelector);

  function type() {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isDeleting) {
      currentCharIndex--;
    } else {
      currentCharIndex++;
    }

    typingSpan.textContent = currentPhrase.substring(0, currentCharIndex);

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 1000);
      return;
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }

    setTimeout(type, isDeleting ? deleteSpeed : delay);
  }

  type(); // Start typing immediately
}

document.addEventListener("DOMContentLoaded", () => {
  createTypingEffect(homePhrases, ".typing-text");        // Home section
  createTypingEffect(aboutPhrases, ".typing-about", 120, 50); // About section

  // Navbar toggle logic
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
