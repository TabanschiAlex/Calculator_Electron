class Calculator {

    private memory: any = '';
    private display = document.querySelector('#displayValue');

    constructor() {
    }


    public showValueOnDisplay(): string {
        return this.display.innerHTML = this.memory;
    }

    public addNewValue(value: string): string {
        return this.validate(value);
    }

    public clearOneElement(): string {
        if (this.memory.length === 1) {
            this.memory = '';
            return this.display.innerHTML = this.memory;
        }
        this.memory = this.memory.slice(0, this.memory.length - 1);
        return this.display.innerHTML = this.memory;
    }

    public clearAll(): string {
        this.memory = '';
        return this.display.innerHTML = this.memory;
    }


    public calculate(): string {
        this.memory = eval(this.memory);

        return this.display.innerHTML = this.memory;
    }

    private validate(value: string): string {
        let operators: string = "+-*/."

        if (this.memory === '') {
            this.memory = value;
            return this.display.innerHTML = this.memory;
        }

        for (let i : number = 0; i < operators.length; i++) {
            const isOperator: boolean = value === operators[i];
            for (let j: number = 0; j < operators.length; j++) {
                if ((this.memory[this.memory.length - 1] === operators[j]) && isOperator) {
                    this.memory.slice(0, this.memory.length - 1);
                    this.memory += value;

                    return this.display.innerHTML = this.memory;
                }
            }
        }

        this.memory += value;
        return this.display.innerHTML = this.memory
    }
}

const calculator = new Calculator();
console.log(calculator.showValueOnDisplay());