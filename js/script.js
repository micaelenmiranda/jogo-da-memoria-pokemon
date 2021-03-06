const cardsArray = [

    {
        name: 'bulbasaur',
        img: 'img/bulbasaur.gif',
    },

    {
        name: 'psyduck',
        img: 'img/psyduck.gif',
    },

    {
        name: 'pikachu',
        img: 'img/pikachu.gif',
    },

    {
        name: 'vaporeon',
        img: 'img/vaporeon.gif',
    },

    {
        name: 'espeon',
        img: 'img/espeon.gif',
    },

    {
        name: 'jigglypuff',
        img: 'img/jigglypuff.gif',
    },

    {
        name: 'jolteon',
        img: 'img/jolteon.gif',
    },

    {
        name: 'snorlax',
        img: 'img/snorlax.gif',
    },

    {
        name: 'meowth',
        img: 'img/meowth.gif',
    },

    {
        name: 'ditto',
        img: 'img/ditto.gif',
    },

    {
        name: 'squirtle',
        img: 'img/squirtle.gif',
    },

    {
        name: 'charmander',
        img: 'img/charmander.gif'
    },
]

// Duplicação do array

const jogoGrid = cardsArray.concat(cardsArray)
jogoGrid.sort(() => 0.5 - Math.random())

// Variáveis

let primeiroPalpite = ''
let segundoPalpite = ''
let previousTarget = null
let cont = 0
let delay = 1200

// Criação de elementos HTML e inserção de itens do array

const jogo = document.getElementById('jogo')
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

jogo.appendChild(grid)

jogoGrid.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.name = item.name    

    const front = document.createElement('div')
    front.classList.add('front')

    const back = document.createElement('div')
    back.classList.add('back')
    back.style.backgroundImage = `url(${item.img})`

    grid.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
})

// Funções de consequência da combinação de dois cards

const match = () => {
    const selected = document.querySelectorAll('.selected')
    selected.forEach(card => {
        card.classList.add('match')
    })
}

const resetPalpites = () => {
    primeiroPalpite = ''
    segundoPalpite = ''
    cont = 0
    previousTarget = null

    var selected = document.querySelectorAll('.selected')
    selected.forEach(card => {
        card.classList.remove('selected')
    })
}

// Escolha de somente dois cards e condição caso sejam iguais

grid.addEventListener('click', function(event) {

  let clicar = event.target 

  if(clicar.nodeName === 'SECTION' || clicar === previousTarget || clicar.parentNode.classList.contains('selected')) { return }  
  if(cont < 2) {
      cont++
      
      if (cont === 1) {
        primeiroPalpite = clicar.parentNode.dataset.name
        console.log(primeiroPalpite)
        clicar.parentNode.classList.add('selected')
      } else {
          segundoPalpite = clicar.parentNode.dataset.name
          console.log(segundoPalpite)
          clicar.parentNode.classList.add('selected')
      }

      if(primeiroPalpite !== '' && segundoPalpite !== '') {
          if(primeiroPalpite === segundoPalpite) {
             setTimeout(match, delay)
             setTimeout(resetPalpites, delay)
          } else {
             setTimeout(resetPalpites, delay)
          }
      }
      previousTarget = clicar
  }
}) 
