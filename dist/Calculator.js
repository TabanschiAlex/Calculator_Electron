var Calculator = /** @class */ (function () {
    function Calculator() {
        this.memory = '';
        this.display = document.querySelector('#displayValue');
    }
    Calculator.prototype.showValueOnDisplay = function (message) {
        if (message) {
            alert(message);
        }
        return this.display.innerHTML = this.memory;
    };
    Calculator.prototype.clearOneElement = function () {
        this.memory = this.memory.slice(0, this.memory.length - 1);
        this.checkFontSize();
        return this.showValueOnDisplay();
    };
    Calculator.prototype.clearAll = function () {
        this.memory = '';
        this.checkFontSize();
        return this.showValueOnDisplay();
    };
    Calculator.prototype.checkFontSize = function () {
        if (this.memory.length < 10) {
            this.display.style.fontSize = '90px';
        }
        if (this.memory.length >= 10) {
            this.display.style.fontSize = '40px';
        }
        if (this.memory.length > 22) {
            this.display.style.fontSize = '20px';
        }
    };
    Calculator.prototype.calculate = function (value) {
        this.checkFontSize();
        if (value === '=') {
            if (eval(this.memory) != Infinity) {
                this.memory = eval(this.memory).toString();
            }
            return this.showValueOnDisplay('Делить на нуль нельзя!');
        }
        if (this.validate(value) === true) {
            this.memory += value;
        }
        return this.showValueOnDisplay();
    };
    Calculator.prototype.validate = function (value) {
        var operators = ['+', '-', '*', '/'];
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
            var lastOperator = this.memory;
            for (var i = 0; i < operators.length; i++) {
                lastOperator = lastOperator.slice(lastOperator.lastIndexOf(operators[i]) + 1);
            }
            if (lastOperator.indexOf('.') != -1) {
                return false;
            }
        }
        return true;
    };
    return Calculator;
}());
var calculator = new Calculator();
calculator.showValueOnDisplay();
//# sourceMappingURL=Calculator.js.map