// make generateBtn functional  
const generateBtn = document.getElementById('generate-btn');
generatePinDisplay = document.getElementById('generatePinDisplay');

generateBtn.addEventListener('click', function () {
    var generatePin = generateRandomNumber();
    generatePinDisplay.value = generatePin;
})


// get all button together
const calcBtn = document.getElementsByClassName('button');
calcDisplay = document.getElementById('calcDisplay');

for (let i = 0; i < calcBtn.length; i++) {
    const btn = calcBtn[i];
    btn.addEventListener('click', function (event) {
        const btnClicked = event.target;
        if (btnClicked.innerText == 'C') {
            calcDisplay.value = "";
        }
        else if (btnClicked.innerText == '<') {
            let str = calcDisplay.value;
            newStr = str.substring(0, str.length - 1);
            calcDisplay.value = newStr;
        }
        else {
            calcDisplay.value += btnClicked.innerText;
        }

    })
}

const matchNotify = document.getElementById('match');
matchNotify.style.display = 'none';
const notMatchNotify = document.getElementById('not-match');
notMatchNotify.style.display = 'none';

const tryLeft = document.getElementById('try-left');
//make submit button functional
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function () {
    // compare generatePin Value with calcDisplay Value
    if (generatePinDisplay.value == calcDisplay.value) {
        matchNotify.style.display = 'block';
    }
    
    else {
        notMatchNotify.style.display = 'block';
        matchNotify.style.display = 'none';
        tryLeftCount = parseInt(tryLeft.innerText);
        tryLeft.innerText -= 1;
        if (tryLeft.innerText === '0'){
            submitBtn.disabled = true;
            submitBtn.style.opacity = '50%';
        }
    }
})


// generate random number from 1000 - 9999 
function generateRandomNumber() {
    var randValue = Math.floor(1000 + Math.random() * 9000);
    return randValue;
}
