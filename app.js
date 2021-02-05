// class User {
//     name: string;
//     private age: number; // you only can use this variable inside the class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    } // both classes are equal!
    User.prototype.print = function () {
        console.log(this.name);
    };
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, permissions) {
        var _this = _super.call(this, name, age) || this;
        _this.permissions = permissions;
        return _this;
    }
    return Admin;
}(User));
var user = new User('Luiza', 26);
// console.log(user.name, user.age); // can't access 'age' here, it's private
var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var buttonElement = document.querySelector('button'); // '!' says to ts that it will never be null so it can ignore the null error
function add(a, b) {
    return a + b;
}
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
; // creates an array of choices you can use in yout code
// function printResult(result: string | number, printMode: 'console' | 'alert') { // | means that any of these values are allowed but only thse values
//     if (printMode === 'console') {
//         console.log(result)
//     } else if (printMode === 'alert') {
//         alert(result)
//     }
// }
function printResult(result, printMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    }
    else if (printMode === OutputMode.ALERT) {
        alert(result);
    }
}
// type CalculationResults = { res: number, print: () => void }[];
// const results: CalculationResults = [];
// const results: { res: number, print: () => void }[] = []; // just need to specify when you initialize an empty array
var results = []; // an array with anything
var names = ['Luiza'];
buttonElement.addEventListener('click', function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var result = add(num1, num2);
    var resultContainer = {
        res: result,
        print: function () {
            console.log(this.res);
        }
    };
    results.push(resultContainer);
    // printResult(results);
    // results[0].print();
    // printResult(result, 'console');
    // printResult(result, 'alert');
    printResult(result, OutputMode.CONSOLE);
    printResult(result, OutputMode.ALERT);
});
function logAndEcho(val) {
    console.log(val);
    return val;
}
logAndEcho('Hi there!').split(' ');
