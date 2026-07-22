let btEasy = document.getElementById('EasyLvl')
let btMeduim = document.getElementById('MeduimLvl')
let btHard = document.getElementById('HardLvl')

function StartGame(difficulty){
    if (difficulty == 'easy'){
        localStorage.setItem('Difficulty', 'easy')
    }else if(difficulty == 'medium'){
        localStorage.setItem('Difficulty', 'medium')
    }else if(difficulty == 'hard'){
        localStorage.setItem('Difficulty', 'hard')
    }
    window.location.href = '../html/index.html'
}

btEasy.addEventListener('click', () => StartGame('easy'))
btMeduim.addEventListener('click', () => StartGame('medium'))
btHard.addEventListener('click', () => StartGame('hard'))