const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const message = document.getElementById('message');

function greet() {
  const name = nameInput.value.trim();

  if (!name) {
    message.textContent = 'Bạn chưa nhập tên kìa 😄';
    return;
  }

  message.textContent = `Xin chào, ${name}! Chúc bạn một ngày vui vẻ ✨`;
}

greetBtn.addEventListener('click', greet);
nameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    greet();
  }
});
