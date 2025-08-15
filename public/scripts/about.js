import { greet } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('about-greeting');
  if (el) {
    el.textContent = greet('from the about page');
  }
});
