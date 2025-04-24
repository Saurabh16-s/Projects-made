const questions = [
    {
        question:"Timeline of French revolution?",
        answers:[
            {text:"1789-1793",correct:false},
            {text:"1789-1794",correct:true},
            {text:"1789-1795",correct:false},
            {text:"1789-1796",correct:false},
        ]
    },
    {
        question:"Which one of the following is not a Harappan site?",
        answers:[
            {text:"Chanhudaro",correct:false},
            {text:"KOt diji",correct:false},
            {text:"Sohgaura",correct:true},
            {text:"Desalpur",correct:false},
        ]
    },
    {
        question:"Maine aaj kitni roti khaayi?",
        answers:[
            {text:"2",correct:false},
            {text:"3",correct:true},
            {text:"2.5",correct:false},
            {text:"3.5",correct:false},
        ]
    },
    {
        question:"kiki ek din me kitne ghnte soti hai?",
        answers:[
            {text:"12",correct:false},
            {text:"11",correct:false},
            {text:"17",correct:false},
            {text:"13",correct:true},
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
  

function startQuiz(){

    currentQuestionIndex=0;
    score =0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo +". "+currentQuestion.
    question;

    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;

        }
        button.addEventListener("click",selectAnswer);

    });
}


function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");

        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"


}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();

    }
});


startQuiz();
