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

// Criação de elementos HTML

const jogo = document.getElementById('jogo')
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

jogo.appendChild(grid)

// Inserção de itens do array e criação dos cards duplos 

const jogoGrid = cardsArray.concat(cardsArray)
jogoGrid.sort(() => 0.5 - Math.random()) 

jogoGrid.forEach (item => {
    const card = document.createElement('div')
    card.classList.add('card')

    card.dataset.name = item.name
    card.style.backgroundImage = `url(${item.img})`

    grid.appendChild(card)
}) 





