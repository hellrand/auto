// koodi autor: https://www.youtube.com/watch?v=dGgkwdpmP6s

const img = document.getElementById("koerad")

const newDog = function(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
        img.innerHTML = `<img src='${data.message}'>`;
    })
}
