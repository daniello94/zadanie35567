console.log("zadanie 35567");

const setBackground = () => {
    let paragrafPierwszy = document.querySelector('.frist');
    let paragrafDrugi = document.querySelector('.second');
    paragrafPierwszy.classList.toggle('red');
    paragrafDrugi.classList.toggle('yellow');


}

let tlo = document.getElementById('button');
tlo.addEventListener('click', setBackground);