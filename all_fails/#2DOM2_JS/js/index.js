let dictionary = {
    apple: 'яблоко',
    table: 'стол',
    box: 'коробка'

} 
let point = 0
    let arrkey = []
    let arrVal = []
    let i = 0
    let dicLen = Object.keys(dictionary).length
addWord = () => {
    let eng = document.getElementById('engWord')
    let rus = document.getElementById('rusWord')
    let engWord = eng.value
    let rusWord = rus.value

    dictionary[engWord] = rusWord

    eng.value = ''
    rus.value = ''
    console.log(dictionary)
    alert('Слова добавлен')
}
let testModal = document.getElementById('testModal')
test = () => {
    testModal.style.display = 'flex'
    point = 0
    i = 0
    dicLen = Object.keys(dictionary).length
    for (let key in dictionary) {
        arrkey.push(key)
        arrVal.push(dictionary[key])
    }
    addQuetion()
    addPoint()
}
hideTest = () => {
    testModal.style.display = 'none'
}

//Функциональ для теста




addPoint = () => {
    let p = document.getElementById('points')
    p.innerHTML = point + '/' + dicLen
}


//Ключ значенияларын кошуу жана чыгаруу

addQuetion = () => {
    let question = document.getElementById('quetion')
    question.innerHTML = arrkey[i]
}


//Проверить

chek = () => {
    let answer = document.getElementById('answer')


    if (answer.value == arrVal[i]) {
        alert("Правельный ответ")
        i++
        point++
        addQuetion()
        addPoint()
    } else {
        alert('Не правелный ответ')
        i++
        addQuetion()
    }
    if (dicLen == i) {
        alert('Твой результат ' + point + ' из ' + dicLen)
        i = 0
        point = 0
        addQuetion()
        addPoint()
    }
    answer.value = ''
}