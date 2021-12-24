var startButton = document.querySelector(".start-quiz");
var infoBox= document.querySelector(".info_box");
var quitButton = document.querySelector(".buttons .quit");
var continueButton = document.querySelector(".buttons .continue");
var quizForm = document.querySelector(".quiz_form");
var buttonOne = document.getElementById('buttonOne');
var buttonTwo = document.getElementById('buttonTwo');
var buttonThree = document.getElementById('buttonThree');
var buttonFour = document.getElementById('buttonFour');
var timerDiv = document.getElementById('timer_seconds');
var resultForm = document.querySelector(".result_box");
var lastGrade = document.getElementById('score_grade');
var exitQuiz = document.getElementById('quit_new');
var restartButton = document.getElementById('restart_new');
var storeScore = document.getElementById('store_info');
var saveScore = document.querySelector(".log_score");
var submitButton= document.getElementById('saveInfo');
var getName=document.querySelector('.personName');
var getScore = document.querySelector('.personScore');
var displayScore = document.getElementById('displayInfo');
var displayName = document.getElementById('displayName');
var showRegistry = document.getElementById('show');
var clearRegistry = document.getElementById('clear');



// Creating Array for Question, Answers, 

let questions =[
    {
        // index 0
        numb:1,
        question: "Code for styling HTML is typical stored in what type of file?",
        answer: ".css",
        options:[
            ".jss",
            ".css",
            ".html",
            ".txt",
        ]
    },

    {
        //index 1
        numb:2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options:[
            "Cascading Style Sheet",
            "Common Style Sheet",
            "Critcial Style Spec",
            "Computer Spec Sheet",
        ]
    },

    {
        // index 2
        numb:3,
        question: "Arrays in Javascript can hold which of the following?",
        answer: "All of the Above",
        options:[
            "Numbers",
            "Strings",
            "Other Arrays",
            "All of the Above",
        ]
    },
    {
        //index 3 
        numb:4,
        question: "Which Javascript command creates messages in the console when html is inspected?",
        answer: "Console.log()",
        options:[
            "Console.log()",
            "text.value",
            "None of the Above",
            "document.getItemByID"
        ]
    },
    {
        // index 4
        numb:5,
        question: "an object-oriented programming language commonly used to create interactive effects within web browsers?",
        answer: "Javascript",
        options:[
            ".css",
            ".html",
            "Javascript",
            "All of the Above",
        ]
    }
]


// Start Button clicked
startButton.addEventListener('click',function (e){
    console.log("hey");
    e.preventDefault();
    infoBox.classList.add("activeInfo");


})
// If Exit Button is clicked
quitButton.addEventListener('click', function(){
    infoBox.classList.remove("activeInfo");

})

// if Continue button is clicked
continueButton.addEventListener('click', function(){
    infoBox.classList.remove("activeInfo");
    quizForm.classList.add("activeQuizForm");
    displayQuestions();
    countDown();

})

// function renderLocalStorage(){
function showScore(){
    var localName = localStorage.getItem("name");
var localScore = localStorage.getItem("score");
    displayName.text = localName;
displayScore.text = localScore;
};

  
//     usergetName.textContent = localName;
//     usergetScore.textContent = localScore;
// }

//  when final submit button is clicked
submitButton.addEventListener('click', function(){

var localName=localStorage.setItem('name', getName.value);
var localScore=localStorage.setItem('score', getScore.value);
showScore();
return localScore, localName;




})

var questionCount= 0;
var currentScore = 0;
var timer= 60;
var timerID;
var finalScore = currentScore * 20;




var nextButton = document.querySelector(".next_question");

function showResultsBox(){
    lastGrade.textContent= finalScore;
}

// if Next Question Button is hit
// nextButton.addEventListener('click',function(){
//     questionCount++;
//     displayQuestions(questionCount);
//     if (questionCount === 4){
//         nextButton.addEventListener('click', function(){
//             console.log("test");
//         })
//     }
  
// })

function countDown(){
    timerID = setInterval(function(){
        clockTick();
    }, 1000);

}

function clockTick(){
timer--;
timerDiv.textContent= timer;
if (timer ===0 ){
endGame()};
}

function endGame(){
    clearInterval(timerID);
    console.log(currentScore);
    lastGrade.textContent= currentScore*20;
    resultForm.classList.add("activeResults");

}


