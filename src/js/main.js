let bt = document.querySelector('.content button')
let Achvbt = document.getElementById('achievement')

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

let badgesDiv = document.querySelector('.badges')
let badge = localStorage.getItem('Badge')
let badgeList = JSON.parse(localStorage.getItem('Badges')) || [null, null, null] 
let Unequip = localStorage.getItem('Unequip') || null


// [localStorage.getItem('Badges')] ||
// localStorage.setItem('Badges', [null, null, null])
// console.log(Unequip)
console.log(badge)

if (Unequip != null && Unequip != 'null'){
    console.log('boom')
    let index = badgeList.indexOf(Unequip)
    badgeList[index] = null
    localStorage.setItem('Badges', JSON.stringify(badgeList))
    badge = null
    localStorage.setItem('Badge', badge)
    Unequip = null
    localStorage.setItem('Unequip', Unequip)
}

badgeList.forEach(el => {
    for (let img of badgesDiv.children){
        if (el !== null && img.getAttribute('src') == '../images/NoPfp.jpg'){
            img.src = el
            // console.log(img)
            break
        }    
    }
})

if (badge != 'null'){
    // console.log('in here')
    console.log(badgeList)
    badgeList.forEach(el => {  
        if (el == null && !badgeList.includes(badge)){
            let index = badgeList.indexOf(el)
            badgeList[index] = badge  
            for (let img of badgesDiv.children){
                if(img.getAttribute('src') == '../images/NoPfp.jpg'){
                    img.src = badge 
                    console.log(img)
                    break
                }else{
                    console.log(img)
                    console.log('all slots are full')
                }
            }
            localStorage.setItem('Badges', JSON.stringify(badgeList))
            console.log(badgeList)
        }
    })
}

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


bt.addEventListener('click', () => OnClick('selectquiz'))
Achvbt.addEventListener('click', () => OnClick('achievements'))
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


function OnClick(location){
    console.log('here')
    if (location){
        if (location == 'selectquiz'){
            window.location.href = '../html/choosequiz.html'
        }else if(location == 'achievements'){
            window.location.href = '../html/achievements.html'
        }
    }else{
        console.log('no location!')
    }


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