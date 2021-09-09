import Timer from './timer.js';

const tempoDisplay = document.querySelector('.tempo');
const tempoText = document.querySelector('.tempo-text');
const decreaseTempoBtn = document.querySelector('.decrease-tempo');
const increaseTempoBtn = document.querySelector('.increase-tempo');
const tempoSlider = document.querySelector('.slider');
const startStopBtn = document.querySelector('.start-stop');
const subtractBeats = document.querySelector('.subtract-beats');
const addBeats = document.querySelector('.add-beats');
const measureCount = document.querySelector('.measure-count');

const click1 = new Audio('/metronome-app/click1-louder.mp3')
const click2 = new Audio('/metronome-app/click2-louder.mp3')

let bpm = 140;
let beatsPerMeasure = 4;
let count = 0;
let isRunning = false;
let tempoTextString = 'Nice and Steady';

decreaseTempoBtn.addEventListener('click', () =>{
    if (bpm <= 20) { return }
    bpm--;
    updateMetronome();
    validateTempo();
});
increaseTempoBtn.addEventListener('click', () =>{
    if (bpm >= 280) { return }
    bpm++;
    updateMetronome();
    validateTempo();
});
tempoSlider.addEventListener('input', () => {
    bpm = tempoSlider.value;
    updateMetronome();
    validateTempo();
});

subtractBeats.addEventListener('click', () =>{
    if (beatsPerMeasure <=2) { return }
    beatsPerMeasure--;
    measureCount.textContent = beatsPerMeasure;
    count = 0;
});

addBeats.addEventListener('click', () =>{
    if (beatsPerMeasure >= 12) { return }
    beatsPerMeasure++;
    measureCount.textContent = beatsPerMeasure;
    count = 0;
});

startStopBtn.addEventListener('click', () => {
    count = 0;
    if(!isRunning) {
        metronome.start();
        isRunning = true;
        startStopBtn.textContent = 'STOP';
        startStopBtn.style.backgroundColor = '#ff0000';
        startStopBtn.style.color = 'black';
    } else {
        metronome.stop();
        isRunning = false;
        startStopBtn.textContent = 'START';
        startStopBtn.style.backgroundColor = '#008000';
        startStopBtn.style.color = 'white';
    }
})

function updateMetronome() {
    tempoDisplay.textContent = bpm;
    tempoSlider.value = bpm;
    metronome.timeInterval = 60000 / bpm;

    if (bpm <= 45) { tempoTextString = "Grave" };
    if (bpm > 40 && bpm < 66) { tempoTextString = "Largo"};
    if (bpm > 66 && bpm < 76) { tempoTextString = "Adagio"};
    if (bpm > 76 && bpm < 108) { tempoTextString = "Andante"};
    if (bpm > 108 && bpm < 120) { tempoTextString = "Moderato"};
    if (bpm > 120 && bpm < 156) { tempoTextString = "Allegro"};
    if (bpm > 156 && bpm < 176) { tempoTextString = "Vivace"};
    if (bpm > 176 && bpm < 200) { tempoTextString = "Presto"};
    if (bpm > 200 && bpm < 240) { tempoTextString = "Prestissimo"};
    if (bpm > 240 && bpm < 280) { tempoTextString = "Mr. Doser Speed"};

    tempoText.textContent = tempoTextString;
}
function validateTempo() {
    if (bpm <= 20) { return };
    if (bpm >= 280) { return };
}

function playClick () {
    if (count === beatsPerMeasure) {
        count = 0;
    }
    if (count === 0) {
        click1.play();
        click1.currentTime = 0;
    } else {
        click2.play();
        click2.currentTime = 0;
    }
    count++;
}

const metronome = new Timer(playClick, 60000 / bpm, { immediate: true });
































function displaymetronome(){
    currentvalue = document.getElementById("metronome").style.display;
    if(currentvalue == "none"){
        document.getElementById("metronome").style.display="flex";
    }else{
        document.getElementById("metronome").style.display="none";
    }
}
/* Fingering Chart */

function displayfingeringchart(){
    currentvalue = document.getElementById("fingeringchart").style.visibility;
    if(currentvalue == "hidden"){
        document.getElementById("fingeringchart").style.visibility="visible";
    }else{
        document.getElementById("fingeringchart").style.visibility="hidden";
    }
}

function switchfingeringsource(){
    var y = document.getElementById('fingering-input').value;
    if (y = "A") {
        document.getElementById('sax-chart').src="/saxophone-fingering-chart/A.gif";
    }
    else if (y='B',y='b') {
        document.getElementById('sax-chart').src="/saxophone-fingering-chart/G.gif";
    }
}

function displaysummitscores(){
    currentvalue = document.getElementById("summitscores").style.display;
    if(currentvalue == "none"){
        document.getElementById("summitscores").style.visibility="flex";
    }else{
        document.getElementById("summitscores").style.visibility="none";
    }
}

function displaymusiclibrary(){
    currentvalue = document.getElementById("musiclibrary").style.visibility;
    if(currentvalue == "hidden"){
        document.getElementById("musiclibrary").style.visibility="visible";
    }else{
        document.getElementById("musiclibrary").style.visibility="hidden";
    }
}
var i=0;
function add1doser(){
    document.getElementById('doserscore').value = ++i;
}
function subtract1doser() {
    document.getElementById('doserscore').value = --i;
}

var j=0;
function add1viavattine(){
    document.getElementById('viavattinescore').value = ++j;
}
function subtract1viavattine() {
    document.getElementById('viavattinescore').value = --j;
}