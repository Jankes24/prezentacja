const questions = [
{
    question: "Jakie jest główne zadanie chipsetu na płycie głównej?",
    answers:[
        {text: "A. Kontrola kolorów podświetlenia RGB.", state: false},
        {text: "B. Zarządzanie komunikacją między podzespołami.", state: true},
        {text: "C. Wydawanie dźwięku z głośników komputera.", state: false},
        {text: "D. Obsługa systemu operacyjnego.", state: false}
    ]
},
{
    question: "Który z poniższych elementów nie jest obsługiwany przez chipset?",
    answers:[
        {text: "A. Porty USB.", state: false},
        {text: "B. Karta graficzna.", state: false},
        {text: "C. Pamięć RAM.", state: false},
        {text: "D. Kamera internetowa.", state: true}
    ]
},
{
    question: "Co to jest overclocking w kontekście chipsetów?",
    answers:[
        {text: "A. Proces zwiększania liczby rdzeni procesora.", state: false},
        {text: "B. Przyspieszanie zegara procesora ponad standardowe ustawienia.", state: true},
        {text: "C. Zmiana kolorów podświetlenia LED.", state: false},
        {text: "D. Dodawanie dodatkowych portów USB.", state: false}
    ]
},
{
    question: "Za co odpowiada mostek północny?",
    answers:[
        {text: "A. Za komunikację procesora z pamięcią RAM i kartą graficzną.", state: true},
        {text: "B. Za komunikację procesora z dyskami SATA, IDE i USB.", state: false},
        {text: "C. Za komunikację procesora z pamięcią cache L2 i ROM.", state: false},
        {text: "D. Za komunikację procesora z pamięcią RAM i dyskami SATA.", state: false}
    ]
},
{
    question: "Czym różni się chipset dla laptopa od chipsetu dla komputera stacjonarnego?",
    answers:[
        {text: "A. Laptopowe chipsety są bardziej energooszczędne.", state: true},
        {text: "B. Laptopowe chipsety obsługują więcej portów USB.", state: false},
        {text: "C. Komputer stacjonarny ma wbudowaną kartę graficzną w chipsetie.", state: false},
        {text: "D. Laptopowe chipsety są bardziej zaawansowaną technologicznią.", state: false}
    ]
},
{
    question: "Który z poniższych interfejsów nie jest kontrolowany przez chipset?",
    answers:[
        {text: "A. SATA.", state: false},
        {text: "B. PCI Express.", state: false},
        {text: "C. HDMI.", state: true},
        {text: "D. USB.", state: false}
    ]
},
{
    question: "Za co odpowiada mostek południowy?",
    answers:[
        {text: "A. Za komunikację procesora z pamięcią RAM i kartą graficzną.", state: false},
        {text: "B. Za komunikację procesora z dyskami SATA, IDE i USB.", state: true},
        {text: "C. Za komunikację procesora z pamięcią cache L2 i ROM.", state: false},
        {text: "D. Za komunikację procesora z pamięcią RAM i dyskami SATA.", state: false}
    ]
},
{
    question: "Co to jest PCH w przypadku chipsetów Intela?",
    answers:[
        {text: "A. Platform Controller Hub - pojedynczy chipset z funkcjami mostków.", state: true},
        {text: "B. Platform Communication Hub - pojedynczy chipset z funkcjami komunikacji.", state: false},
        {text: "C. Platform Configuration Hub - pojedynczy chipset z funkcjami konfiguracji.", state: false},
        {text: "D. Platform Compatibility Hub - pojedynczy chipset z funkcjami", state: false}
    ]
},
{
    question: "Jakie są najnowsze trendy w dziedzinie chipsetów?",
    answers:[
        {text: "A. Wprowadzenie nowych standardów pamięci RAM.", state: false},
        {text: "B. Integracja sztucznej inteligencji w chipsetach.", state: true},
        {text: "C. Rozwój koncepcji trójwymiarowych chipsetów.", state: false},
        {text: "D. Zwiększanie ilości rdzeni w chipsetach procesorów.", state: false}
    ]
},
{
    question: "Co to jest interfejs PCI Express, z którego korzysta większość chipsetów?",
    answers:[
        {text: "A. Port transmisyjny dla monitorów.", state: false},
        {text: "B. Szyna komunikacyjna do przesyłania danych między urządzeniami.", state: true},
        {text: "C. Standardowy port USB.", state: false},
        {text: "D. Jednostka zasilająca dla procesora.", state: false}
    ]
},
{
    question: "Co to jest ZIF w przypadku gniazda procesora?",
    answers:[
        {text: "A. Zero Insertion Force - gniazdo bez siły wkładania.", state: true},
        {text: "B. Zero Interference Force - gniazdo bez siły zakłócania.", state: false},
        {text: "C. Zero Integration Force - gniazdo bez siły integracji.", state: false},
        {text: "D. Zero Inversion Force - gniazdo bez siły odwracania.", state: false}
    ]
},
{
    question: "Co oznacza skrót AGP w przypadku magistrali graficznej?",
    answers:[
        {text: "A. Accelerated Graphics Processor - przyspieszony procesor graficzny.", state: false},
        {text: "B. Advanced Graphics Port - zaawansowany port graficzny.", state: false},
        {text: "C. Accelerated Graphics Port - przyspieszony port graficzny.", state: true},
        {text: "D. Advanced Graphics Processor - zaawansowany procesor graficzny.", state: false}
    ]
},
{
    question: "Co oznacza skrót USB w przypadku portów peryferyjnych?",
    answers:[
        {text: "A. Universal Serial Buffer - uniwersalny szeregowy bufor.", state: false},
        {text: "B. Universal Serial Board - uniwersalna szeregowa płytka.", state: false},
        {text: "C. Universal Serial Bridge - uniwersalny szeregowy mostek.", state: false},
        {text: "D. Universal Serial Bus - uniwersalna szeregowa magistrala.", state: true}
    ]
},
{
    question: "Jakie korzyści przynosi technologia CrossFireX w chipsetach AMD?",
    answers:[
        {text: "A. Integracja z chmurą obliczeniową.", state: false},
        {text: "B. Możliwość jednoczesnego korzystania z kilku kart graficznych.", state: true},
        {text: "C. Wyższa wydajność w grach wideo.", state: false},
        {text: "D. Redukcja zużycia energii.", state: false}
    ]
},
{
    question: "Czy mostek północny został zintegrowany z procesorem?",
    answers:[
        {text: "Prawda", state: true},
        {text: "Falsz", state: false},
    ]
},
{
    question: "Chipsety są odpowiedzialne za zarządzanie komunikacją między różnymi podzespołami na płycie głównej.",
    answers:[
        {text: "Prawda", state: true},
        {text: "Fałsz", state: false},
    ]
},
{
    question: "Czy chipset ma wpływ na wydajność komputera? ",
    answers:[
        {text: "Prawda", state: true},
        {text: "Fałsz", state: false},
    ]
},
{
    question: "Chipsety dla laptopów zazwyczaj są bardziej energooszczędne niż chipsety dla komputerów stacjonarnych.",
    answers:[
        {text: "Prawda", state: true},
        {text: "Fałsz", state: false},
    ]
},
{
    question: "Funkcja overclockingu w chipsetach polega na zwiększaniu ilości rdzeni procesora.",
    answers:[
        {text: "Prawda", state: false},
        {text: "Fałsz", state: true},
    ]
},
{
    question: "Czy chipset ma wpływ na kompatybilność procesora i pamięci RAM?",
    answers:[
        {text: "Prawda", state: true},
        {text: "Fałsz", state: false},
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

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        window.location.href = "index.html";
    }
  });

startQuiz();
