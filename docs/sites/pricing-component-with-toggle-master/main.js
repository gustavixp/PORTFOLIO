const toggle = document.querySelector('#switch')
const card = document.querySelector('.cards')

toggle.addEventListener('click', () => {
    card.classList.toggle('active')
})