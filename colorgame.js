var numSquares = 6;
var colors = [];
var pickedColor;
var header = document.querySelector(".header");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
		for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});}
}

function setupSquares(){
		for(var i = 0; i < squares.length; i++){
	// set background to colors from list
		squares[i].addEventListener("click", function(){
			// check color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare to the pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Yeeeessss!!!";
				setAllCorrectColor(clickedColor);
				header.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again";
			} else {
				this.style.backgroundColor = "#fcfcfc";
				messageDisplay.textContent = "It's not that...";
			}
	});}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "Change colors";
	messageDisplay.textContent = "";
	header.style.backgroundColor = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}}}

resetButton.addEventListener("click", function(){
	reset();
});

function setAllCorrectColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
	arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

window.onload = function() {

	var faviconIndex = 0;
	var favicon = document.getElementById('favicon');
  
	setInterval(function() {
		if (faviconIndex > 5){
			faviconIndex = 0
		}
			favicon.href = faviconIndex + ".ico";
			faviconIndex++;
	  }, 500);
  };

window.scrollTo(0, 1);