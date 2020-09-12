document.getElementById("changeColor").addEventListener('click', function () {
    document.body.style.backgroundColor = randomNumber;
    return randomNumber = '#'+Math.floor(Math.random() * 999999);
});





