function getRandomColor() {
    let randomNumber = Math.floor(Math.random() * 999999);
    let colorNumber = '#'+randomNumber;
    console.log(colorNumber);
    return colorNumber;
}
function changeColor(){
    document.body.style.backgroundColor = 'colorNumber';
}
document.getElementById("changeColor").addEventListener('click', changeColor);




// document.body.style.backgroundColor = 'red';



