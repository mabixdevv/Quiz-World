let backBt = document.querySelector('.content button')

const BtList = JSON.parse(localStorage.getItem('State')) || [
    {
        name: 'B1',
        img: '../images/WelcomeBadge.png',
        state: 'Equip'
    },
    {
        name: 'B2',
        img: '../images/TooEasyBadge.png',
        state: 'Equip'
    },
    {
        name: 'B3',
        img: '../images/JustStartingBadge.png',
        state: 'Equip'
    },
    {
        name: 'B4',
        img: '../images/ChallengeAcceptedBadge.png',
        state: 'Equip'
    },
    {
        name: 'B5',
        img: '../images/GotEmAllBadge.png',
        state: 'Equip'
    }
]


function CheckEquip(){
    let equipped = 0

   for (object of BtList){
        if (object.state == 'Unequip'){
            equipped ++
            // console.log('here')
        }
    }
    
    if (equipped >= 3){
        console.log('heree') 
        return true
    }

}

function BackToMenu(){
    window.location.href = '../html/main.html'
}

function OnClick(bt){
    let object = BtList.find(button => button.name == bt.id)
    let img = object.img
    console.log(bt)
    console.log(object)
    console.log(object.state)
    console.log(BtList)

    if(object.state == 'Unequip'){
        console.log('here')
        localStorage.setItem('Unequip', img)
        object.state = 'Equip'
        bt.innerText = object.state
        console.log(object.state)
        console.log(bt.innerText)
        localStorage.setItem('State', JSON.stringify(BtList))
        return
    }

    let check = CheckEquip()
    // console.log(check)

    if (check){
        return
    }

    if (object.state == 'Equip'){
        localStorage.setItem('Badge', img)
        object.state = 'Unequip'
        bt.innerText = object.state
        localStorage.setItem('State', JSON.stringify(BtList))
    }
}

BtList.forEach(el => {
    let bt = document.getElementById(el.name)
    bt.innerText = el.state
    bt.addEventListener('click', () => OnClick(bt))
})
backBt.addEventListener('click', () => BackToMenu())
// localStorage.setItem('State', null)