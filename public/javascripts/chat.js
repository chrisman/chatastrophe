const socket = io();

const form = document.querySelector('form#message-form');
const message = document.querySelector('#message');
const messages = document.querySelector('#messages');
const nick = localStorage.getItem('nick');
console.log(nick)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const m = message.value;
  socket.emit('chat message', {
    nick,
    message: m
  });
  message.value = '';
  return false;
})

socket.on('chat message', ({ nick, message }) => {
  messages.innerHTML += `<li><span>${nick || 'anonymous'}</span>: ${message}</li>`;
});
