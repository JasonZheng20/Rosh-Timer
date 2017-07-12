// let timeUntilNext = 5 * 60000;
let timeUntilNext = 20000;
document.querySelector('.title').textContent = timeUntilNext;
let curr = 0;
const events = ['Aegis Has Been Reclaimed', 'Roshan Has Possibly Respawned', 'Roshan Has Definitely Respawned'];

// this.onLoad = this.onLoad.bind(this);
// document.addEventListener('load', this.onLoad);
onLoad();

function onLoad() {
  console.log('triggered');
  var timer = setInterval(function() {
    timeUntilNext -= 1000;
    if (timeUntilNext == 0) {
      curr++;
      document.querySelector('.time').textContent = 'Next: ' + events[curr];
      if (curr < 3) {
        // timeUntilNext = 3 * 60000;
        timeUntilNext = 10000;
      }
      else {
        timer = null;
      }
    }
    document.querySelector('.title').textContent = timeUntilNext;
  }, 1000);
}
