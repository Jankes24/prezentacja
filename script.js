const questions = [
    {
        question: "Do czego slozy chipset",
        answers:[
            {text: "zazodza urzadzeniami pryferyjnymi", state: false},
            {text: "nie", state: true},
            {text: "kicia", state: false},
            {text: "tak", state: false}
        ]
    },
    {
        question: "pytanie 2",
        answers:[
            {text: "odpA2", state: false},
            {text: "odpB2", state: true},
            {text: "odpC2", state: false},
            {text: "odpD2", state: false}
        ]
    },
    {
        question: "pytanie 3",
        answers:[
            {text: "odpA3", state: false},
            {text: "odpB3", state: false},
            {text: "odpC3", state: true},
            {text: "odpD3", state: false}
        ]
    },
    {
        question: "pytanie 4",
        answers:[
            {text: "odpA4", state: false},
            {text: "odpB4", state: false},
            {text: "odpC4", state: false},
            {text: "odpD4", state: true}
        ]
    }
];

const questionText = document.getElementById("question");
const answersButt = document.getElementById("answer-buttons");
const nextButt = document.getElementById("next-btn");

let currentIndex = 0;
let score = 0;

function startQuiz(){
    currentIndex = 0;
    score = 0;
    nextButt.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentIndex];
    let questionNo = currentIndex + 1;
    questionText.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn")
        answersButt.appendChild(button);
        if(answers.state){
            button.dataset.state = answers.state;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButt.style.display = "none";
    while(answersButt.firstChild){
        answersButt.removeChild(answersButt.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.state === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answersButt.children).forEach(button => {
        if(button.dataset.state === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButt.style.display = "block";
}

function showScore() {
        window.location.href = `scoreBoard.html?score=${score}`;
    };

function NextQuestion(){
    currentIndex++;
    if(currentIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButt.addEventListener("click", ()=>{
    if(currentIndex < questions.length){
        NextQuestion();
    }
    else{
        showScore();
    }
});
startQuiz();
