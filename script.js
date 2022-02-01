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
//Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.
function digitize(n) {
    let arr = Array.from(String(n), Number).reverse();
    return arr;
};
digitize(348597);//[7,6,5,4,3]
