const inputEl = document.querySelector('input');
const button = document.querySelector('button');
const alert = document.querySelector('.alert');
const inputDiv = document.querySelector('.input-div');

const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const validator = () => {
    if (inputEl.value.length === 0 || !inputEl.value.match(emailValidator)) {
        alert.textContent = "Please provide a valid email address";
        inputEl.value = "example@email.com";
        inputDiv.classList.add('error');
        setTimeout(() => {
            inputDiv.classList.remove('error')
        }, 3000);
    }
}

button.addEventListener('click', e => {
    e.preventDefault;
    validator()
})

inputEl.addEventListener('keypress', e => {
    e.preventDefault
    if (key === 'enter') {
        validator();
    }
})