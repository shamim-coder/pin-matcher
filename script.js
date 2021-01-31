function randomNumberGenerate() {
    const randomNumbers = Math.random()
    const random4Num = randomNumbers * 10000
    const splitNum = random4Num.toString()
    const splitNumArr = splitNum.split('.')
    const randomNumber = splitNumArr[0];
    return randomNumber
}

document.getElementById('pin-generate-btn').addEventListener('click', function () {

    const randomNumber = randomNumberGenerate()
    if (randomNumber.length < 4) {
        console.log('not a four digit');
    } else {
        document.getElementById('pin-generate-input').value = randomNumber
    }

})

document.getElementById('key-container').addEventListener('click', function (event) {
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
})

document.getElementById('pin-submit').addEventListener('click', function(){
    const inputPin = document.getElementById('pin-generate-input').value
    const outputPin = document.getElementById('pin-match-output').value
    const pinMatchingShow = document.getElementById('pin-generate-btn')

    if(inputPin == outputPin && outputPin.length == 4) {
        pinMatchingShow.style.backgroundColor="#28a745"
        pinMatchingShow.style.borderColor="#25843b"
        pinMatchingShow.innerText = "Pin Matched"
        
        // document.getElementById('match-notify').style.display="block"
    } else {
        pinMatchingShow.style.backgroundColor="red"
        pinMatchingShow.style.borderColor="#c50014"
        pinMatchingShow.innerText = "NOT Matched"
        
        // document.getElementById('not-match-notify').style.display="block"
    }
})
