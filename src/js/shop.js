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
    },
    {
        name: 'Night Owl',
        cost: 50,
        state: 'Locked',
        color: '#23395D'
    },
    {
        name: 'Pirate',
        cost: 50,
        state: 'Locked',
        color: '#8B1E2D'
    },
    {
        name: 'Mastermind',
        cost: 50,
        state: 'Locked',
        color: '#7C3AED'
    }
]


function OnClickBuy(bt){
    let name = bt.parentElement.querySelector('span')
    let tag = null
    
    for(let el of price){
        if (el.name == name.innerText){
            tag = price[price.indexOf(el)]
            // console.log(tag)
            break
        }
    }

    let cost = tag.cost
    let state = tag.state

    if(state == 'Locked'){
        if (money >= cost){
            money -= cost
            tag.state = 'Equip'
            bt.innerText = 'Equip'
            Update()
            // console.log(bt.innerText)
            // console.log(name.innerText)
            // console.log(state)
        }
    }else if(state == 'Equip'){
        // console.log('herere')
        tag.state = 'Unequip'
        bt.innerText = 'Unequip'
        localStorage.setItem('Tag', JSON.stringify([tag.name, tag.color]))
    }else if (state== 'Unequip'){
        tag.state = 'Equip'
        bt.innerText = 'Equip'
        localStorage.setItem('UnTag', tag.name)
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



Update()