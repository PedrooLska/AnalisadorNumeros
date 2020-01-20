class AnalisadorNumeros {
    constructor() {
        this.number = document.querySelector('.number');
        this.resultNumber = document.querySelector('.resultNumber');
        this.result = document.querySelector('.result');

        this.arrayNumber = [];
    }

    validationNumber(num) {
        if (num >= 1 && num <= 100) {
            return true
        } else if (num.length == 0) {
            this.erroMsg('Por favor preencha o campo.');
            this.clearInput();
        } else {
            this.erroMsg('Por favor preencha com números entre 1 é 100.');
            this.clearInput();
        }
    }

    validateDuplicateNumber(l, n) {
        if (l.indexOf(Number(n)) === -1) {
            this.erroMsg('');
            return true
        } else {
            this.erroMsg('Número já cadastrado');
            this.clearInput();
        };
    }

    addNumber() {
        if (this.validationNumber(this.number.value) && this.validateDuplicateNumber(this.arrayNumber, this.number.value)) {
            this.arrayNumber.push(Number(this.number.value));
            this.resultNumber.innerHTML += `${this.number.value} `;
            this.clearInput();
        }
    }

    analiseNumber() {
        if (this.arrayNumber.length >= 2) {
            this.erroMsg('');
            this.result.innerHTML = '';
            let lenght = this.arrayNumber.length;
            let max = Math.max.apply(Math, this.arrayNumber);
            let min = Math.min.apply(Math, this.arrayNumber);
            let addition = this.arrayNumber.reduce((a, b) => a + b)
            let media = this.arrayNumber.reduce((a, b) => a + b) / lenght;

            this.result.innerHTML += `<p>Ao todo, temos <strong>${lenght}</strong> números cadastrados.</p> 
                <p> O maior valor informado foi <strong> ${max}</strong >.</p >
                <p>O menor valor informado foi <strong>${min}</strong>.</p> 
                <p>Somando todos os valores, temos <strong>${addition}</strong>.</p>
                <p>A média dos valores digitados é <strong>${media.toFixed(2)}</strong></p>`
        } else {
            this.erroMsg('Por favor preencha com ao menos 2 números para podermos analisar.');
        }
    }

    erroMsg(msg) {
        let el = document.querySelector('.erro');
        el.innerHTML = msg;
    }

    clearInput() {
        this.number.value = '';
        this.number.focus();
    }







}

const newAnalisadorNumeros = new AnalisadorNumeros();
