class Calculator {

    private memory: string = '';
    private display: HTMLElement = document.querySelector('#displayValue');

    constructor() {
    }


    public showValueOnDisplay(message?: string): string {
        if (message) {
            alert(message);
        }

        return this.display.innerHTML = this.memory;
    }

    public clearOneElement(): string {
        this.memory = this.memory.slice(0, this.memory.length - 1);
        this.checkFontSize();

        return this.showValueOnDisplay();
    }

    public clearAll(): string {
        this.memory = '';
        this.checkFontSize();

        return this.showValueOnDisplay();
    }

    private checkFontSize(): void {
        if (this.memory.length < 10) {
            this.display.style.fontSize = '90px';
        }

        if (this.memory.length >= 10) {
            this.display.style.fontSize = '40px';
        }

        if (this.memory.length > 22) {
            this.display.style.fontSize = '20px';
        }
    }

    public calculate(value: string): string {
        this.checkFontSize();

        if (value === '=') {
            if (eval(this.memory) === Infinity) {
                return this.showValueOnDisplay('Делить на нуль нельзя!');
            }

            this.memory = eval(this.memory).toString();
        }

        if (this.validate(value) === true) {
            this.memory += value;
        }

        return this.showValueOnDisplay();
    }

    private validate(value: string): boolean {
        const operators: string[] = ['+', '-', '*', '/'];

        if (value === '=') {
            return false;
        }

        if (!this.memory) {
            if (operators.indexOf(value) != -1 || value === '.') {
                return false;
            }

            return true;
        }

        if (operators.indexOf(this.memory.slice(-1)) != -1 && operators.indexOf(value) != -1) {
            this.memory = this.memory.slice(0, this.memory.length - 1);

            return true;
        }

        if (this.memory[this.memory.length - 1] === '.' && operators.indexOf(value) != -1) {
            this.memory = this.memory.slice(0, this.memory.length - 1);

            return true;
        }

        if (operators.indexOf(this.memory[this.memory.length - 1]) != -1 && value === '.') {
            return false;
        }

        if (value === '.') {
            let lastOperator: string = this.memory;

            for (let i: number = 0; i < operators.length; i++) {
                lastOperator = lastOperator.slice(lastOperator.lastIndexOf(operators[i]) + 1);
            }

            if (lastOperator.indexOf('.') != -1)  {
                return false;
            }
        }

        return true;
    }
}

const calculator = new Calculator();
calculator.showValueOnDisplay();