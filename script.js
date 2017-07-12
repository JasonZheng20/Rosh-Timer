let timeUntilNext = 5 * 60000;
// let timeUntilNext = 5000;

let seconds = (timeUntilNext/1000) % 60;
let minutes = Math.floor((timeUntilNext/60000) % 60);
const events = ['Roshan Has Fallen','Aegis Has Been Reclaimed', 'Roshan Has Possibly Respawned', 'Roshan Has Definitely Respawned'];
const bars = [document.querySelector('#reclaim'), document.querySelector('#minRespawn'), document.querySelector('#maxRespawn')];
document.querySelector('.title').textContent = events[0];
document.querySelector('.time').textContent = minutes + ':' + seconds;
let curr = 0;

// this.onLoad = this.onLoad.bind(this);
// document.addEventListener('load', this.onLoad);
onLoad();

function onLoad() {
  var timer = setInterval(function() {
    timeUntilNext -= 1000;
    console.log(document.querySelector('.cover').offsetLeft);
    let change = document.querySelector('.cover').offsetLeft - 10;
    // console.log(document.querySelector('.cover').style.left); //this returns null
    console.log(change);
    document.querySelector('.cover').offsetLeft = change; //CANT MOVE IT >:()
    if (timeUntilNext == 0) {
      curr++;
      document.querySelector('.title').textContent = events[curr];
      if (curr < 3) {
        timeUntilNext = 3 * 60000;
        // timeUntilNext = 3000;
        timeUntilNextBuffer = timeUntilNext;
      }
      else {
        timerUntilNext = 0;
        //stop the timer
      }
    }
    seconds = (timeUntilNext/1000) % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    minutes = Math.floor((timeUntilNext/60000) % 60);
    document.querySelector('.time').textContent = minutes + ':' + seconds;
  }, 1000);
}
