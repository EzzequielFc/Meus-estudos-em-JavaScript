var hr = 0;
var mn = 0;
var ss = 0;

var time = 1000; // Quanto milésimos valem 1 segundo
var cron;

function start() {
  cron = setInterval(() => {
    timer();
  }, time);
}

function pause() {
  clearInterval(cron);
}

function stop() {
  clearInterval(cron);
  var hr = 0;
  var mn = 0;
  var ss = 0;

  document.getElementById("counter").innerTex  = '00 : 00 : 00 ';
}
function timer() {

    ss++;
    if(ss == 60){
        ss = 0;
        mn++;

        if(mn == 60){
            mn = 0;
            hr++;
        }
    }

    var format = (hr < 10 ? '0' + hr : hr) + ':' + (mn < 10 ? '0'+mn : mn) + ':' + (ss < 10 ? '0' + ss: ss);
    document.getElementById("counter").innerText = format;
}
