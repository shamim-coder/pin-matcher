function generatePin() {
    const pinDisplay = document.getElementById("pin-generate-output");
    const generatedPin = Math.round(Math.random() * 10000) + "";
    if (generatedPin.length === 4) {
        pinDisplay.value = generatedPin;
    } else {
        generatePin();
    }
}
document.getElementById("pin-generate-btn").addEventListener("click", () => {
    generatePin();
});

document.getElementById("key-container").addEventListener("click", (e) => {
    const targetedPin = e.target.innerText;
    const matchingPin = document.getElementById("pin-match-output");
    if (isNaN(targetedPin)) {
        if (targetedPin == "C") {
            matchingPin.value = "";
        }
    } else {
        const previousPin = matchingPin.value;
        const newPin = previousPin + targetedPin;
        matchingPin.value = newPin;
    }
});

document.getElementById("submit-btn").addEventListener("click", () => {
    const targetedPin = document.getElementById("pin-match-output");
    const generatedPin = document.getElementById("pin-generate-output");

    const matchedMsg = document.getElementById("match-notify");
    const notMatchedMsg = document.getElementById("not-match-notify");

    const tryCount = document.getElementById("try-left");
    const tryOkText = document.getElementById("try-ok-text");
    const tryText = document.getElementById("try-text");

    if (
        targetedPin.value == generatedPin.value &&
        targetedPin.value.length == 4
    ) {
        matchedMsg.style.display = "block";
        notMatchedMsg.style.display = "none";
        tryOkText.style.display = "block";
        tryText.style.display = "none";
        tryCount.innerText = 3;
        targetedPin.value = "";
        generatedPin.value = "";
    } else {
        let count = parseInt(tryCount.innerText) - 1;
        tryCount.innerText = count;
        if (tryCount.innerText == 0) {
            tryText.style.display = "block";
            tryOkText.style.display = "none";
            targetedPin.value = "";
            generatedPin.value = "";
        }

        notMatchedMsg.style.display = "block";
        matchedMsg.style.display = "none";
    }
});

const incrementBtn = document.getElementById("increment-btn");
incrementBtn.addEventListener("click", () => {
    incrementBtn.innerText = parseInt(incrementBtn.innerText) + 3;
});