function checkAnswer(event){
    console.log(event.target);
    if (event.target.innerHTML === questions[questionCount].answer){
    currentScore++;
    }
else {
    timer-=5;
}
questionCount++;
if(questionCount >= questions.length){
    //create end function 
    console.log("end of game");
    endGame();
    submitButton.addEventListener('submit', function(){
    localStorage.setItem("Grade", currentScore)
    })
    
    // showResultsBox();

}
else {
    displayQuestions();
} return currentScore;
}

//getting questions from Array beneath 
function displayQuestions(index){
    var questionText = document.querySelector(".start_text");
    var selectionList = document.querySelector(".selection_list");
    let questionTag = '<span>' + questions[questionCount].numb +" " + questions[questionCount].question + '</span>';

    buttonOne.textContent= questions[questionCount].options[0];
    buttonTwo.textContent= questions[questionCount].options[1];
    buttonThree.textContent= questions[questionCount].options[2];
    buttonFour.textContent= questions[questionCount].options[3];

// previosu code used to render questions no longer necessary, saved for reference 

    // let selectionTag='<div class="selection">'+ questions[index].options[0] +'<span></span></div>'
    // + '<div class="selection">'+ questions[index].options[1] +'<span></span></div>'
    // + '<div class="selection">'+ questions[index].options[2] +'<span></span></div>'
    // + '<div class="selection">'+ questions[index].options[3] +'<span></span></div>'

    questionText.innerHTML = questionTag;
    // selectionList.innerHTML = selectionTag;

}

exitQuiz.addEventListener('click', function(){
    infoBox.classList.remove("activeInfo");
    quizForm.classList.remove("activeQuizForm");
    resultForm.classList.remove("activeResults");
})

restartButton.addEventListener('click', function(){
    infoBox.classList.remove("activeInfo");
    // quizForm.classList.add("activeQuizForm");
    resultForm.classList.remove("activeResults");
    displayQuestions();
    countDown();


})


storeScore.addEventListener('click', function(){
    // var newElement = document.createElement('form');
    infoBox.classList.remove("activeInfo");
    saveScore.classList.add("activeLog");
     quizForm.classList.remove("activeQuizForm");
    resultForm.classList.remove("activeResults");
    document.body.appendChild(newElement);
})

// Pulls stored info from Local Storage
showRegistry.addEventListener('click', function(e){
    console.log("working");
    e.preventDefault();
    var localSavedName = localStorage.getItem("name");
    var localSavedScore = localStorage.getItem("score");
    displayName.innerHTML ="your name is" +" "+ localSavedName;
    displayScore.innerHTML ="your score is" + " " + localSavedScore;
});

// Clears stored data from local Storage
clearRegistry.addEventListener('click', function(e){
    console.log("working");
    e.preventDefault();
localStorage.clear();
displayName.innerHTML =" ";
displayScore.innerHTML =" ";


});


// seperate code using different method to generate questions and answers

// let quizGo =[
//     {
//         // index 0
//         question: "Code for styling HTML is typical stored in what type of file?",
//         options:[
//             ".jss",
//             ".css",
//             ".html",
//             ".txt",
//         ],
//         answer:1
//     },

//     {
        //index 1

//         question: "What does CSS stand for?",
//         options:[
//             "Cascading Style Sheet",
//             "Common Style Sheet",
//             "Critcial Style Spec",
//             "Computer Spec Sheet",
//         ],
//         answer: 0
//     },

//     {
//         // index 2

//         question: "Arrays in Javascript can hold which of the following?",
//         options:[
//             "Numbers",
//             "Strings",
//             "Other Arrays",
//             "All of the Above",
//         ],
//         answer: 3
//     },
//     {
//         //index 3 

//         question: "Which Javascript command creates messages in the console when html is inspected?",
//         options:[
//             "Console.log()",
//             "text.value",
//             "None of the Above",
//             "document.getItemByID"
//         ],
//         answer:0
//     },
//     {
//         // index 4

//         question: "an object-oriented programming language commonly used to create interactive effects within web browsers?",
//         answer: "Javascript",        options:[
//             ".css",
//             ".html",
//             "Javascript",
//             "All of the Above",
//         ],
//         answer:2
//     }
//