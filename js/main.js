// grab varibles

const btn = document.querySelector('#search')

//create a function and fetch
function superHero(){
    let search = document.querySelector('#inputCharacter').value
    console.log(search)
    const url = `https://rickandmortyapi.com/api/character/?name=${search}`
    
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
        console.log(data.results[0])
        document.querySelector('#name').innerText = (`Name: ${data.results[0].name}`)
        document.querySelector('#stats').innerText = (`Status: ${data.results[0].status}`)
        document.querySelector('#species').innerText = (`Species: ${data.results[0].species}`)
        document.querySelector('#location').innerText = (`Location: ${data.results[0].location.name}`)
        document.querySelector('img').src = data.results[0].image
    })
    .catch(err => {
        console.log(`error ${err}`)
});
}
btn.addEventListener('click', superHero)