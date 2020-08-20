$(document).ready(function () {

    const cards = [
        {
            cardId: 1,
            img: 'pictures/covid1.png'
        },
        {
            cardId: 1,
            img: 'pictures/covid1.png'
        },
        {
            cardId: 2,
            img: 'pictures/covid2.png'
        },
        {
            cardId: 2,
            img: 'pictures/covid2.png'
        },
        {
            cardId: 3,
            img: 'pictures/covid3.png'
        },
        {
            cardId: 3,
            img: 'pictures/covid3.png'
        },
        {
            cardId: 4,
            img: 'pictures/covid4.png'
        },
        {
            cardId: 4,
            img: 'pictures/covid4.png'
        },
        {
            cardId: 5,
            img: 'pictures/covid5.png'
        },
        {
            cardId: 5,
            img: 'pictures/covid5.png'
        },
        {
            cardId: 6,
            img: 'pictures/covid6.png'
        },
        {
            cardId: 6,
            img: 'pictures/covid6.png'
        },
        {
            cardId: 7,
            img: 'pictures/covid7.png'
        },
        {
            cardId: 7,
            img: 'pictures/covid7.png'
        },
        {
            cardId: 8,
            img: 'pictures/covid8.png'
        },
        {
            cardId: 8,
            img: 'pictures/covid8.png'
        },
        {
            cardId: 9,
            img: 'pictures/covid9.png'
        },
        {
            cardId: 9,
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
 

    shuffle(cards)
    
    const grid = document.querySelector('.cards')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    let lives = 5
    let moves = 0
    let minutes = 2
    let seconds = 00
    var gamePlaying
    // let timeClock = document.querySelector('#Countdown')
    // let counter = document.querySelector('#lives')
    let module = document.getElementById('menu-cover')
    
    $('#Moves').html('MOVES:' + moves)
    $('#Lives').html('LIVES:' + lives)
    $('#Countdown').html('Countdown: ' + minutes + ' mins' + ' , ' + seconds + ' secs')
    
    
    //create board with cards
    
    function createBoard() {
        grid.innerHTML = ""
        document.getElementById('Lives').innerHTML = "LIVES: 5" 
        document.getElementById('Moves').innerHTML = "MOVES: 0"
        document.getElementById('Countdown').innterHTML = "mins: 2, secs: 00"
        cardsChosen = []
        cardsChosenId = []
        cardsWon = []
        lives = 5
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
        console.log(cardId)
        cardsChosen.push(cards[cardId].cardId)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cards[cardId].img)
        this.classList.toggle('flip')
        console.log(this.classList.toggle('flip'))
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 500) 
        }
    }

    
    document.querySelector('.btn-new').addEventListener('click', createBoard) 
    createBoard()
    })