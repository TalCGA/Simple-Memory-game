let gameStr="";
let cardArr;

function StartGame(){
    gameStr= document.getElementById("inputString").value;
    if (!parseString(gameStr))   return;
    console.log("before:")
    for(let i=0; i<numCouples;i++){
        console.log( cardArr[i][0]+cardArr[i][1])
    }
    Shuffle(cardArr);
    console.log("after:")

    for(let i=0; i<numCouples;i++){
        console.log( cardArr[i][0]+cardArr[i][1])
    }
}

function ParseString(){
    numCouples= gameStr.length/2;
    iForString=0;

    // even validation
    if (gameStr.length%2)   {
        alert("Please provide an even string");
        return;
    }

    cardArr= new Array(numCouples);
    for(let i=0; i<numCouples; i++){
        if (iForString+1 > gameStr.length){
            alert("Error accured, please provide new game string");
            return false;
        }
        cardArr[i]= new Array(2);
        cardArr[i][0]=gameStr[iForString];
        cardArr[i][1]=gameStr[++iForString];
        iForString++;
    }
    return true;
}

function Shuffle() {
    let currentIndex = cardArr.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cardArr[currentIndex];
        cardArr[currentIndex] = cardArr[randomIndex];
        cardArr[randomIndex] = temporaryValue;
    }
    return cardArr;
}

