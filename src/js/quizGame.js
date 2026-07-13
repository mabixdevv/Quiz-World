"use strict";


let questionVar = null;
let questionsSolved = 0;
let questionCount = 1
let difficulty = localStorage.getItem('Difficulty')
let maxQuestions = 5
if (difficulty == 'hard'){
    maxQuestions = 10
}

let totalxp = 0
const questions = [
    {
        "question": "How many continents is there on a planet Earth?", 
        "answers": [
            {"name":"5", "value":false, "used":false},
            {"name": "7", "value":true, "used":false},
            {"name": "6", "value":false, "used":false},
            {"name": "4", "value":false, "used":false}
        ],
        "xp": 15,
        "used": false
    },
    {
        "question": "What is the most populated city on Earth?", 
        "answers": [
            {"name": "Tokyo", "value":false, "used":false},
            {"name": "New York City", "value":false, "used":false},
            {"name": "New Delhi", "value":false, "used":false},
            {"name": "Jakarta", "value":true, "used":false}
        ],
        "xp": 15,
        "used": false
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "answers": [
            {"name": "Venus", "value": false, "used": false},
            {"name": "Mars", "value": true, "used": false},
            {"name": "Jupiter", "value": false, "used": false},
            {"name": "Saturn", "value": false, "used": false}
        ],
        "xp": 10,
        "used": false
    },
    {
        "question": "What is the largest ocean on Earth?",
        "answers": [
            {"name": "Atlantic Ocean", "value": false, "used": false},
            {"name": "Indian Ocean", "value": false, "used": false},
            {"name": "Pacific Ocean", "value": true, "used": false},
            {"name": "Arctic Ocean", "value": false, "used": false}
        ],
        "xp": 10,
        "used": false
    },
    {
        "question": "Who painted the famous artwork 'Mona Lisa'?",
        "answers": [
            {"name": "Vincent van Gogh", "value": false, "used": false},
            {"name": "Leonardo da Vinci", "value": true, "used": false},
            {"name": "Pablo Picasso", "value": false, "used": false},
            {"name": "Michelangelo", "value": false, "used": false}
        ],
        "xp": 15,
        "used": false
    }
];

const questionsMeduim = [
    {
        "question": "How many players are on the field at the same time for one single team during a standard soccer match?",
        "answers": [
            {"name": "9", "value": false, "used": false},
            {"name": "10", "value": false, "used": false},
            {"name": "11", "value": true, "used": false},
            {"name": "12", "value": false, "used": false}
        ],
        "xp": 20,
        "used": false
    },
    {
        "question": "What pigment gives plants their green color and helps them absorb light during photosynthesis?",
        "answers": [
            {"name": "Chlorophyll", "value": true, "used": false},
            {"name": "Carotenoid", "value": false, "used": false},
            {"name": "Hemoglobin", "value": false, "used": false},
            {"name": "Melanin", "value": false, "used": false}
        ],
        "xp": 20,
        "used": false
    },
    {
        "question": "In ancient mythology, who is the ruler of the underworld?",
        "answers": [
            {"name": "Zeus", "value": false, "used": false},
            {"name": "Poseidon", "value": false, "used": false},
            {"name": "Hades", "value": true, "used": false},
            {"name": "Ares", "value": false, "used": false}
        ],
        "xp": 20,
        "used": false
    },
    {
        "question": "What ancient Roman structure was built to host massive gladiator fights and public spectacles?",
        "answers": [
            {"name": "The Pantheon", "value": false, "used": false},
            {"name": "The Colosseum", "value": true, "used": false},
            {"name": "The Forum", "value": false, "used": false},
            {"name": "The Parthenon", "value": false, "used": false}
        ],
        "xp": 20,
        "used": false
    },
    {
        "question": "How many total bones are found in a fully developed, adult human body?",
        "answers": [
            {"name": "206", "value": true, "used": false},
            {"name": "300", "value": false, "used": false},
            {"name": "150", "value": false, "used": false},
            {"name": "212", "value": false, "used": false}
        ],
        "xp": 25,
        "used": false
    },
]

