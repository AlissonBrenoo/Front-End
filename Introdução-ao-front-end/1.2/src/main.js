const imgHero = document.querySelector('#card-hero')
const heroName = document.querySelector("#hero-name")
const btnRollHero = document.querySelector("#hero-roll")


const gerateHeroImg = () => {
    let randomNumber = Math.floor(Math.random() * 731)
    fetch(`https://akabab.github.io/superhero-api/api/id/${randomNumber}.json`)
    .then((reponse => reponse.json()))
    .then((data) => {
        imgHero.src = data.images.md;
        heroName.textContent = data.name
    })
    .catch((error) => {
        console.log(`Erro: ${error.menssage}`)
    })
    return;
}

btnRollHero.addEventListener('click', gerateHeroImg )