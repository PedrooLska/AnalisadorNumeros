const number = document.querySelector('#number');
const resultNumber = document.querySelector('#resultNumber');
const result = document.querySelector('#result');
const erro = document.querySelector('#erro');

const arrayNumber = [];

const validationNumber = (num) => {
    if (num >= 1 && num <= 100) {
        return true
    } else if (num.length) {
        erroMsg('Por favor preencha o campo.');
        clearInput();
    } else {
        erroMsg('Por favor preencha com números entre 1 é 100.');
        clearInput();
    }
}

const validateDuplicateNumber = (l, n) => {
    if (l.indexOf(Number(n)) === -1) {
        erroMsg('');
        return true
    } else {
        erroMsg('Número já cadastrado');
        clearInput();
    };
}

const addNumber = () => {
    if (validationNumber(number.value) && validateDuplicateNumber(arrayNumber, number.value)) {
        resultNumber.style.display = 'block'
        arrayNumber.push(Number(number.value));
        resultNumber.innerHTML += `${number.value} `;
        clearInput();
    }
}

const analiseNumber = () => {
    if (arrayNumber.length >= 2) {
        erroMsg('');
        result.innerHTML = '';
        let lenght = arrayNumber.length;
        let max = Math.max.apply(Math, arrayNumber);
        let min = Math.min.apply(Math, arrayNumber);
        let addition = arrayNumber.reduce((a, b) => a + b)
        let media = arrayNumber.reduce((a, b) => a + b) / lenght;
        result.style.display = 'block'
        result.innerHTML += `<p>Ao todo, temos <strong>${lenght}</strong> números cadastrados.</p> 
                <p> O maior valor informado foi <strong> ${max}</strong >.</p >
                <p>O menor valor informado foi <strong>${min}</strong>.</p> 
                <p>Somando todos os valores, temos <strong>${addition}</strong>.</p>
                <p>A média dos valores digitados é <strong>${media.toFixed(2)}</strong></p>`
    } else {
        erroMsg('Por favor preencha com ao menos 2 números para podermos analisar.');
    }
}

const erroMsg = (msg) => {
    erro.style.display = 'block'
    erro.innerHTML = msg;
}

const clearInput = () => {
    this.number.value = '';
    this.number.focus();
}