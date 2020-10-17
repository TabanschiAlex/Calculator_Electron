var Calculator = /** @class */ (function () {
    function Calculator() {
        this.memory = '';
        this.display = document.querySelector('#displayValue');
    }
    Calculator.prototype.showValueOnDisplay = function () {
        return this.display.innerHTML = this.memory;
    };
    Calculator.prototype.clearOneElement = function () {
        this.memory = this.memory.slice(0, this.memory.length - 1);
        return this.showValueOnDisplay();
    };
    Calculator.prototype.clearAll = function () {
        this.memory = '';
        return this.showValueOnDisplay();
    };
    Calculator.prototype.calculate = function (value) {
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
    };
    Calculator.prototype.validate = function (value) {
        var operators = ['+', '-', '*', '/'];
        if (!this.memory) {
            if (operators.indexOf(value) != -1 || value === '.') {
                return false;
            }
            ;
            return true;
        }
        if (operators.indexOf(this.memory.slice(-1)) != -1 && operators.indexOf(value) != -1) {
            this.memory = this.memory.slice(0, this.memory.length - 1);
            return true;
        }
        if (value === '.' && this.memory.slice(operators.indexOf(this.memory) + 1).indexOf('.') === -1) {
            this.memory = this.memory.slice(operators.indexOf(this.memory) + 1);
            console.log(this.memory);
            return true;
        }
        return true;
    };
    return Calculator;
}());
var calculator = new Calculator();
console.log(calculator.showValueOnDisplay());
//# sourceMappingURL=Calculator.js.map