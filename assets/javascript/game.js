//Inital set up for the words//
var gameWords = [option0, option1, option2, option3, option4, option5];

var option0 = ["Fast Food", "option01.jpg", "option02.jpg"];
var option1 = ["Bird Watcher", "option11.png", "option12.png"];
var option2 = ["World Bank", "option21.png", "option22.jpg"];
var option3 = ["Earth Worm", "option31.png", "option32.png"];
var option4 = ["Green Tea", "option41.jpg", "option42.png"];
var option5 = ["Black Mail", "option51.png", "option52.png"];

function runScript(e) {
    //See notes about 'which' and 'key'
    // if (e.keyCode == 13) {
    //     var tb = document.getElementById("scriptBox");
    //     eval(tb.value);
    //     return false;
    // }

    console.log(e.keyCode);
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