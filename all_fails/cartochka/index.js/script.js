// const API = 'https://api.github.com/users/'
  


// //ДОБАВЛЕНИЕ ЧЕРЕЗ БАДИ ДИВ 
// // let rt = document.createElement('div')
// // rt.id = 'root'
// // document.body.appendChild(rt)


// let rt = document.getElementById('root')
// let input = document.createElement('input')
// let btnSearch = document.createElement('button')
// btnSearch.innerHTML = 'Search'

// rt.appendChild(input)
// rt.appendChild(btnSearch)



// btnSearch.addEventListener('click',()=>{
//     findUser(input.value)
// })

// let card = document.createElement('div')

// findUser = async (name) =>{
//     let resp = await fetch (API + name)
//     let data = await resp.json()
//     input.value =''
//     card.innerHTML = ''

//     //создание html элемента

   
//     let img = document.createElement('img')
//     let h3 = document.createElement('h3')
//     let b = document.createElement('b')
//     let p = document.createElement('p')
//     let h4 = document.createElement('h4')
//     let followers = document.createElement('span')
//     let following = document.createElement('span')
//     let br = document.createElement('br')
//     let button = document.createElement('button')

//     //Добавление составляющих для наших элементов
//     card.classList = 'card'//добавление класса для div
//     img.src = data.avatar_url//добавление пути для img
//     h3.innerHTML = data.name//add name
//     b.innerHTML = data.location //add location
//     p.innerHTML = data.bio//add bio
//     h4.innerHTML ="Количество репозиториев:" +data.public_repos//add repos
//     followers.innerHTML = 'Кол-во подписчиков:' +data.followers//add flwrs
//     following.innerHTML = 'Кол-во подписок:' +data.following// add flwng
//     button.innerHTML = 'LINK GIT'
// //Добавление переменных ('элементов) в карточку
//     card.appendChild(img)
//     card.appendChild(h3)
//     card.appendChild(b)
//     card.appendChild(p)
//     card.appendChild(h4)
//     card.appendChild(followers)
//     card.appendChild(following)
//     card.appendChild(br)



// //добавление карточки  со всеми элементами в div_root
//     rt.appendChild(card)

//     button.addEventListener('click',()=>{
//         window.location.href = data.html_url
//     })
// }

// const API = 'https://randomuser.me/'

// let rt = document.getElementById('root')
// let input = document.getElementById('input')
// let btnSearch = document.getElementById('button')
// btnSearch.innerHTML = 'Search'

// rt.appendChild(input)
// btnSearch.appendChild(button)

// btnSearch.addEventListener('click',()=>{
//     findUser('input.value')
// })

// let foto = document.createElement('div')


// findUser = async (name) =>{
//      let resp = await fetch(API + name)
//      let data = await resp.json()
//      input.value =''
//      card.innerHTML = ''
// }

   
//     let img = document.createElement('img')
//     let h3 = document.createElement('h3')
//     let b = document.createElement('b')
//     let p = document.createElement('p')
//     let h4 = document.createElement('h4')
//     let br = document.createElement('br')
//     let button = document.createElement('button')

   
//     card.classList = 'foto'
//     img.src = data.avatar_url
//     h3.innerHTML = data.name
//     b.innerHTML = data.location 
//     p.innerHTML = data.bio
//     button.innerHTML = 'LINK GIT'

//     card.appendChild(img)
//     card.appendChild(h3)
//     card.appendChild(b)
//     card.appendChild(p)
//     card.appendChild(h4)





//     rt.appendChild(foto)

//     button.addEventListener('click',()=>{
//         window.location.href = data.html_url
//     })



