var key = '5dKilgfu4uqpc6DwS3hh2MSDpzBLCZ04'
let api = 'http://api.giphy.com/v1/gifs/search?q='//она не работает без ключа
let secondStr = '&api_key=' + key

submit = async () => {
    let q = document.getElementById('user-search').value
    let url = api + q + secondStr+'&limit=20'
    // alert(q)
    // fetch(url).then(resp=>resp.json()).then(data=>{
    //     console.log(data)
    // })  
    let resp = await fetch(url)
    let data = await resp.json()
    console.log(data)
    let arr = data.data
    console.log(arr)
    let div = document.getElementById('output');
    div.innerHTML =' '
    arr.forEach(element => {

        let iframe = document.createElement('iframe')
        iframe.src = element.embed_url
        div.appendChild(iframe)

    });
    // submit=()=>{
    //     $(this).closest('output').find('iframe')
    // };

}



//then-пообещай



