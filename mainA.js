function getRandomColor() {
    let randomNumber = Math.floor(Math.random() * 999999);
    let colorNumber = '#'+randomNumber;
    console.log(colorNumber);
    document.body.style.backgroundColor = 'colorNumber';
    return randomNumber;
}

document.getElementById("changeColor").addEventListener('click', getRandomColor);




// document.body.style.backgroundColor = 'red';



