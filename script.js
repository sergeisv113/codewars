//Напишите функцию findNeedle(), которая принимает array полный мусор, но содержит один"needle" После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится:"found the needle at position "плюс indexон нашел иглу
function findNeedle(haystack) {
    let indices = [];
    let element = "needle";
    let idx = haystack.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = haystack.indexOf(element, idx);
        return `found the needle at position ${idx}`
    }
    console.log(haystack);
};

//Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.
const reverseSeq = n =>  {
    let res = [];
    for(let i = 1; i <= n; i++)
        res.push(i);
    return res.reverse();
};
reverseSeq(5);//[5, 4, 3, 2, 1]
//Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.
function digitize(n) {
    let arr = Array.from(String(n), Number).reverse();
    return arr;
};
digitize(348597);//[7,6,5,4,3]
// удаления строчных гласных ( a, e, i, o, u) в заданной строке
function shortcut (string) {
    return string.replace(/[aeiou]/gi,'');
};
shortcut('hello');//'hll'
//Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру 5 и выше на «1». Верните полученную строку.
function fakeBin(x){
    let result = '';
    for(let i = 0; i < x.length; i++){
        x[i] < 5 ? result += 0 : result += 1;
    }
    return result;
}
fakeBin('45385593107843568')//'01011110001100111'
//Камень ножницы Бумага
// Давайте играть! Вы должны вернуть, какой игрок выиграл! В случае ничьей возврат Draw!.

