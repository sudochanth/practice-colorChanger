var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  // mode button event listeners
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset()
    })
  }
}

function setUpSquares() {
  for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        displayMessage.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        displayMessage.textContent = "Try Again";
      }
    })
  }
}

function reset() {
  colors = generateRandColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  displayMessage.textContent = "";
  resetButton.textContent = "New Colors";
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  h1.style.backgroundColor = "steelblue";
  }
}

resetButton.addEventListener("click", function() {
  reset();
})

function changeColors(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var randColor = Math.floor(Math.random() * colors.length);
  return colors[randColor];
}

function generateRandColors(num) {
  // make array
  var arr = []
  // repeat num times
  for(var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  // return array
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}





// easyBtn.addEventListener("click", function() {
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// })

// hardBtn.addEventListener("click", function() {
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquares = 6;
//   colors = generateRandColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++) {
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";
//   }
// })