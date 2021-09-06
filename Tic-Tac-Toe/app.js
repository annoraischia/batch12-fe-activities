// HTML Elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.grid-cell');
const button = document.querySelector("#start")
const intro = document.querySelector(".intro")
const main = document.querySelector(".container")
const gameGrid = document.querySelector(".game-grid")
let history = document.querySelector(".history")
let statusMoves = document.querySelector(".status-moves")
let historyButton = document.querySelector("#history-button")
let historyData = []
let previous = document.querySelector(".previous")
let next = document.querySelector(".next")
let position = 0

// Game Constants
const xSymbol = '×';
const oSymbol = '○';

// Game Variables
let gameIsLive = true;
let xIsNext = true;

//Homepage to Gameboard
button.onclick = function(){
    document.body.style.backgroundImage = "url('./assets/bg.jpg')"
    if(intro.getAttribute("display") === null){
        intro.style.display = "none";
    if (main.getAttribute("display") === null) {
        main.style.display = "block";
    }
    }
}

//History button to show previous and next buttons
historyButton.onclick = function(){
    statusMoves.classList.toggle("status-moves")
}

// Functions
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
    gameIsLive = false;
  if (letter === 'x') {
    statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
  } else {
    statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
  }
};

const checkGameStatus = () => {
  const topLeft = cellDivs[0].classList[1];
  const topMiddle = cellDivs[1].classList[1];
  const topRight = cellDivs[2].classList[1];
  const middleLeft = cellDivs[3].classList[1];
  const middleMiddle = cellDivs[4].classList[1];
  const middleRight = cellDivs[5].classList[1];
  const bottomLeft = cellDivs[6].classList[1];
  const bottomMiddle = cellDivs[7].classList[1];
  const bottomRight = cellDivs[8].classList[1];

  // Check Winner
  
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[1].classList.add('won');
    cellDivs[2].classList.add('won');
    history.classList.remove("history")
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    cellDivs[3].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[5].classList.add('won');
    history.classList.remove("history")
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    cellDivs[6].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[8].classList.add('won');
    history.classList.remove("history")
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[3].classList.add('won');
    cellDivs[6].classList.add('won');
    history.classList.remove("history")
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
    cellDivs[1].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[7].classList.add('won');
    history.classList.remove("history")
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[8].classList.add('won');
    history.classList.remove("history")
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[8].classList.add('won');
    history.classList.remove("history")
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[6].classList.add('won');
    history.classList.remove("history")
  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    gameIsLive = false;
    statusDiv.innerHTML = 'Game is tied!';
    history.classList.remove("history")
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      statusDiv.innerHTML = `${xSymbol} is next`;
    } else {
      statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
    }
  }
};

// Event Handlers
const handleReset = () => {
  xIsNext = true;
  statusDiv.innerHTML = `${xSymbol} is next`;
  for (const cellDiv of cellDivs) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('won');
  }
  gameIsLive = true;
};

const handleCellClick = (e) => {
  const classList = e.target.classList;

  if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
    return;
  }
  if (xIsNext) {
    classList.add('x');
    checkGameStatus();
  } else {
    classList.add('o');
    checkGameStatus();
  }

let row = []
let row2 = []
let row3 = []
      
for (let i=0; i<cellDivs.length; i++){
    let classes = cellDivs[i].classList 
    let text = ''
    if (classes.contains('x')) {
        text = 'x'
      } else if (classes.contains('o')){
          text = 'o'
      } else {
          text = ''
      }
      if (i<3){
          row.push(text)
      } else if (i>=3 && i<6){
          row2.push(text)
      } else {
          row3.push(text)
      }
  } historyData.push([row, row2, row3])
    position = historyData.length-1
    console.log(position, historyData)
}; 

// Event Listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener('click', handleCellClick)
}

const previousButton = () => {
      position -= 1
      gameGrid.innerHTML = ''
      for (let i=0; i<historyData[position].length;i++){
          for (let j=0; j<historyData[position][i].length;j++) {
                let cell = document.createElement("div")
                let mark = historyData[position][i][j]
                if(mark !== ''){
                    cell.classList.add()
                    cell.classList.add(historyData[position][i][j])
                    gameGrid.append(cell)
                }
          }
      }
}
const nextButton = () => {
    position += 1
}

previous.addEventListener('click', previousButton)
next.addEventListener('click', nextButton)

