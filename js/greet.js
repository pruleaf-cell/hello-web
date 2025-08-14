async function loadGreeting() {
  try {
    const response = await fetch('myfirstfile.txt');
    const text = await response.text();
    document.getElementById('greeting').textContent = text.trim();
  } catch (err) {
    document.getElementById('greeting').textContent = 'Unable to load greeting.';
    console.error(err);
  }
}

loadGreeting();
