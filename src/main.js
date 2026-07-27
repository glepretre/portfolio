// Typing effect for the subtitle
const text = "Full-stack Developer";
const typingElement = document.getElementById('typing-text');
let index = 0;

function type() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100 + Math.random() * 100);
    } else {
        // Blinking cursor effect is handled by CSS border-right
        setTimeout(() => {
            // Optional: delete and retype loop could go here
        }, 2000);
    }
}

// Start typing after a small delay
setTimeout(type, 1000);

// Console greeting for fellow devs
console.log(
    "%c Hello there! 👋 \n%c If you're looking at this, you're probably a dev too. \n Check out the source code on GitHub! ",
    "color: #00f3ff; font-size: 20px; font-weight: bold;",
    "color: #bc13fe; font-size: 14px;"
);
