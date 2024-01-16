(() => {
  typeof window !== 'undefined' &&
    document.addEventListener('DOMContentLoaded', () => {
      const audioPlayer = document.getElementById('audioPlayer');
      const playButton = document.getElementById('playButton');
      const playImg = document.getElementById('playImg');
    
      function activeMusic() {
        playAudio()
      }
    
      async function playAudio() {
      try {
        await audioPlayer?.play();
        playImg.src = "./icons/pause.svg";
      } catch (error) {
        console.warn('Error playing audio:', error);
      }
    }
    
      function pauseMusic() {
        audioPlayer?.pause();
        // playButton.textContent = 'Pausar';
        playImg.src = "./icons/play.svg";
      }
    
    
    
      playButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
          activeMusic()
        } else {
          pauseMusic()
          
        }
      });
    
      setTimeout(() => {
        activeMusic()
      }, 2000);
    });
})();
