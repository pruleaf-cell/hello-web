import { greet } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('greeting');
  if (el) {
    el.textContent = greet('web');
  }
});
