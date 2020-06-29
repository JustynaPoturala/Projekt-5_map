const input = document.querySelector('input');
const passwords = ['Tchibo', 'NESCAFE', 'JACOBS', 'Davidoff']
const coffeeMessage = ['pyszna', 'może być', 'dobra do śniadania', "najlepsza"];
const div = document.querySelector('div');

const coffeePasswords = passwords.map(coffeePassword => coffeePassword.toLowerCase())

const showCoffee = (c) => {
    const textInput = c.target.value.toLowerCase();
    for (let i = 0; i < coffeePasswords.length; i++) {
        if (textInput === coffeePasswords[i]) {
            div.textContent = coffeeMessage[i];
        }
    }
}

input.addEventListener("input", showCoffee)