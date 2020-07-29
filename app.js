//get all essential DOM element from html
const generatePinDisplay = document.getElementById('generatePinDisplay');
const calcDisplay = document.getElementById('calcDisplay');
const matchNotify = document.getElementById('match');
const notMatchNotify = document.getElementById('not-match');
const tryLeft = document.getElementById('try-left');

// make notify section hidden 
matchNotify.style.display = 'none';
notMatchNotify.style.display = 'none';

// make generatePinBtn functional  
const generatePinBtn = document.getElementById('generate-btn');
generatePinBtn.addEventListener('click', function () {
    const generatePin = generateRandomNumber(); // call generateRandomNumber function
    generatePinDisplay.value = generatePin; // display generate pin value 
})


// get all button together using button class name
const calcBtn = document.getElementsByClassName('button');
for (let i = 0; i < calcBtn.length; i++) {
    const btn = calcBtn[i];
    btn.addEventListener('click', function (event) {
        const btnClicked = event.target; // get target button
        //if C pressed set calc display value to empty
        if (btnClicked.innerText == 'C') {
            calcDisplay.value = "";
        }
        // if < pressed reduce last character of string
        else if (btnClicked.innerText == '<') {
            const str = calcDisplay.value;
            newStr = str.substring(0, str.length - 1);
            calcDisplay.value = newStr;
        }
        // if upper two condition is not true then execute this block
        else {
            calcDisplay.value += btnClicked.innerText;
        }
    })
}


//make submit button functional
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function () {

    //input field validation check
    if (calcDisplay.value === "" && generatePinDisplay.value === "") {
        alert('Please Generate Pin first then Submit it to Pin entry field');
    }
    else if (generatePinDisplay.value === "") {
        alert('Please Generate Pin First')
    } 
    else if(calcDisplay.value === ""){
        alert('Field Empty, Please Enter Your Generated Pin Number');
    }
    
    else {
        // compare generatePin Value with calcDisplay Value
        if (generatePinDisplay.value == calcDisplay.value) {
            isMatched(true);
        }
        // if not matching then execute this block
        else {
            isMatched(false);
        }
    }
})


// generate random number function
function generateRandomNumber() {
    const randValue = Math.floor(1000 + Math.random() * 9000); // generate number from 1000 - 9999
    return randValue;
}

// isMatched function
function isMatched(value) {
    if (value === true) {
        matchNotify.style.display = 'block';
        notMatchNotify.style.display = 'none';
        calcDisplay.value = '';
    }
    else {
        notMatchNotify.style.display = 'block';
        matchNotify.style.display = 'none';
        tryLeft.innerText -= 1;
        // if no try left then make submit btn disabled 
        if (tryLeft.innerText === '0') {
            submitBtn.disabled = true;
            submitBtn.style.opacity = '50%';
        }
    }
}