let bt = document.querySelector('.content button')

let bar = document.querySelector('.xpbar')
let FillBar = document.querySelector('.bar')
let BarTxt = document.querySelector('.xpbar span')

let levelTxt = document.querySelector('.profileChar span')
let NameEdit = document.querySelector('.wrapper img')
let name = document.querySelector('.wrapper h3')

let labelImg = document.querySelector('.profileInfo label img')
let input = document.querySelector('.profileInfo input')

let Xp = Number(localStorage.getItem('GameXp')) + Number(localStorage.getItem('Xp'))|| 0
let level = Number(localStorage.getItem('level')) || 1
let maxXp = level * 20

let money = localStorage.getItem('Money') || 0
let moneyTxt = document.getElementById('moneyTxt')

let reader = new FileReader();

reader.onload = () => {
    console.log(reader.result);
    localStorage.setItem('pfp', reader.result)
}

// localStorage.setItem('GameXp', 0)
// localStorage.setItem('Xp', Xp)

name.innerText = localStorage.getItem('Name')
if (localStorage.getItem('pfp') && labelImg){
    labelImg.src = localStorage.getItem('pfp')
}else if (localStorage.getItem('pfp') == 'null'){
    labelImg.src = '../images/NoPfp.jpg'
}


bt.addEventListener('click', () => OnClick())
input.addEventListener('change', () => ProfilePictureUpdate())
NameEdit.addEventListener('click', () => NameChange())

// localStorage.setItem('level', 1)
// localStorage.setItem('xp', 0)
// localStorage.setItem('pfp', null)

console.log(Xp)
console.log(level)
console.log(maxXp)


function UpdateMoney(){
    moneyTxt.innerText = money
    console.log(money)
}

function NameChange(){
    let inputName = document.createElement('input')
    inputName.style.marginBottom = 50 + 'px'
    inputName.type = "text"
    inputName.placeholder = "New Name";
    inputName.addEventListener('change', function(){
        if (inputName.value.trim().length > 0){
            name.innerText = inputName.value
            localStorage.setItem('Name', name.innerText)
            inputName.remove()
        }
    })
    document.querySelector('.wrapper').appendChild(inputName);

    

}


function ProfilePictureUpdate(){
    let picture = URL.createObjectURL(input.files[0])
    labelImg.src = picture
    reader.readAsDataURL(input.files[0])
}


function OnClick(){
    console.log('here')
    window.location.href = 'file:///Users/miras/Documents/IT/JS%20Projects/QuizProject/src/html/choosequiz.html'
}


function UpdateXp(){
    while (Xp >= maxXp){
        level += 1
        maxXp = level * 50
    }

    let percentage = Math.floor(Xp)/maxXp * 100
    localStorage.setItem('level', level)

    FillBar.style.width = percentage + '%';
    BarTxt.innerText = 'XP:' + Math.floor(percentage) + '%';
    levelTxt.innerText = 'Level: ' + level
}

UpdateXp()
UpdateMoney()