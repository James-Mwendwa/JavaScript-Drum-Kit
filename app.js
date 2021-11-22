let keys = document.querySelectorAll('.drum');


const animate = (key) => {

    let currentKey = document.querySelector('.$(key)');
    
    currentKey.classList.add('pressed');

    setTimeout (()=> {
        currentKey.classList.remove('pressed');
    
    }, 200);

}

const playMusic = (path) => {
    const audio = new Audio(path);
    audio.play();
}

document.addEventListener("keypress", (e) => {
    const pressedKey = e.key;
    animate(pressedKey);
    sound(pressedKey);

})



const sound = (key) => {
    switch (key) {
      case "Q":
        playMusic("");
        break;

      case "W":
        playMusic();
        break;

      case "E":
        playMusic();
        break;

      case "A":
        playMusic();
        break;

      case "S":
        playMusic();
        break;

      case "D":
        playMusic();
        break;

      case "X":
        playMusic();
        break;

      case "Z":
        playMusic();
        break;

      case "C":
        playMusic();
        break;

        default:
            console.log('Wrong Key');

    }

}



const handleClick = (e) => {
 
    let innerHTML = e.target.innerHTML;
    
    animate(innerHTML);
    sound(innerHTML);
}


// pass through the keys
for (let i = 0; i < keys.length; i++) {

    keys[i].addEventListener('click', handleClick);
}