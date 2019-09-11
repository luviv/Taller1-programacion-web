function handleLoad() {
    var button = document.querySelector('#right');
    var buttonl = document.querySelector('#left');
    var slider = document.querySelector('.slider');
    var tape = slider.querySelector('.slider__tape');
    var count = 0;

    var first = tape.querySelector('.slider__img');
    var newLast = document.createElement('img');
    newLast.setAttribute('src', first.getAttribute('src'));
    newLast.classList.add('slider__img');
    tape.append(newLast);

    function handleLast(){
        console.log('cambio');
        tape.classList.add('slider__tape--inactive');
        tape.style.transform = 'translate(0px, 0px)';
    }

    function handleClick(event) {
        count++;
    
        if(count == 1){
            tape.classList.remove('slider__tape--inactive');
        }
    
        var mov = slider.offsetWidth * -1 * count;
        tape.style.transform = 'translate(' + mov + 'px, 0px)';
        
        if(count > tape.childElementCount - 2){
            setTimeout(handleLast, 300);
            count = 0;
        }
    }

    function handleClickIzq(event) {
        
        if(count > 0){
            count--;
        }
    
        var movl = slider.offsetWidth * 1 * -count;
        tape.style.transform = 'translate(' + movl + 'px, 0px)';
        
        if(count > tape.childElementCount - 2){
            setTimeout(handleLast, 300);
            count = 0;
        }
    }

    button.addEventListener('click', handleClick);
    buttonl.addEventListener('click', handleClickIzq);

    
}

window.addEventListener('load', handleLoad);

function audioPlayer() {
    var audioElement = document.createElement('audio');
    var btnPlay = document.querySelector('#beegees');
    var btnPause = document.querySelector('#play');

    audioElement.setAttribute('src', './stayinalive.mp3');

    function playAudio(event) {
        audioElement.play();
    }

    function pauseAudio(event) {
        audioElement.pause();
    }

    btnPlay.addEventListener('click', playAudio);
    btnPause.addEventListener('click', pauseAudio);
}