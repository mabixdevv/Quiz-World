let btEasy = document.getElementById('EasyLvl')
let btMeduim = document.getElementById('MeduimLvl')
let btHard = document.getElementById('HardLvl')

function StartGame(difficulty){
    if (difficulty == 'easy'){
        localStorage.setItem('Difficulty', 'easy')
        window.location.href = 'file:///Users/miras/Documents/IT/JS%20Projects/QuizProject/src/html/index.html'
    }else if(difficulty == 'medium'){
        localStorage.setItem('Difficulty', 'medium')
        window.location.href = 'file:///Users/miras/Documents/IT/JS%20Projects/QuizProject/src/html/index.html'
    }else if(difficulty == 'hard'){
        localStorage.setItem('Difficulty', 'hard')
        window.location.href = 'file:///Users/miras/Documents/IT/JS%20Projects/QuizProject/src/html/index.html'
    }
}

btEasy.addEventListener('click', () => StartGame('easy'))
btMeduim.addEventListener('click', () => StartGame('medium'))
btHard.addEventListener('click', () => StartGame('hard'))