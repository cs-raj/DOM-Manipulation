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
const root = document.createElement('div');
root.classList.add('root');
//root.appendChild(homeClockContainer);
const timerCheckFun = () =>{
    let tr = document.querySelector('.counterContainer');
    console.log(tr);
    if(tr!==null)
    {
        root.removeChild(tr);
    }

    root.appendChild(timer());
    console.log("Timer is Checked");
}

const counterCheckFun = () =>{
    let tr = document.querySelector('.timerContainer');
    console.log(tr);
    if(tr!==null)
    {
        root.removeChild(tr);
    }

    root.appendChild(createCounterFromScratch());
    console.log("Timer is Checked");
    console.log("Counter is Checked");
}
const homeClock = () =>{
    //Creating the element
    //const root = document.createElement('div');
    const homeClockContainer = document.createElement('div');
    const homeForm = document.createElement('form');
    const buttonGroup = document.createElement('div');
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
    buttonGroup.appendChild(timerButton);
    buttonGroup.appendChild(timerLabel);
    buttonGroup.appendChild(counterButton);
    buttonGroup.appendChild(counterLabel);
    // root.appendChild(homeClockContainer);
    timerButton.addEventListener('click',timerCheckFun,{once:true});
    counterButton.addEventListener('click',counterCheckFun,{once:true});
    // root.removeChild(homeClockContainer);
    return homeClockContainer;
}
console.log(homeClock());
root.appendChild(homeClock());