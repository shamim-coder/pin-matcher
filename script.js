function getPin() {
    const randomNumbers = Math.random() * 10000 + ''
    const splitNumArr = randomNumbers.split('.')
    const randomNumber = splitNumArr[0];
    if(randomNumber.length === 4) {
        return randomNumber;
    }
    else {
        return getPin();
    }
}

function generatePin(){
    const generatePin = document.getElementById('pin-generate-input')
    generatePin.value = getPin()
}

function getKeys(){
    const targetValue = event.target.innerText
    const pinOutput = document.getElementById('pin-match-output')
    
    if(isNaN(targetValue)) {
        console.log('its not a number');
    }
    else if(pinOutput.value.length >= 4) {
        console.log('over digit');
    }
    else {
        pinOutput.value = pinOutput.value + targetValue
    }
}

function verifyPin(){
    const inputPin = document.getElementById('pin-generate-input').value
    const outputPin = document.getElementById('pin-match-output').value
    const pinMatchingShow = document.getElementById('pin-generate-btn')

    if(inputPin == outputPin && outputPin.length == 4) {
        pinMatchingShow.style.backgroundColor="#28a745"
        pinMatchingShow.style.borderColor="#25843b"
        pinMatchingShow.innerText = "✅ Pin Matched"
        
        // document.getElementById('match-notify').style.display="block"
    } else {
        pinMatchingShow.style.backgroundColor="red"
        pinMatchingShow.style.borderColor="#c50014"
        pinMatchingShow.innerText = "❌ NOT Matched"
        
        // document.getElementById('not-match-notify').style.display="block"
    }
}

