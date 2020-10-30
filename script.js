function clicked(){
let info = document.querySelector('#form');
let animalName = info.value;
console.log(animalName)
}
fetch(`https://dog.ceo/api/breed/${animalName}/images/random`)
.then(response => response.json())
.then(data => console.log(data)); 