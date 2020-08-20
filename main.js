$(document).ready(function () {

    const cards = [
        {
            myCard: 1,
            img: 'pictures/covid1.png'
        },
        {
            myCard: 1,
            img: 'pictures/covid1.png'
        },
        {
            myCard: 2,
            img: 'pictures/covid2.png'
        },
        {
            myCard: 2,
            img: 'pictures/covid2.png'
        },
        {
            myCard: 3,
            img: 'pictures/covid3.png'
        },
        {
            myCard: 3,
            img: 'pictures/covid3.png'
        },
        {
            myCard: 4,
            img: 'pictures/covid4.png'
        },
        {
            myCard: 4,
            img: 'pictures/covid4.png'
        },
        {
            myCard: 5,
            img: 'pictures/covid5.png'
        },
        {
            myCard: 5,
            img: 'pictures/covid5.png'
        },
        {
            myCard: 6,
            img: 'pictures/covid6.png'
        },
        {
            myCard: 6,
            img: 'pictures/covid6.png'
        },
        {
            myCard: 7,
            img: 'pictures/covid7.png'
        },
        {
            myCard: 7,
            img: 'pictures/covid7.png'
        },
        {
            myCard: 8,
            img: 'pictures/covid8.png'
        },
        {
            myCard: 8,
            img: 'pictures/covid8.png'
        },
        {
            myCard: 9,
            img: 'pictures/covid9.png'
        },
        {
            myCard: 9,
            img: 'pictures/covid9.png'
        }
        ]
    
    //shuffle array    
    
    let shuffle = function shuffleCards(cards) {
        let currentIndex = cards.length
        var temporaryValue
        var randomIndex
    
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1
    
            temporaryValue = cards[currentIndex]
            cards[currentIndex] = cards[randomIndex]
            cards[randomIndex] = temporaryValue
        }
    
        return cards
    }    
    
    init()
    shuffle(cards)
    
    const grid = document.querySelector('.cards')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    let lives = 2
    let moves = 0
    let minutes = 5
    let seconds = 00
    var gamePlaying
    // let timeClock = document.querySelector('#timer')
    // let counter = document.querySelector('#lives')
    let module = document.getElementById('menu-cover')
    
    $('#Moves').html('MOVES:' + moves)
    $('#Lives').html('LIVES:' + lives)
    $('#timer').html('TIMER: ' + minutes + ' : ' + seconds)
    
    
    //create board with cards
    
    function createBoard() {
        grid.innerHTML = ""
        cardsChosen = []
        cardsChosenId = []
        cardsWon = []
        lives = 2
        moves = 0
        minutes = 5
        seconds = 00
        for (let i = 0; i < cards.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'pictures/pangolin.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flip)
            grid.appendChild(card)
        }
        
    }

    //starts the game

    function init() {
        gamePlaying = true
    }
    
    //check for match
    
    function checkMatch() {
        let choice = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            choice[optionOneId].setAttribute('src', 'pictures/bat.png')
            choice[optionTwoId].setAttribute('src', 'pictures/bat.png')
            cardsWon.push(cardsChosen)
        } else {
            lives--
            console.log(lives)
            moves++
            $('#Moves').html('MOVES: ' + moves)
            $('#Lives').html('LIVES: ' + lives)
            console.log(moves)
            choice[optionOneId].setAttribute('src', 'pictures/pangolin.jpg')
            choice[optionTwoId].setAttribute('src', 'pictures/pangolin.jpg')
        }
        cardsChosen = []
        cardsChosenId = []
        if (lives === 0) {
            alert('you lose')
            createBoard()
            
        }
    }

    //flip card
    
    function flip() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cards[cardId].myCard)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cards[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 500) 
        }
    }
    
    
    
    createBoard()
    
    })