let keys = document.querySelectorAll('.drum');



const handleClick = (e) => {
  let innerHTML = e.target.innerHTML;

  animate(innerHTML);
  sound(innerHTML);
};


// pass through the keys
for (let i = 0; i < keys.length; i++) {

    keys[i].addEventListener('click', handleClick);
}




const animate = (key) => {

    let currentKey = document.querySelector(`.${key}`);
    
    currentKey.classList.add('pressed');

    setTimeout (()=> {
        currentKey.classList.remove('pressed');
    
    }, 200);

}

const playMusic = (path) => {
    const audio = new Audio(path);
    audio.play();
}

// executes when you press keyboard keys

document.addEventListener("keypress", (e) => {
    const pressedKey = e.key;
    animate(pressedKey);
    sound(pressedKey);

})



const sound = (key) => {
    switch (key) {
      case "Q":
        playMusic("Sounds/sound 1.mp3");
        break;

      case "W":
        playMusic("Sounds/sound 2.mp3");
        break;

      case "E":
        playMusic("Sounds/sound 3.mp3");
        break;

      case "A":
        playMusic("Sounds/sound 4.mp3");
        break;

      case "S":
        playMusic("Sounds/sound 5.mp3");
        break;

      case "D":
        playMusic("Sounds/sound 6.mp3");
        break;

      case "X":
        playMusic("Sounds/sound 7.mp3");
        break;

      case "Z":
        playMusic("Sounds/sound 8.mp3");
        break;

      case "C":
        playMusic("Sounds/sound 9.mp3");
        break;

        default:
            console.log('Wrong Key');

    }

}



