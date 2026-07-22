let backBt = document.querySelector('.content button')

const BtList = [
    {
        name: 'B1',
        img: '../images/WelcomeBadge.png'
    },
    {
        name: 'B2',
        img: '../images/TooEasyBadge.png'
    },
    {
        name: 'B3',
        img: '../images/JustStartingBadge.png'
    }
]

function BackToMenu(){
    window.location.href = '/Users/miras/Documents/IT/JS%20Projects/QuizWorld/src/html/main.html'
}

function OnClick(bt){
    let state = bt.innerText
    let object = BtList.find(button => button.name == bt.id)
    let img = object.img
    // console.log(bt.innerText)
    if (state == 'EQUIP'){
        localStorage.setItem('Badge', img)
        // console.log('here')
    }
}

BtList.forEach(el => {
    let bt = document.getElementById(el.name)
    bt.addEventListener('click', () => OnClick(bt))
})
backBt.addEventListener('click', () => BackToMenu())