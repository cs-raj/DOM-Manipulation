/*
    * both the timer and counter will be part of homeClock
    * Creating the form 
    * Radio Button Group name selectClockFunction
    * Two Buttons timer and counter
    * 
*/

/*
 * home 
 * form
 * Timer Button
 * Counter Button
 * Submit Button
*/
//Adding the CSS
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', './style/style.css');
document.head.appendChild(link);


const root = document.createElement('div');
root.classList.add('root');
//root.appendChild(homeClockContainer);
const timerCheckFun = () =>{
    let counterCheck = document.querySelector('.counterContainer');
    let timerCheck = document.querySelector('.timerContainer');
    let rootCount = document.querySelector('.root');
    console.log(counterCheck);
    if(counterCheck!==null)
    {
        document.body.removeChild(rootCount);
        root.removeChild(counterCheck);
    }
    if(timerCheck===null)
    {
        let timer_ = timer();
        root.appendChild(timer_);
    }
}

const counterCheckFun = () =>{
    let timerCheck = document.querySelector('.timerContainer');
    let counterCheck = document.querySelector('.counterContainer');
    let rootCount = document.querySelector('.root');
    console.log(document.querySelector('.root').childElementCount);
    if(timerCheck!==null)
    {
        //document.body.removeChild(rootCount);
        root.removeChild(timerCheck);
    }
    if(counterCheck===null)
    {
        root.appendChild(createCounterFromScratch());
    }
}
const homeClock = () =>{
    //Creating the element
    //const root = document.createElement('div');
    const homeClockContainer = document.createElement('div');
    const homeForm = document.createElement('form');
    const buttonGroup = document.createElement('div');
    const timerButtonContainer = document.createElement('div');
    const counterButtonContainer = document.createElement('div');    
    const timerButton = document.createElement('input');
    const counterButton = document.createElement('input');
    const timerLabel = document.createElement('label');
    const counterLabel = document.createElement('label');
    //Assigning Id and classes

    timerButton.id = 'timer';
    counterButton.id = 'counter';
    timerButton.type = 'radio';
    counterButton.type = 'radio';
    timerButton.name = 'switchType';
    counterButton.name = 'switchType';
    timerButton.value = 'timer';
    counterButton.value = 'counter';
    timerLabel.for = 'timer';
    counterLabel.for = 'counter';
    timerLabel.innerText = "Timer";
    counterLabel.innerText = "Counter";
    timerButtonContainer.classList.add('timerButtonContainer');
    counterButtonContainer.classList.add('counterButtonContainer');
    buttonGroup.classList.add('buttonGroup'); //To house the buttons
    homeForm.name = 'switchForm';
    homeForm.action = '';
    homeForm.method = "GET";
    homeClockContainer.classList.add('homeClockContainer');
    //root.classList.add('root');

    //Adding the elements to the body
    document.body.appendChild(root);
    homeClockContainer.appendChild(homeForm);
    homeForm.appendChild(buttonGroup);

    timerButtonContainer.appendChild(timerButton);
    timerButtonContainer.appendChild(timerLabel);

    counterButtonContainer.appendChild(counterButton);
    counterButtonContainer.appendChild(counterLabel);
    buttonGroup.appendChild(counterButtonContainer);
    buttonGroup.appendChild(timerButtonContainer);
    timerButton.addEventListener('click',timerCheckFun);
    counterButton.addEventListener('click',counterCheckFun);
    return homeClockContainer;
}
console.log(homeClock());
root.appendChild(homeClock());