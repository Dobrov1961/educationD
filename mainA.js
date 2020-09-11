function getRandomColor() {
    let result = Math.floor(Math.random() * 999999);
    let finish = '#'+result;
    console.log(finish);
    return result;
    document.body.style.backgroundColor = finish;
}

document.getElementById("changeColor").addEventListener('click', getRandomColor);




// document.body.style.backgroundColor = 'red';



