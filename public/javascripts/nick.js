const form = document.querySelector('form#register-form');
const nick = document.querySelector('#nick');
const key = 'nick';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const oldNick = localStorage.getItem(nick);
  console.log('oldNick', oldNick)
  const newNick = nick.value;
  localStorage.setItem(key, newNick);
  window.location.href = "/chat"
  return false;
})
