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
        function shuffle(cards) {
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

        //make the html

        const cardStr = shuffledCards.map(x => {
            return `
            <div class="card">
                <div class="back">
                    <span> class="${x.img}"></span>
                </div>
            </div>
            `
        })


})