const questionsHard = [
    {
        "question": "Which empire constructed the ancient city of Machu Picchu, hidden high in the Andes mountains?",
        "answers": [
            {"name": "Aztec Empire", "value": false, "used": false},
            {"name": "Mayan Empire", "value": false, "used": false},
            {"name": "Inca Empire", "value": true, "used": false},
            {"name": "Roman Empire", "value": false, "used": false}
        ],
        "xp": 40,
        "used": false
    },
    {
        "question": "Which country is home to the highest number of active volcanoes in the world?",
        "answers": [
            {"name": "Japan", "value": false, "used": false},
            {"name": "Iceland", "value": false, "used": false},
            {"name": "Indonesia", "value": true, "used": false},
            {"name": "United States", "value": false, "used": false}
        ],
        "xp": 45,
        "used": false
    },
    {
        "question": "Which superhero team made their very first appearance in Marvel comic books in 1961, starting the modern Marvel Universe?",
        "answers": [
            {"name": "The Avengers", "value": false, "used": false},
            {"name": "The X-Men", "value": false, "used": false},
            {"name": "The Fantastic Four", "value": true, "used": false},
            {"name": "The Guardians of the Galaxy", "value": false, "used": false}
        ],
        "xp": 40,
        "used": false
    },
    {
        "question": "Which essential organ in the human body is responsible for producing insulin to regulate blood sugar levels?",
        "answers": [
            {"name": "Liver", "value": false, "used": false},
            {"name": "Pancreas", "value": true, "used": false},
            {"name": "Kidney", "value": false, "used": false},
            {"name": "Appendix", "value": false, "used": false}
        ],
        "xp": 45,
        "used": false
    },
    {
        "question": "What is the absolute coldest possible temperature universe-wide, measured at zero Kelvin?",
        "answers": [
            {"name": "-273.15 °C", "value": true, "used": false},
            {"name": "0 °C", "value": false, "used": false},
            {"name": "-100 °C", "value": false, "used": false},
            {"name": "-459.67 °C", "value": false, "used": false}
        ],
        "xp": 40,
        "used": false
    },
    {
        "question": "What is the name of the standard, universally used character encoding standard that allows computers to display text and emojis in any language?",
        "answers": [
            {"name": "ASCII", "value": false, "used": false},
            {"name": "Unicode", "value": true, "used": false},
            {"name": "HTML", "value": false, "used": false},
            {"name": "Binary", "value": false, "used": false}
        ],
        "xp": 45,
        "used": false
    },
    {
        "question": "Which of these is the only flightless bird native to the islands of New Zealand that cannot move its wings at all?",
        "answers": [
            {"name": "Kiwi", "value": true, "used": false},
            {"name": "Ostrich", "value": false, "used": false},
            {"name": "Penguin", "value": false, "used": false},
            {"name": "Emu", "value": false, "used": false}
        ],
        "xp": 40,
        "used": false
    },
    {
        "question": "What is the name of the oldest surviving written epic poem in world history, originating from ancient Mesopotamia?",
        "answers": [
            {"name": "The Odyssey", "value": false, "used": false},
            {"name": "The Epic of Gilgamesh", "value": true, "used": false},
            {"name": "The Iliad", "value": false, "used": false},
            {"name": "Beowulf", "value": false, "used": false}
        ],
        "xp": 45,
        "used": false
    },
    {
        "question": "Which chemical element on the Periodic Table has the atomic number 1, making it the lightest and most abundant element in the universe?",
        "answers": [
            {"name": "Helium", "value": false, "used": false},
            {"name": "Oxygen", "value": false, "used": false},
            {"name": "Hydrogen", "value": true, "used": false},
            {"name": "Carbon", "value": false, "used": false}
        ],
        "xp": 40,
        "used": false
    },
    {
        "question": "What is the name of the network of trade routes that connected China and the Far East with Europe and the Mediterranean for centuries?",
        "answers": [
            {"name": "The Amber Road", "value": false, "used": false},
            {"name": "The Spice Route", "value": false, "used": false},
            {"name": "The Silk Road", "value": true, "used": false},
            {"name": "The Incense Route", "value": false, "used": false}
        ],
        "xp": 40,
        "used": false
    },
]

function UpdateQuestionlog(){
    let questionSolvedTxt = document.querySelector('.subinfo h3')
    questionSolvedTxt.innerText = 'Question: ' + questionCount + '/' + maxQuestions
}

function NextQuestion(){
    questionsSolved ++
    questionCount ++
    UpdateQuestionlog()

    document.querySelectorAll('.option').forEach(el => {
        let span = document.createElement('span')
        el.append(span)
    })
    document.querySelectorAll('.option span').forEach(el => {
    el.addEventListener("click", () => OnClick(el))
    })
    Generate(false)
}


function Retry(){
    // console.log('Retry function')
    document.querySelectorAll('.option').forEach(el => {
        let span = document.createElement('span')
        el.append(span)
    })
    document.querySelectorAll('.option span').forEach(el => {
    el.addEventListener("click", () => OnClick(el))
    })
    document.querySelectorAll('.option span').forEach(el => {
        for (let element of questionVar.answers){
            if (element.used == true){
                el.innerText = element.name
                element.used = false
                break
            }
        }
    })
    Generate(true)
}


