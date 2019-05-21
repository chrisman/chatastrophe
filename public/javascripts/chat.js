const socket = io();

const form = document.querySelector('form');
const message = document.querySelector('#message');
const messages = document.querySelector('#messages');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const m = message.value;
  socket.emit('chat message', m);
  message.value = '';
  return false;
})

socket.on('chat message', (msg) => {
  messages.innerHTML += `<li>${msg}</li>`;
});
