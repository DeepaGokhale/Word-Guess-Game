//Inital set up for the words//
var imgFolder = "assets/images/";
var currentWord = [];
var winningAlphabets = [];
var noOfattempts = 0;
var loosingAlphabets = [];
var noOfwins = 0;
var noOfletters = 0;
var selectedWinAlphabets = [];

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
    var looser = document.getElementById("wordGameModalLongTitle");
    var winModal = document.getElementById("wordGameModalCenter");
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
            if(selectedWinAlphabets.length == winningAlphabets.length)
            {
                winModal.hidden = false;
                looser.hidden = false;
                looser.innerHTML = "You have won!"; //wordGameModalLongTitle
            }
        }
    }
}

function loadThePage(){
    var modal = document.getElementById("wordGameModalCenter");
    modal.hidden = "true";
    //aria-hidden="true"
    var option0 = ["Fast Food", "option01.jpg", "option02.jpg", 8];
    var option1 = ["Bird Watcher", "option11.png", "option12.png", 11];
    var option2 = ["World Bank", "option21.png", "option22.jpg", 9];
    var option3 = ["Earth Worm", "option31.png", "option32.png", 9];
    var option4 = ["Green Tea", "option41.jpg", "option42.png", 8];
    var option5 = ["Black Mail", "option51.png", "option52.png", 9];

    var gameWords = [option0, option1, option2, option3, option4, option5];
    var min = 0;
    var max = gameWords.length - 1;

    var i = Math.random() * (max - min) + min;
    currentWord = gameWords[Math.round(i)]
    
    var firstImage = document.getElementById('image1');
    var secondImage = document.getElementById('image2');
    var lastLetterBox = document.getElementById('text8');
    
    var firstImgSource = imgFolder + currentWord[1];
    var secondImgSource = imgFolder + currentWord[2];
    noOfletters = currentWord[3];
    var hideIt = true;
    // console.log(firstImgSource);
    // console.log(secondImgSource);
    // console.log(noOfletters);

    firstImage.src = firstImgSource;
    secondImage.src = secondImgSource;
}

function winOrloose(e) {
    var arr = getAlphabets();
    var wrongGuess = document.getElementById("guessBox");
    var looser = document.getElementById("wordGameModalLongTitle");
    var currAlphabet = e.key.toUpperCase();    
    // console.log(winningAlphabets);
    if (winningAlphabets.includes(currAlphabet))
    {
        findIndexInArrayAndUpdateText(arr, currAlphabet);        
    }
    else
    {
        if(!loosingAlphabets.includes(e.key))
        {
            wrongGuess.textContent = wrongGuess.textContent + e.key;
            noOfattempts = noOfattempts + 1;
            if (noOfattempts > 10)
            {
                //make modal visible
                looser.textContent = "Don't give up! You can play again!";
                looser.hidden = false;
                console.log("You lost!");
            }
        }
    }
}


// body.addEventListener('keydown', function(event) {
//     if(event.keyCode == 37) {
//         alert('Left was pressed');
//     }
//     else if(event.keyCode == 39) {
//         alert('Right was pressed');
//     }

//     console.log(event.keyCode);
// });