// function words() {
//     var k = 0;
//     var stringsearch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
//     c
//     for (var i = 0; i < f.length; i++)
//         for (var j = 0; j < stringsearch.length; j++)
//             if (f[i] === stringsearch[j]) {
//                 ++k;
//                 break;
//             }
//     return k ? k : "Net sovpadenyi";
    
// console.log(words()
var str = ' '; //строка
var vowels = ' '; //гласные
var f = prompt("Введите  слова:");
var res = " ";
 
for (var i = 0; i <= str.length; i++) {
    if (str[i]) res += str[i];//получаем букву
    if (vowels.search(str[i]) == -1) i = i + 1;
    else i = i + 2;
}
console.log(str);