function FinishGame(Bt){
    let h2 = document.querySelector('.info h2')
    h2.innerText = 'You won!'
    let h3 = document.querySelector('.subinfo h3')
    h3.innerText = 'Result: '
    let XpSpan = document.querySelector('.subinfo span')
    XpSpan.innerText = totalxp + 'xp'
    Bt.innerText = 'Lobby'

    if (difficulty == 'easy'){
        localStorage.setItem('Money', 10)
    }else if(difficulty == 'meduim'){
        localStorage.setItem('Money', 30)
    }else if(difficulty == 'hard'){
        localStorage.setItem('Money', 50)}
}

function ButtonClick(Button){
    console.log('here' + Button.innerText)
    if (Button.innerText == 'NEXT QUESTION'){
        console.log('right statment')
        NextQuestion()
        Button.remove()
        // UpdateQuestionlog()
    }else if(Button.innerText == 'TRY AGAIN'){
        Retry()
        Button.remove()
    }else if( Button.innerText == 'FINISH'){
        FinishGame(Button)
        // UpdateQuestionlog() 
    }else if(Button.innerText == 'LOBBY'){
        localStorage.setItem('GameXp', totalxp)
        window.location.href = '/Users/miras/Documents/IT/JS%20Projects/QuizWorld/src/html/main.html'
    }
}

function Update(nextQuestion){
    console.log(nextQuestion)

    document.querySelectorAll('.option span').forEach(el =>{el.remove()})

    let Bt = document.createElement('button')
    Bt.classList.add('Bt')
    document.querySelector('.bg').append(Bt)
    Bt.addEventListener('click', () => ButtonClick(Bt))

    if(questionCount == maxQuestions){
        document.querySelector('.info h2').innerText = 'You right!'
        Bt.innerText = 'Finish'
    }else{
        if (nextQuestion == true){
            document.querySelector('.info h2').innerText = 'You right!'
            document.querySelector('.info h2').classList.add('result')
            Bt.innerText = 'Next question'
            questionVar.used = true
        }else if (nextQuestion == false){
            document.querySelector('.info h2').innerText = 'You wrong!'
            document.querySelector('.info h2').classList.add('result')
            Bt.innerText = 'Try again'
        }
    }


}


function Generate(again){
    console.log("Generate Function has been called")

    console.log(difficulty)

    if (difficulty == 'easy'){
        if (again == false){
            if (questionVar != null){
                if (questions.some(question => !question.used)){
                    let TempquestionVar = questions[Math.floor(Math.random() * questions.length)]
                    if (TempquestionVar.used == false){
                        questionVar = TempquestionVar
                    }else{
                        Generate(false)
                    }
                }else{
                    document.querySelector('.info h2').innerText = 'You Won!'
                    console.log('no questions left')
                    return
                }
            }else{
                questionVar = questions[Math.floor(Math.random() * questions.length)]
            }
        }
    } else if(difficulty == 'medium'){
        if (again == false){
            if (questionVar != null){
                if (questions.some(question => !question.used)){
                    let TempquestionVar = questionsMeduim[Math.floor(Math.random() * questionsMeduim.length)]
                    if (TempquestionVar.used == false){
                        questionVar = TempquestionVar
                    }else{
                        Generate(false)
                    }
                }else{
                    document.querySelector('.info h2').innerText = 'You Won!'
                    console.log('no questions left')
                    return
                }
            }else{
                questionVar = questionsMeduim[Math.floor(Math.random() * questionsMeduim.length)]
            }
        }
    }else if(difficulty == 'hard'){
        maxQuestions = 10
        if (again == false){
            if (questionVar != null){
                if (questions.some(question => !question.used)){
                    let TempquestionVar = questionsHard[Math.floor(Math.random() * questionsHard.length)]
                    if (TempquestionVar.used == false){
                        questionVar = TempquestionVar
                    }else{
                        Generate(false)
                    }
                }else{
                    document.querySelector('.info h2').innerText = 'You Won!'
                    console.log('no questions left')
                    return
                }
            }else{
                questionVar = questionsHard[Math.floor(Math.random() * questionsHard.length)]
            }
        }
    }


    console.log(questionVar)

    document.getElementById('Question').innerText = questionVar.question
    document.querySelector('.subinfo span').innerText = questionVar.xp + 'xp'
    document.querySelectorAll('.option span').forEach(el => {
        for (let element of questionVar.answers){
            if (element.used == false){
                el.innerText = element.name
                element.used = true
                break
            }
        }
    })
}


function OnClick(span){
    let answerTxt = span.innerText
    console.log(answerTxt)
    let questionAnswers = null
    let value = null


    questionVar.answers.forEach(element => {
        if (element.name == answerTxt){
            console.log(element.name)
            value = element.value
        }
    });

    if (value == true){
        console.log('Right!')
        totalxp += questionVar.xp
        console.log(totalxp)
        Update(true)
    }else{
        Update(false) 
    }
}

document.querySelectorAll('.option span').forEach(el => {
    el.addEventListener("click", () => OnClick(el))
})

Generate(false)
UpdateQuestionlog()