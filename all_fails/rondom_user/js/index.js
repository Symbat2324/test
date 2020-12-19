const API ='https://randomuser.me/api/?results='


getUsers= async()=>{
    let num = document.getElementById('limitUsers')
    let numValue = num.value
    let resp = await fetch(API+numValue)
    let element = await resp.json()
    console.log(element.results)
    element=element.results
    num.value = ''
    let div = document.getElementById('output')
    div.innerHTML = ''
    element.forEach(element => {
        let card = document.createElement('div')
        let img = document.createElement('img')
        let name = document.createElement('h3')
        let phone = document.createElement('b')
        let email = document.createElement('b')
        let address = document.createElement('p')
        let nationality = document.createElement('span')
        let gender =  document.createElement('h6')

        img.src = element.picture.medium
        name.innerHTML = 'Name is:' +element.name.title + ' '+ element.name.first + ' '+ element.name.last+' '
        phone.innerHTML = "Phone: " + element.phone
        email.innerHTML = 'Email: ' + element.email
        address.innerHTML = 'Address: '
                  +element.location.city+' '
                  +element.location.country+' '
                  +element.location.street.name+' '
                  +element.location.street.number
    nationality.innerHTML='Nationality: ' + element.nat  
    gender.innerHTML='Gender: ' + element.gender
    card.appendChild(img)
    card.appendChild(name)  
    card.appendChild(phone)  
    card.appendChild(email)  
    card.appendChild(address)  
    card.appendChild(nationality)  
    div.appendChild(card)      

    });
}