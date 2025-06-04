const quote = "Chat, are we live?";
const fullCmd = `echo "${quote}"`;
const cmdEl = document.getElementById('cmd');
const outEl = document.getElementById('out');
const caret = document.querySelector('.caret');

function typeText(el, text, speed, onDone) {
  let i = 0;
  function step() {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(step, speed);
    } else if (onDone) {
      onDone();
    }
  }
  step();
}

// 1) type the echo command, then
typeText(cmdEl, fullCmd, 100, () => {
  // move caret to next line
  caret.remove();
  document.getElementById('out').insertAdjacentElement('afterend', caret);
  // 2) type the quote itself
  typeText(outEl, quote, 75);
});