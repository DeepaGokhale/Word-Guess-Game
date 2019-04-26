//Inital set up for the words//
var imgFolder = "assets/images/";
var currentWord = [];
var winningAlphabets = [];
var selectedWinAlphabets = [];
var noOfattempts = 0;
var loosingAlphabets = [];
var noOfwins = 0;
var counter = 0;

function getAlphabets(){    
    var lowerString = currentWord[0].toUpperCase().split('');
    //winningAlphabets = lowerString.split('');
    for(i=0; i<lowerString.length; i++)
    {
        if (!winningAlphabets.includes(lowerString[i]))
        {
            if (!lowerString[i] == " ")
            {
                winningAlphabets.push(lowerString[i]);
            }            
        }
    }   
    let value = ' '
    winningAlphabets = winningAlphabets.filter(item => item !== value);
    lowerString = lowerString.filter(item => item !== value);
    console.log(lowerString);
    return lowerString;
}

function findIndexInArrayAndUpdateText(arr, value){
    var guessCounter = document.getElementById("guessBox");

    for (var i=0; i<arr.length; i++) {    
        if (arr[i] == value)
        {
            var myTextbox = 'text'+ i
            var textfill = document.getElementById(myTextbox);
            textfill.value = arr[i];
            noOfwins = noOfwins + 1;
            if (!selectedWinAlphabets.includes(arr[i]))
            {
                selectedWinAlphabets.push(arr[i]);
            }
        }

        if(selectedWinAlphabets.length >= winningAlphabets.length)
        {
            console.log("reached here" + counter);
            // console.log("reached final");
            console.log("WinAlph: " + winningAlphabets);
            console.log("SelAlph: " + selectedWinAlphabets);
            // lossCounter.setAttribute("color","red");
            guessCounter.value = "";
            guessCounter.value = "You Won!"
        }
    }
    myGuessCounter.value = loosingAlphabets.length;
}

function loadThePage(){
    //reset every counter
    currentWord = [];
    winningAlphabets = [];
    selectedWinAlphabets = [];
    noOfattempts = 0;
    loosingAlphabets = [];
    noOfwins = 0;

    //aria-hidden="true"
    var option0 = ["fast food", "option01.jpg", "option02.jpg"];
    var option1 = ["Bird Watcher", "option11.png", "option12.png"];
    var option2 = ["World Bank", "option21.png", "option22.jpg"];
    var option3 = ["Earth Worm", "option31.png", "option32.png"];
    var option4 = ["Green Tea", "option41.jpg", "option42.png"];
    var option5 = ["Black Mail", "option51.png", "option52.png"];
    var option6 = ["fruit loop", "option61.jpg", "option62.jpg"];
    var option7 = ["boiled egg", "option71.png", "option72.png"];
    var option8 = ["water polo", "option81.png", "option82.jpg"];
    var option9 = ["fall colors", "option91.jpg", "option92.jpg"];
    var option10 = ["traffic jam", "option101.jpg", "option102.jpg"];

    var gameWords = [option0, option1, option2, option3, option4, option5, option6, option7, option8, option9, option10];
    var min = 0;
    var max = gameWords.length;

    var i = Math.random() * (max - min) + min;
    currentWord = gameWords[Math.round(i)]
    
    var firstImage = document.getElementById('image1');
    var secondImage = document.getElementById('image2');
    var lastLetterBox = document.getElementById('text8');
    
    var firstImgSource = imgFolder + currentWord[1];
    var secondImgSource = imgFolder + currentWord[2];

    firstImage.src = firstImgSource;
    secondImage.src = secondImgSource;
}

function winOrloose(e) {       
    var lossCounter = document.getElementById("guessBox"); 
    lossCounter.value ="";
    var arr = getAlphabets();    
    // var looser = document.getElementById("wordGameModalLongTitle");
    var currAlphabet = e.key.toUpperCase();    
    // console.log(winningAlphabets);
    if (winningAlphabets.includes(currAlphabet))
    {
        findIndexInArrayAndUpdateText(arr, currAlphabet);        
    }
    else
    {
        if(!loosingAlphabets.includes(currAlphabet))
        {
            loosingAlphabets.push(currAlphabet);
            lossCounter.value = loosingAlphabets.length;
            noOfattempts = noOfattempts + 1;
            
            if (noOfattempts >= 10)
            {
                lossCounter.value = loosingAlphabets.length;
                lossCounter.setAttribute("color","red");
                lossCounter.value = noOfattempts; 
                lossCounter.value = "You lost! Click to play again";
            }
        }
    }
}

