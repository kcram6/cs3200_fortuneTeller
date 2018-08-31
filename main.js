//the link to my json data
//https://api.myjson.com/bins/p31ik

//stores the users questions and the answers
var myInputs = [];

//initial variable for my json data 
var myResponses;

//some query selectors!
var submitQuestion = document.querySelector('#submitQuestion');
var errorParagraph = document.querySelector('#error');
var userInput = document.querySelector('#userInput').value;
var smokeGif = document.querySelector('#smokeGif');
var randomAnswer = '';
var printAnswer = document.querySelector('#answer');
var userInput = document.querySelector('#userInput').value;
var hiddenContent = document.querySelector('.hiddenContent');
var dataButton = document.querySelector('#dataContainer');
var closeButton = document.querySelector('#closeButton');
var pastQuestions = document.querySelector('#pastQuestions');

//shows the smoke gif
var displayGif = function () {
    smokeGif.style.display = 'inline';
}

//hides the smoke gif
var hideGif = function() {
    smokeGif.style.display = 'none';
}

submitQuestion.onclick = function () {
    //generate random answer
    randomAnswer = myResponses[Math.floor(Math.random() * myResponses.length)]
    userInput = document.getElementById('userInput').value;
    console.log('user input is ', userInput)
    console.log('random answer is ', randomAnswer)
    //display gif, then after 1 second, hide it
    displayGif();
    setTimeout(function() {
        hideGif();
    }, 1000);
    //print the random answer to the screen
    printAnswer.innerHTML = randomAnswer


    var listItem = document.createElement("li");
    listItem.innerHTML = userInput + ": " + randomAnswer;
    pastQuestions.appendChild(listItem);
}


/*
//when enter is clicked
submitQuestion.onclick = function () {
    
        //generate random answer
        randomAnswer = myResponses[Math.floor(Math.random() * myResponses.length)]
        userInput = document.querySelector('userInput');
        //display gif, then after 1 second, hide it
        displayGif();
        setTimeout(function() {
            hideGif();
        }, 1000);
        //print the random answer to the screen
        printAnswer.innerHTML = randomAnswer

        var listItem = document.createElement("li");
        listItem.innerHTML = userInput + ": " + randomAnswer;
        pastQuestions.appendChild(listItem);
        
        console.log(myInputs);
    } else {
        errorParagraph.style.display = 'inline';
        errorParagraph.innerHTML = 'Text box can not be empty';
        errorParagraph.style.color = 'red'; 
    }

    
*/


//shows hidden data
dataButton.onclick = function () {
    hiddenContent.style.display = 'inline';
    
}

//closes the model and hides the content
closeButton.onclick = function () {
    console.log('close button clicked');
    hiddenContent.style.display = 'none';
}

//fetch my json data from the server
fetch('https://api.myjson.com/bins/p31ik').then( function (res) { 
    res.json().then( function (theData) { 
        myResponses = theData
    }) 
});