//Password Generation
const character = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
const letters = [1,2,3,4,5,6,7,8,9,0];
const symbols = ['~','!','@','#','$','%','^','&','*','(',')','_','-','+','=','|','}','{','[',']'];
let str = "";
let min=2,max=4;
let loop = Math.floor(Math.random() * (max - min + 1) ) + min;

for(let i=0;i<loop;i++){
    let ind = Math.floor(Math.random() * (25 - 0 + 1) ) + 0;
    if(i%2==0)
        str+=character[ind];
    else
    str+=character[ind].toLowerCase();
    let inde = Math.floor(Math.random() * (9 - 0 + 1) ) + 0;
    str+=letters[inde];
    let index = Math.floor(Math.random() * (19 - 0 + 1) ) + 0;
    str+=symbols[index];
}
const pa = document.getElementById('password');
pa.innerHTML = str;

document.getElementById('showPasswordButton').addEventListener('click', function() {

    var passwordElement = document.getElementById('password');
    if (passwordElement.classList.contains('hide-content')) {
        passwordElement.classList.remove('hide-content');
        this.textContent = 'Hide Password Suggestions'; 
    } else {
        passwordElement.classList.add('hide-content');
        this.textContent = 'Show Password Suggestions'; 
    }
});


//Timer 
let timer;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;
        let timerRunning = false;
        function startTimer() {
            timer = setInterval(updateTimer, 1000);
            timerRunning = true;
        }
        function stopTimer() {
            clearInterval(timer);
            timerRunning = false;
        }
        function updateTimer() {
            if (!document.hidden && timerRunning) {
                seconds++;
                if (seconds == 60) {
                    seconds = 0;
                    minutes++;
                    if (minutes == 60) {
                        minutes = 0;
                        hours++;
                    }
                }
                document.getElementById('timerDisplay').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
        }
        function resetTimer() {
            seconds = 0;
            minutes = 0;
            hours = 0;
            document.getElementById('timerDisplay').textContent = '00:00:00';
        }
        function minimizeContent() {
            document.querySelector('.timer').classList.add('hide-content');
            document.querySelector('#maximizeButton').classList.remove('hide-content');
            document.querySelector('#minimizeButton').classList.add('hide-content');
            stopTimer();
            saveTimer();
        }
        function maximizeContent() {
            document.querySelector('.timer').classList.remove('hide-content');
            document.querySelector('#maximizeButton').classList.add('hide-content');
            document.querySelector('#minimizeButton').classList.remove('hide-content');
            if (!timerRunning) {
                startTimer();
            }
        }
        function saveTimer() {
            localStorage.setItem('hours', hours);
            localStorage.setItem('minutes', minutes);
            localStorage.setItem('seconds', seconds);
        }
        function loadTimer() {
            hours = Number(localStorage.getItem('hours')) || 0;
            minutes = Number(localStorage.getItem('minutes')) || 0;
            seconds = Number(localStorage.getItem('seconds')) || 0;
            document.getElementById('timerDisplay').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                stopTimer();
                saveTimer();
            } else {
                loadTimer();
                maximizeContent();
            }
        });
        document.getElementById('minimizeButton').addEventListener('click', minimizeContent);
        document.getElementById('maximizeButton').addEventListener('click', maximizeContent);
        document.getElementById('resetButton').addEventListener('click', resetTimer);
        document.addEventListener('DOMContentLoaded', function() {
            loadTimer();
            if (!document.hidden) {
                maximizeContent();
            }
        });

     




