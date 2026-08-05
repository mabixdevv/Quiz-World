let BackBt = document.getElementById('BackBt')
let BuyBts = document.querySelectorAll('.cards button')

let money = localStorage.getItem('Money') || 0
let moneyTxt = document.getElementById('MoneyTxt')

const price = [
    {
        name: 'Friendly',
        cost: 20,
        state: 'Locked'
    },
    {
        name: 'Curious',
        cost: 20,
        state: 'Locked'
    },
    {
        name: 'Chill',
        cost: 20,
        state: 'Locked'
    }
]


function OnClickState(bt){
    let nameBt = bt.parentElement.querySelector('span')
    let state = null

    price.forEach(el => {
        if (el.state != 'Locked'){
            if (el.name == nameBt){
                state = el.state
                console.log(state)
            }else{
                console.log('noname')
                return
            }
        }
    })

    if (state == 'Equip'){
        state = 'Unequip'
        bt.innerText = 'Unequip'
        localStorage.setItem('Tag', nameBt)
    }else if(state == 'Unequip'){
        state = 'Equip'
        bt.innerText = 'Equip'
        localStorage.setItem('Tag', nameBt)
    }
}


function OnClickBuy(bt){
    let name = bt.parentElement.querySelector('span')
    let cost = null
    let element = null

    price.forEach(el => {
        if (el.state == 'Locked'){
            if (el.name == name.innerText){
                element = el
                console.log(el)
                cost = el.cost
            }else{
                console.log('no cost')
            }
        }
    })

    if (money >= cost){
        // console.log(element.state)
        money -= cost
        element.state = 'Equip'
        bt.innerText = 'Equip'
        bt.removeEventListener('click', () => OnClickBuy(el));
        Update()
        EventUpd()
    }
}


function OnClick(state){
    if (state = 'Back'){
        document.location.href = '../html/main.html'
    }
}

function Update(){
    moneyTxt.innerText = money
}

BackBt.addEventListener('click', () => OnClick('Back'))


BuyBts.forEach(el => {
    el.addEventListener('click', () => OnClickBuy(el))
})


EventUpd()
Update()