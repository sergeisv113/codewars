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
