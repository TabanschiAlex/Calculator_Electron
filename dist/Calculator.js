var Calculator = /** @class */ (function () {
    function Calculator() {
        this.memory = '';
        this.display = document.querySelector('#displayValue');
    }
    Calculator.prototype.showValueOnDisplay = function () {
        return this.display.innerHTML = this.memory;
    };
    Calculator.prototype.addNewValue = function (value) {
        return this.validate(value);
    };
    Calculator.prototype.clearOneElement = function () {
        if (this.memory.length === 1) {
            this.memory = '';
            return this.display.innerHTML = this.memory;
        }
        this.memory = this.memory.slice(0, this.memory.length - 1);
        return this.display.innerHTML = this.memory;
    };
    Calculator.prototype.clearAll = function () {
        this.memory = '';
        return this.display.innerHTML = this.memory;
    };
    Calculator.prototype.calculate = function () {
        this.memory = eval(this.memory);
        return this.display.innerHTML = this.memory;
    };
    Calculator.prototype.validate = function (value) {
        var operators = "+-*/.";
        if (this.memory === '') {
            this.memory = value;
            return this.display.innerHTML = this.memory;
        }
        for (var i = 0; i < operators.length; i++) {
            var isOperator = value === operators[i];
            for (var j = 0; j < operators.length; j++) {
                if ((this.memory[this.memory.length - 1] === operators[j]) && isOperator) {
                    this.memory.slice(0, this.memory.length - 1);
                    this.memory += value;
                    return this.display.innerHTML = this.memory;
                }
            }
        }
        this.memory += value;
        return this.display.innerHTML = this.memory;
    };
    return Calculator;
}());
var calculator = new Calculator();
console.log(calculator.showValueOnDisplay());
//# sourceMappingURL=Calculator.js.map