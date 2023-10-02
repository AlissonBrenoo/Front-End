const randomDog = document.querySelector('#randomDog');
const randomCat = document.querySelector('#randomCat');
const surprise = document.querySelector('#surprise');
const imgAnimal = document.querySelector('#imgRandom');

const generateDog = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      imgAnimal.src = data.message;
    })
    .catch((error) => {
      console.log(`Erro: ${error.message}`);
    });
};

const generateCat = () => {
  return fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => {
      imgAnimal.src = data[0].url;
    })
    .catch((error) => {
      console.log(`Erro: ${error.message}`);
    });
};

const generateRandom = () => {
  Promise.any([generateDog(), generateCat()])
    .then((response) => response)
    .catch((error) => {
      console.log(`Erro: ${error.message}`);
    });
};
randomDog.addEventListener('click', generateDog);
randomCat.addEventListener('click', generateCat);
surprise.addEventListener('click', generateRandom);
