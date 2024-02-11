const questions = [
    {
        question:" HTML stands for: ",
        answers:[
        {text:"Http Text Markup Language", correct:false},
        {text:"Hyper Text Made Language", correct:false},
        {text:"Hyper Transfer Markup Length", correct:false},
        {text:"Hyper Text Markup Language", correct:true},
        ]

    },
    {
        question:"How do you make text show as bold in HTML?",
        answers:[
        {text:"span", correct:false},
        {text:"strong", correct:true},
        {text:"bold", correct:false},
        {text:"i", correct:false},
        ] 
    },
    {
        question:" HTML tags are except",
        answers:[
        {text:"hr", correct:false},
        {text:"br", correct:false},
        {text:"style", correct:true},
        {text:"span", correct:false},
        ]
    },
    {
        question:"JavaScript data types are except",
        answers:[
        {text:"boolean", correct:false},
        {text:"color", correct:true},
        {text:"number", correct:false},
        {text:"string", correct:false},
        ]
    }
]
const questionElement= document.getElementById("question")
const answerButton= document.getElementById("answers-button")
const nextButton= document.getElementById("next-btn")

let currentQuestionsIndex= 0;
let score=0;

function startQuiz(){
    currentQuestionsIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion()
}
function showQuestion(){
    resetState()
    let currentQuestions= questions[currentQuestionsIndex];
    let questionNo= currentQuestionsIndex + 1;
    questionElement.innerHTML=questionNo + ". " + currentQuestions.question;

    currentQuestions.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        /// below code will add true or false in button
       if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer)


    })

}
function  resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }



}
function selectAnswer(e){
    const selectBtn= e.target;
    const isCorrect= selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;

    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if( button.dataset.correct=== "true"){
            button.classList.add("correct");

        }
        button.disabled=true
    })
    nextButton.style.display="block";



}
function showScore(){
    resetState()
    questionElement.innerHTML= ` You are scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML= "Play Again";
    nextButton.style.display="block";
}
function   handleNextButton(){
    currentQuestionsIndex ++;
    if(currentQuestionsIndex < questions.length){
        showQuestion()

    }else{
        showScore();
    }


}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionsIndex < questions.length){
        handleNextButton()

    }else{
        startQuiz()
    }
})
startQuiz()