const rps = function ( p1, p2 ) {
    if (p1 === p2) {
        return 'Draw!';
    }
    if (p1 === "rock") {
        if (p2 === "scissors") {
            return 'Player 1 won!';
        } else {
            return 'Player 2 won!';
        }
    }
    if (p1 === "paper") {
        if (p2 === "rock") {
            return 'Player 1 won!';
        } else {
            return 'Player 2 won!';
        }

    }

    if (p1 === "scissors") {
        if (p2 === "rock") {
            return 'Player 2 won!';
        } else {
            return 'Player 1 won!';
        }
    }

};
//['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
function smash (words) {
    return words.join(' ');
};
//Если есть одна или две хорошие идеи, верните «Опубликовать!», если их больше 2, верните «Чую серию!». Если нет хороших идей, как это часто бывает, верните «Fail!».
function well(x){
    const result = x.filter(i => i === 'good').length;
    if (result == 2 || result == 1) {
        return 'Publish!'
    } else if (result > 2) {
        return 'I smell a series!';
    } else {
        return 'Fail!';
    }
}
//Напишите функцию, которая преобразует входную строку в верхний регистр.
function makeUpperCase(str) {
    return str.toUpperCase();
}
// посчитать, сколько чистых страниц вам нужно. Если n < 0или m < 0вернуться 0.
let paperwork = (n, m) => {
    let  res = 0;
    res = n * m;
    if (n < 0 || m < 0) {
        return +'0';
    } else {
        return res;
    }
}
// возводила в квадрат каждое переданное ей число, а затем суммировала результаты.
function squareSum(numbers){
    let result = 0;
    numbers.forEach(function(x) {
        result += Math.pow(x, 2);
    })
    return result
}
//Write function bmi that calculates body mass index (bmi = weight / height2).
function bmi(weight, height) {
    let result = weight / (height * height);
    if ( result <= 18.5 ) {
        return  "Underweight";
    } else  if (result <= 25.0) {
        return "Normal";
    } else  if (result <= 30.0) {
        return "Overweight";
    } else {
        return "Obese"
    }
}
//Этот код должен храниться "codewa.rs"как вызываемая переменная, nameно он не работает. Вы можете понять, почему?
let a = "code";
let b = "wa.rs";
let name;
name = a + b;
//которая принимает целое число в качестве аргумента и возвращает «Четное» для четных чисел или «Нечетное» для нечетных чисел.
function even_or_odd(number) {
    let num = number % 2;
    if (num == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
//функцию для преобразования имени в инициалы. Это ката строго состоит из двух слов с одним пробелом между ними.
function abbrevName(name){
    return name.split(" ").map((n)=>n[0]).join(".").toUpperCase();
}
//Завершите метод, который принимает логическое значение и возвращает "Yes"строку для true, или "No"строку для false.
function boolToWord( bool ){
    if (bool) {
        return "Yes";
    }
    return "No";
};
//любит не любит
howMuchILoveYou = n => ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][(n - 1) % 6]
//Если указано число от 0 до 9, верните его словами.
function switchItUp(number){
    switch (number) {
        case 0:
            return  'Zero';
            break;
        case 1:
            return  'One';
            break;
        case 2:
            return 'Two';
            break;
        case 3:
            return 'Three';
            break;
        case 4:
            return 'Four';
            break;
        case 5:
            return 'Five';
            break;
        case 6:
            return 'Six';
            break;
        case 7:
            return 'Seven';
            break;
        case 8:
            return 'Eight';
            break;
        case 9:
            return 'Nine';
            break;
    }
}
//Предположим, что тестовая входная строка всегда действительна и может выглядеть как «1 год» или «5 лет» и т. д. Первый символ — это только число.
function getAge(inputString){
    let str = 0;
    return str = +inputString[0];
}
//Первое столетие охватывает период с 1 года по 100 год включительно , второе столетие — с 101 года по 200 год включительно и т. д.
function century(year) {
    return Math.trunc((year - 1) / 100 + 1);
}
//Число может быть уже отрицательным, и в этом случае никаких изменений не требуется.
// Ноль (0) не проверяется на наличие какого-либо конкретного знака.
function makeNegative(num) {
    let n = Math.sign(num);
    if (n === -1) {
        return num;
    } else  if (n === 1) {
        return num * -1;
    } else {
        return 0;
    }
}
//Даны три целых числа a ,b,c, вернуть наибольшее число , полученное после вставки следующих операторов и скобок :+,*,()
// Другими словами, попробуйте каждую комбинацию a,b,c с [*+()] и верните максимальное полученное значение.
function expressionMatter(a, b, c) {
    return  Math.max(a + b + c, a * (b + c),a * b *c, a + b * c, (a + b) * c)
}
//по заданному целому числу или числу с плавающей запятой найти его противоположность
function opposite(number) {
    let n = 0;
    return n = -(number);
}
//функцию, которая принимает аргумент и возвращает его квадрат.
function square(num) {
    return Math.pow(num, 2);
}
//Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0.
let summation = function (num) {
    return num * (num + 1) / 2;
}// (8)36
//Завершите функцию, которая принимает два целых числа ( a, b, где a < b) и верните массив всех целых чисел между входными параметрами, включая их
function between(a, b) {
    return Array(b - a + 1).fill().map((_, idx) => a + idx)
}
//Вывод должен быть длиной самого длинного слова в виде числа.
function findLongest(str) {
    let spl = str.split(" ");
    let longest = 0;
    for (let i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length;
        }
    }
    return longest;
}
//Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.
function find_average(array) {

    if (array[0] === undefined ) {
        return 0;
    }
    return array.reduce((a, b) => (a + b)) / array.length;
}
//Создайте функцию, которая принимает 2 целых числа в виде строки в качестве входных данных и выводит сумму (также в виде строки)
function sumStr(a,b) {
    function sumStr(a, b) {
        let str = 0;
        str = +a + +b
        if (a == '' && b == '') {
            return '0';
        }
        return str.toString();
    }
};
//Учитывая строку, вы должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.
function doubleChar(str) {
    let word = '';
    for (let i = 0; i < str.length; i++){
        word = word + str[i] + str[i];
    };
    return word;
};
// ||let doubleChar=s=>s.replace(/(.)/g,"$1$1");
doubleChar("abcd")//'aabbccdd'
//Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
class SmallestIntegerFinder {
    findSmallestInt(args)  {
        return   Math.min(...args)}
}
//
function  find(nums) {
    let maxNum = Number.NEGATIVE_INFINITY;
    for (let num of nums) {
        if (num > maxNum) {
            maxNum = num
        }
    }
    return maxNum
}
//получить сумму двух массивов... на самом деле сумму всех их элементов
function arrayPlusArray(arr1, arr2) {
    let sum1 = arr1.reduce((sum, el) => sum + el, 0);
    let sum2 = arr2.reduce((sum, el) => sum + el, 0);
    return sum1 + sum2;
}
//которая разбивает строку и преобразует ее в массив слов.
function stringToArray(string){
    return  string.split(' ');
}
stringToArray("Robin Singh")
// которая конвертирует доллары США (USD) в китайские юани (CNY).
function usdcny(usd) {
    let a = 6.75
    return (usd * a).toFixed(2).toString() + ' Chinese Yuan'
}
//Завершите решение, чтобы оно перевернуло все слова в переданной строке.
function reverseWords(str){
    return str.split(' ').reverse().join(' ')
}
//Напишите функцию, которая возвращает новую строку, содержащую те же последовательности символов, кроме первой и последней, но на этот раз разделенные пробелами
function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
}
//Создайте функцию, которая будет возвращать оператор приветствия, использующий ввод
function greet(name){
    return `Hello, ${name} how are you doing today?`
}
//Учитывая массив чисел, проверьте, являются ли какие-либо из чисел кодами символов для строчных гласных ( a, e, i, o, u).
// Если это так, измените значение массива на строку этой гласной.
function isVow(a){
    return a.map(x => /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x);
}
//Числа могут быть положительными или отрицательными, целыми числами или числами с плавающей запятой.
function testEven(n) {
    if (n % 2 == 0 || n == 0) {
        return true;
    } else {
        return false;
    }
}
// наибольшее и наименьшее число в этом массиве
let min = list => Math.min(...list);
let max = list => Math.max(...list);
//
function basicOp(operation, value1, value2) {
    if (operation === '+') {
        return value1 + value2;
    } else if (operation === '-') {
        return value1 - value2;
    } else if (operation === '*') {
        return value1 * value2;
    } else {
        return value1 / value2;
    }
}// ||return eval(a+o+b)
// Каждое положительное становится отрицательным, а отрицательное становится положительным.
function invert(array) {
    return array.map((a) => -a)
}
//получаете массив чисел, возвращаете сумму всех положительны х.
function positiveSum(arr) {
    return arr.reduce((sum,el) => el >= 0 ? sum + el : sum, 0)
}
// вернуть новый массив с удвоением каждого
function maps(x){
    return x.map((a) => a*2)
}
// повторить строку 1000 раз и в массив
let websites = []
for (i=0; i<1000; i++)
{
    websites.push("codewars");
}
//
function greet (i) {
    if(i === undefined) {
        return 'hello world!'
    }
}
//время в часах, и вам нужно вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения.
function litres(time) {
    return Math.floor(time * 0.5);
}
//([2, 2, 3], [5, 4, 1]), объем aравен 12, а объем bравен 20. Следовательно, функция должна вернуть 8.
function findDifference(a, b) {
    return Math.abs(a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y))
}
// содержит ли предоставленный массив значение.
function check(a, x) {
    return  a.includes(x)
}
//Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!
function areYouPlayingBanjo(name) {
    if (name[0] == 'R' || name[0] == 'r') {
        return name + " plays banjo";
    } else {
        return name + " does not play banjo"
    }
}
//
function fixTheMeerkat(arr) {
    return arr.reverse();
}
//Возвращает среднее значение данного массива, округленное до ближайшего целого числа.
function getAverage(marks){
    return  Math.round(marks.reduce((a, b) => (a + b) / marks.length));
}
//Напишите функцию, которая проверяет, является ли заданная строка (без учета регистра) палиндромом .
function isPalindrome(x) {
    if(x.toLowerCase() === x.split('').reverse().join('').toLowerCase()) {
        return true;
    } else {
        return  false;
    }
}
// которая преобразует шестнадцатеричное число (заданное в виде строки) в десятичное число.
function hexToDec(hexString){
    return  parseInt(hexString, 16);
}
//, проверяющую, содержит ли строка слово «привет» на разных языках.
function validateHello(greetings) {
    return /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings)
}
const hellos = {
    hello: 'english',
    ciao: 'italian',
    salut: 'french',
    hallo: 'german',
    hola: 'spanish',
    ahoj: 'czech republic',
    czesc: 'polish',
}
const validateHello = greetings => {
    for (key in hellos) {
        if (greetings.toLowerCase().includes(key)) {
            return true
        }
    }
    return false
}
//
function sayHello(name) {
    return `Hello, ${name}`
}
//Определите метод hello, который returns"Hello, Name!" к данному name, или говорит Привет, Мир! если имя не указано (или передано как пустая строка).
function hello(name) {
    if (name === '' ||  name === undefined) {
        return 'Hello, World!';
    } else  if (name.substr(-1) === name.toUpperCase()) {
        return `Hello, ${name.reverse()}!`;
    } else {
        return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
    }
}
//поменять слова местами
function nameShuffler(str){
    return str.split(' ').reverse().join(' ');
}
//Просто удалите пробелы из строки, затем верните результирующую строку.
function noSpace(x){
    return x.split(' ').join('');
}
//Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
function sumMix( x) {
    let str =  x.join(' + ');
    return eval(str);
}//return x.map(a => +a).reduce((a, b) => a + b);
//Создайте функцию с двумя аргументами, которая будет возвращать массив первых (n) кратных (x).
function countBy(x, n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(x * i);
    }
    return result;
}
//Добавьте isUpperCaseметод, Stringчтобы увидеть, написана ли строка ЗАГЛАВНЫМИ БУКВАМИ
String.prototype.isUpperCase = function(str) {
    return String(this) === this.toUpperCase();
}
//поменять буквы с диакритическими знаками:ą -> a,
let  polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};
function correctPolishLetters (string) {
    return string.split('').map((i) => polishLetters[i] || i).join("");
}
//Возьмите массив и удалите каждый второй элемент из массива. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.
function removeEveryOther(arr){
    return arr.filter((item, index) => index % 2 === 0)
}
// Input: "aa", "bb" , "cc" => Output: "abcabc"
function tripleTrouble(one, two, three){
    let arr = [] ;
    for (let i = 0; i < one.length; i += 1) {
        arr.push(one[i], two[i], three[i]);
    }
    return arr.join('');
}
//Избавься от 0. Только конечные.
function noBoringZeros(n) {
    while ( n % 10 == 0 && n != 0)  {
        n = n / 10;
    }
    return n;
}//return Number(String(n).replace(/0+$/,''))
//
function xor(a, b) {
    if (a == false && b == false) {
        return false;
    } else  if (a == true && b == false) {
        return true;
    } else if (a == false && b == true) {
        return  true;
    } else {
        return  false;
    }
}
//monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function monkeyCount(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}//return [...Array(n+1).keys()].slice(1)
//