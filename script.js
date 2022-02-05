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
//