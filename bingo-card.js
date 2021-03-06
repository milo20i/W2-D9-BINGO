window.onload = initAll;
let usedNums = new Array(76);

function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  }
  else{
    alert("Your browser does not support this script.");
  }
}

function newCard() {
  for(let i=0 ; i<24 ; i++){
      setSquare(i);
    }
}

function setSquare(thisSquare){
  let currentSquare = "square" + thisSquare;
  let colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
  let colBasis = colPlace[thisSquare] * 15;
  let newNum = colBasis + getNewNum() + 1;

  do{
    newNum = colBasis + getNewNum() + 1;
  }while(usedNums[newNum]);
  
  usedNums[newNum] = true;
  document.getElementById(currentSquare).innerHTML = newNum;
}

function getNewNum() {
  return Math.floor(Math.random() * 15);
}

function anotherCard() {
  for (let i = 1; i < usedNums.length; i++) {
    usedNums[i] = false;
  };

  newCard();
  return false;
}
