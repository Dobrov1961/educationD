document.getElementById("changeColor").addEventListener('click', function () {
    let randomNumber = Math.floor(Math.random() * 999999);
    let colorNumber = '#'+randomNumber;
    document.body.style.backgroundColor = colorNumber;
});





