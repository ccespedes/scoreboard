const homeEl = document.getElementById('home')
const guestEl = document.getElementById('guest')
const btnHome1 = document.getElementById('plus-btn-home-1')
const btnHome2 = document.getElementById('plus-btn-home-2')
const btnHome3 = document.getElementById('plus-btn-home-3')
const btnGuest1 = document.getElementById('plus-btn-guest-1')
const btnGuest2 = document.getElementById('plus-btn-guest-2')
const btnGuest3 = document.getElementById('plus-btn-guest-3')
const resetBtn = document.getElementById('reset-btn')

let homeScore = 0
let guestScore = 0

btnHome1.addEventListener('click', () => {
    addScore(1, 'home')
})

btnHome2.addEventListener('click', () => {
    addScore(2, 'home')
})

btnHome3.addEventListener('click', () => {
    addScore(3, 'home')
})

btnGuest1.addEventListener('click', () => {
    addScore(1, 'guest')
})

btnGuest2.addEventListener('click', () => {
    addScore(2, 'guest')
})

btnGuest3.addEventListener('click', () => {
    addScore(3, 'guest')
})

function addScore(value, side) {
    if (side === 'home') {
        homeScore = homeScore + value
        homeEl.innerText = homeScore
    } else {
        guestScore = guestScore + value
        guestEl.innerText = guestScore
    }
}

resetBtn.addEventListener('click', () => {
    homeScore = 0
    guestScore = 0
    homeEl.innerText = homeScore
    guestEl.innerText = guestScore
})
