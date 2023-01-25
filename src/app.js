/*
    * First building the timer componenet in app.js
    * Need two variables 
    * 1 Seconds
    * 1 Minutes
    * Timer : MM:SS
    * 3 Buttons 'start', 'stop', 'reset'
    * If SS%60==0 then MM++
    * Use interval of one second to increment once the timer starts
    * Keep Both variable global for the timer
*/

let second = 0;
let minute = 0;

/*
    * Creating the elements
    * Assigning the inner html
    * Adding the buttons
    * appending at appropriate places
    * Adding functionality to the buttons
    * Adding css for the page
*/
/*
    * Structure
    * Root
    *   timerContainer
    *   header
    *   Actual Timer MM:SS
    *   button div
    *       start
    *       stop
    *       reset
*/
const timer = () =>{
    const root = document.createElement('div');
    const timerContainer = document.createElement('div');
    const timerHeader = document.createElement('div');
    const timerClock = document.createElement('div');
    const timerButton = document.createElement('div');
    const startTimer = document.createElement('button');
    const stopTimer = document.createElement('button');
    const resetTimer = document.createElement('button');

    //Adding class and id to element
    root.id = 'root';
    startTimer.id = 'start';
    stopTimer.id = 'stop';
    resetTimer.id = 'reset';
    timerContainer.classList.add('timerContainer');
    timerHeader.classList.add('timerHeader');
    timerClock.classList.add('timerClock');
    timerButton.classList.add('timerButton');

    //Adding the inner html
    timerHeader.innerText = "Timer MM : SS";
    startTimer.innerText = "Start";
    stopTimer.innerText = "Stop";
    resetTimer.innerText = "reset";
    timerClock.innerText = `Timer : ${minute} : ${second}`;

    //Adding element to one another
    document.body.appendChild(root);
    root.appendChild(timerContainer);
    timerContainer.appendChild(timerHeader);
    timerContainer.appendChild(timerClock);
    timerContainer.appendChild(timerButton);
    timerButton.appendChild(startTimer);
    timerButton.appendChild(stopTimer);
    timerButton.appendChild(resetTimer);
}

//Calling to start
timer();