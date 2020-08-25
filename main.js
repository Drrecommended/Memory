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
        //while there remains elements to shuffle
        while (0 !== currentIndex) {
            //pick the remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1
            //swap with current element
            temporaryValue = cards[currentIndex]
            cards[currentIndex] = cards[randomIndex]
            cards[randomIndex] = temporaryValue
        }
    
        return cards
    }    
 

    let shuffledCards = shuffle(cards)
    
    const grid = document.querySelector('.cards')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    let lives = 5
    let moves = 0
    let minutes = 1
    let seconds = 00
    // let timeClock = document.querySelector('#Countdown')
    // let counter = document.querySelector('#lives')
    let module = document.getElementById('menu-cover')
    
    $('#Moves').html('MOVES:' + moves)
    $('#Lives').html('LIVES:' + lives)
    $('#Countdown').html('COUNTDOWN: ' + minutes + ' mins' + ', ' + seconds + '0 secs')

    //timer starts when game starts

    const startingMinutes = minutes
    let time = startingMinutes * 60

    const countdown = document.querySelector('.timer')

    setInterval(startTimer, 1000);

    function startTimer() {
        minutes = Math.floor( time / 60 )
        seconds = time % 60

        seconds = seconds < 10 ? '0' + seconds : seconds

        countdown.innerHTML = `COUNTDOWN: ${minutes} mins, ${seconds} secs`
        time--
    
        if(time === 0 - 2) {
            alert('you lose')
            createBoard()
            clearInterval(startTimer)
        }
        // time = time < 0 ? 0 : time
    }
    startTimer()
    
    
    //create board with cards
    
    function createBoard() {
        grid.innerHTML = ""
        minutes = 1
        seconds = 00
        countdown.innerHTML = `COUNTDOWN: ${minutes} mins, ${seconds} secs`
        document.getElementById('Lives').innerHTML = "LIVES: 5" 
        document.getElementById('Moves').innerHTML = "MOVES: 0"
        cardsChosen = []
        cardsChosenId = []
        cardsWon = []
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
            moves++
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


   //
    let btn = document.querySelector('.btn-new')
    btn.addEventListener('click', createBoard) 
    createBoard()
    })