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

const str = cards.map(item => {
return `<div data-id="${item.myCard}" class="card">
<div class="back"></div>
<div class="front"><img src="${item.img}"></div>
</div>`
}).join('')
$('.cards').html(str)
let card1
let card2
$('.card').on('click', function () {
$(this).addClass('active')
myCard = $(this).data('id')
if (card1 === undefined) {
    card1 = $(this)

    timer1 = setTimeout(() => {
        $(this).removeClass('active')
    }, 1000) 
} else {
    if (card2 === undefined) {
        card2 = $(this)
        timer2 = setTimeout(() => {
            $(this).removeClass('active')
        }, 1000)
    } 
} if (card1 === card2) {
    $(this).removeClass('active')
}
},)

// function timer = setTimeout(() => {
//     if (str === str) {
//         $(this).removeClass('active')
//     }
// }, 1000)

})
