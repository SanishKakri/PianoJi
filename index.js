let currentAudio = null;

    function playAudio(audioFile) {

      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }


      currentAudio = new Audio(audioFile);
      currentAudio.play().then(() => {
        console.log(`Playing: ${audioFile}`);
      }).catch((error) => {
        console.error('Error playing audio:', error);
      });
    }



    for(let i= 0; i<14; i++){
        document.getElementById(`${i+1}`).addEventListener('click', () => {
            playAudio(`/audios/${i+1}.ogg`);   
        } );
        }
//for loop layera less code garna milne banaunu xa (popssible xa)


const keyGar = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];

for(let i= 0; i<10; i++){
  document.addEventListener("keydown", event => {
    if(event.key.startsWith(`${keyGar[i]}`)){
      playAudio(`/audios/${i+1}.ogg`);
      document.getElementById(`${i+1}`).style.backgroundColor = "hsl(0, 0%, 80%)";
    }
  });
  document.addEventListener("keyup", event => {
    if(event.key.startsWith(`${keyGar[i]}`)){
      document.getElementById(`${i+1}`).style.backgroundColor = "#ffffff";
    }
  });
}