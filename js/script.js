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

// Criação de elementos HTML e inserção de itens do array

const jogo = document.getElementById('jogo')
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

jogo.appendChild(grid)

jogoGrid.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')

    card.dataset.name = item.name
    card.style.backgroundImage = `url(${item.img})`

    grid.appendChild(card)
})

// Escolha de somente dois cards e condição caso sejam iguais

grid.addEventListener('click', function(event) {

  let clicar = event.target 

  if(clicar.nodeName === 'SECTION' || clicar === previousTarget) { return }  
  if(cont < 2) {
      cont++
      
      if (cont === 1) {
        primeiroPalpite = clicar.dataset.name
        clicar.classList.add('selected')
      } else {
          segundoPalpite = clicar.dataset.name
          clicar.classList.add('selected')
      }

      if(primeiroPalpite !== '' && segundoPalpite !== '') {
          if(primeiroPalpite === segundoPalpite) {
              match()
          }
      }
      previousTarget = clicar
  }
}) 

// Consequência da combinação de dois cards

const match = () => {
    const selected = document.querySelectorAll('.selected')
    selected.forEach(card => {
        card.classList.add('match')
    })
}