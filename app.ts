// class User {
//     name: string;
//     private age: number; // you only can use this variable inside the class

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

interface Greetable {
    name: string;
}

interface Printable {
    print(): void;
}

class User implements Greetable, Printable {
    constructor(public name: string, private age: number) {} // both classes are equal!

    print() {
        console.log(this.name);
    }
}

class Admin extends User {
    constructor(name: string, age: number, private permissions: string[]) {
        super(name, age);
    }
}

const user = new User('Luiza', 26);
// console.log(user.name, user.age); // can't access 'age' here, it's private

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!; // '!' says to ts that it will never be null so it can ignore the null error

function add(a: number, b: number) {
    return a + b;
}

type PrintMode = 'console' | 'alert';
enum OutputMode { CONSOLE, ALERT }; // creates an array of choices you can use in yout code

// function printResult(result: string | number, printMode: 'console' | 'alert') { // | means that any of these values are allowed but only thse values
//     if (printMode === 'console') {
//         console.log(result)
//     } else if (printMode === 'alert') {
//         alert(result)
//     }
// }

function printResult(result: string | number, printMode: OutputMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    } else if (printMode === OutputMode.ALERT) {
        alert(result)
    }
}


// const result = add(5, 3);
// console.log(result);

interface CalculationContainer { // blueprint for objects, you can use type too
    res: number;
    print(): void;
}

type CalculationResults = CalculationContainer[];

// type CalculationResults = { res: number, print: () => void }[];
// const results: CalculationResults = [];

// const results: { res: number, print: () => void }[] = []; // just need to specify when you initialize an empty array


const results: Array<any> = []; // an array with anything
const names = ['Luiza'];

buttonElement.addEventListener('click', () => {
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;
    const result = add(num1, num2);
    const resultContainer = { // you don't to specify that!
        res: result,
        print() {
            console.log(this.res)
        }
    }
    results.push(resultContainer);
    // printResult(results);
    // results[0].print();
    // printResult(result, 'console');
    // printResult(result, 'alert');

    printResult(result, OutputMode.CONSOLE);
    printResult(result, OutputMode.ALERT);
});

function logAndEcho<T>(val: T) {
    console.log(val);
    return val;
}

logAndEcho<string>('Hi there!').split(' ');