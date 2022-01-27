let     gameStr ="";
let     cardArr;
let     attemptStr= ""
const   form = document.querySelector("form");
const   gameOverTitle=document.getElementById("gameOverTitle");


const isStillPlaying=()=>{
    if (!gameOverTitle) return false;
    return ((gameOverTitle.className=='hide') && (document.getElementsByClassName("card").length>0))
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    // disable submit another game string while playing
    if (isStillPlaying()){
        e.preventDefault();
        return;
    }
    // if is not the first game- reset the last itteration
    if(gameOverTitle.className=='show')  resetGame(); 

    gameStr= document.getElementById("inputString").value;
    if (gameStr.includes(" "))  return;

    let fullWidth = window.innerWidth;
    let fullHeight = window.innerHeight;
    for(let i=0; i<gameStr.length;i++){
            let element = document.createElement("div");
            element.textContent = "*";
            element.title = gameStr[i];
            element.className = "card";
            element.style.position = "absolute";
            element.style.left = Math.round(Math.random() * fullWidth) + "px";
            element.style.top = Math.round(Math.random() * fullHeight) + "px";
            document.body.appendChild(element);
    }
});


document.addEventListener('click', function(e){
    if(e.target && e.target.className== 'card'){
        if  (e.target.textContent == "*")   {
            e.target.textContent=e.target.title;
            if(attempt(e.target.title)){
                if (attemptStr.length==gameStr.length){
                    gameOverTitle.classList.remove('hide');
                    gameOverTitle.classList.add('show');
                }
            }
            else{
                elements=document.getElementsByClassName("card");
                for(let i = 0; i < elements.length; i++){
                    setTimeout(() => { elements[i].innerText="*";},2000);
                }
            }
        }
    }
});

const attempt=(c)=>{
    // if the user have won
    if (attemptStr.len==gameStr.length)    return true;

    // if fits the chronological input chars
    if (gameStr[attemptStr.length]==c)  {
        attemptStr+=c;
        return true;
    }
    
    // start all over
    else    attemptStr="";
    return false;
}

const resetGame=()=>{
    elements=document.getElementsByClassName("card");
    
    // clearing the "game board" by removing divs
    while(elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
    }

    // hiding the gameOverTitle
    gameOverTitle.classList.remove('show');
    gameOverTitle.classList.add('hide');
}