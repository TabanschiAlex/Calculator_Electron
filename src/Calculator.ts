class Calculator {

    private memory: string = '';
    private display: HTMLElement = document.querySelector('#displayValue');

    constructor() {
    }


    public showValueOnDisplay(): string {
        return this.display.innerHTML = this.memory;
    }

    public clearOneElement(): string {
        this.memory = this.memory.slice(0, this.memory.length - 1);
        return this.showValueOnDisplay();
    }

    public clearAll(): string {
        this.memory = '';
        return this.showValueOnDisplay();
    }

    public calculate(value: string): string {
        if (value === '=') {
            this.memory = eval(this.memory);
            return this.showValueOnDisplay();
        }

        if (this.validate(value) === true) {
            this.memory += value;
            return this.showValueOnDisplay();
        }

        if (this.validate(value) === false) {
            return this.showValueOnDisplay();
        }
    }

    private validate(value: string): boolean {
        const operators: string[] = ['+', '-', '*', '/'];

        if (!this.memory) {
            if (operators.indexOf(value) != -1 || value === '.') {
                return false;
            };

            return true;
        }

        if (operators.indexOf(this.memory.slice(-1)) != -1 && operators.indexOf(value) != -1) {
            this.memory = this.memory.slice(0, this.memory.length - 1);
            return true;
        }

        if (value === '.' && this.memory.slice(operators.indexOf(this.memory) + 1).indexOf('.') === -1)  {
            this.memory = this.memory.slice(operators.indexOf(this.memory) + 1);
            console.log(this.memory)
            return true;
        }

        return true;
    }


}

const calculator = new Calculator();
console.log(calculator.showValueOnDisplay());