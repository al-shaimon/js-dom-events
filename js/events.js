// Option 1: directly set on the HTML element
// <button onclick="console.log('This is another button')"> Another Button</button>

// Option 2: add onclick function on the HTML element
// IMPORTANT: We will use this
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// Option 3:
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// Option 3: another
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function () {
  document.body.style.backgroundColor = "purple";
};

// Option 4:
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option 4: another
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option 4: final most of the time we will use this
// IMPORTANT: We will use this sometimes
document.getElementById('make-goldenrod').addEventListener('click', function(){
  document.body.style.backgroundColor = 'goldenrod';
})
