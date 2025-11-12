import { onCheckClick } from './script.js';

// Attach event listener here instead of inside script.js
const checkBtn = document.querySelector('.check');
if (checkBtn) {
  checkBtn.addEventListener('click', onCheckClick);
}
