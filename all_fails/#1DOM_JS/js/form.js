let arr = ['a', 'b']
addToArray = () => {
    let inputText = document.getElementById('text').value
    arr.push(inputText)
    console.log(arr)
    let div = document.getElementById('output')
    div.innerHTML =     arr.forEach(el => {
        let h = document.createElement('h1')
        h.innerHTML = el
        div.appendChild(h)

        
    })

   
}