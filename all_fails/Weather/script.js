const api = {
    key: "4f5837f4a14a0e5c6840df1a05fe1a9b",
    baseurl: "http://api.openweathermap.org/data/2.5/weather?q=",
    paramForKey: '&appid='
}
search=async()=>{
    let input = document.getElementById('country')
    let city =input.value
    let url = api.baseurl+city+api.paramForKey+api.key
    console.log(url)
    let resp = await fetch(url)
    let result = await resp.json()
    console.log(result)
    render(result)
}

render=(data)=>{
    let out = document.getElementById('output')
    out.innerHTML=' '
    let h1 = document.createElement('h1')
    h1.innerHTML=' '
    let kelvin = document.createElement('p')
    kelvin.innerHTML=' '
    let deg = document.createElement('p')
    deg.innerHTML=' '
    kelvin.innerHTML = data.main.temp +" келвин"
    let d = data.main.temp -273.15
    d.innerHTML=' '
    deg.innerHTML = d.toFixed(2) + " градусов"
    h1.innerHTML=data.name 
    out.appendChild(h1)
    out.appendChild(kelvin)
    out.appendChild(deg)

    getMap(data.coord,data.name)
  
}
getMap=(coord ,name)=>{
    let lat = coord.lat
    let lon = coord.lon
    let divMap = document.createElement('div')
    divMap.id = 'map'
    divMap.style.width='500px'
    divMap.style.height='500px'
    let output= document.getElementById('output')
    output.appendChild(divMap)
    let map 
    DG.then(function () {
                map = DG.map('map', {
                    center: [coord.lat,coord.lon],
                    zoom: 10
                });
            
                DG.marker(coord.lat,coord.lon).addTo(map).binPopup(data.name);
            });
        }
           
       


    





