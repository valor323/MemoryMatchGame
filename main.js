$(document).ready(initializeApp)

function initializeApp(){
    addcards();
    addFront();
    cards = document.querySelectorAll('.cardContainer');
    cards.forEach(card => card.addEventListener('click',  flipcard));
    shuffle();
    displayStats();
    $('.about').on('click', modal);
}
var cardsArray = [{
    'name': 'commodus',
    'image': './images/commodus.jpg',
},
{
    'name': 'gracchus',
    'image': './images/gracchus.jpg'
},
{
    'name': 'juba',
    'image': './images/juba.jpg',
},
{
    'name': 'lucilla',
    'image': './images/lucilla.jpg',
},
{
    'name': 'lucius',
    'image': './images/lucius.jpg'
},
{
    'name': 'marcusaurelius',
    'image': './images/marcusaurelius.jpg',
},
{
    'name': 'maximus',
    'image': './images/maximus.jpg',
},
{
    'name': 'proximo',
    'image': './images/proximo.JPG',
},
{
    'name': 'quintus',
    'image': './images/quintus.jpg',
}
]

function addFront(){
    for(i=0; i<=0; i++){
        var newDiv = $('<div>');
        newDiv.addClass('front');
        newDiv.addClass('pic');
        $('.cardContainer').append(newDiv);

    }
}

function addcards(){
var game = $('.game');
var grid = $('<section>');
game.append(grid);
var gameGrid = cardsArray.concat(cardsArray);
gameGrid.forEach(item => {
    // Create a div
    var cardContainer = $('<div>').addClass('cardContainer');
    var card = $('<div>');

    // Apply a card class to that div
    card.addClass('card');
    card.addClass('charecter')
    card.addClass('back');

    // Set the data-name attribute of the div to the cardsArray name
    cardContainer[0].dataset.name = item.name;

    // Apply the background image of the div to the cardsArray image
    cardContainer[0].style.backgroundImage = `url(${item.image})`;


    // Append the div to the grid section
    cardContainer.append(card)
    $('.game-area').append(cardContainer)
  });
  gameGrid.sort(() => 0.5 - Math.random());
}

 var hasFlippedCard = false;
 var firstCard
 var secondCard
 var lockedBoard = false;
function flipcard(){
    if(lockedBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');
    console.log(this);
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    }else{
        secondCard = this;
        attempts+=1;
        displayStats();
        checkForMatch();
}

function checkForMatch() {
    if($(firstCard).attr('data-name') === $(secondCard).attr('data-name')){
        disabledCards()
        matches+=1;
        displayStats();
    }else{
       unflipCards()
}
}

function disabledCards() {
    firstCard.removeEventListener('click', flipcard);
    secondCard.removeEventListener('click', flipcard);
    resetBoard();
}

function unflipCards () {
    lockedBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
        }, 1500);
    }
}

function resetBoard() {
    hasFlippedCard = false;
    lockedBoard = false;
    firstCard = null;
    secondCard = null;
}

function shuffle() {
    cards.forEach(card => {
        var randomPosition = Math.floor(Math.random()* 18);
        card.style.order = randomPosition;
    })
}



matches = 0;
attempts = 0;
accuracy = null;
games_played = 0;

function displayStats(){
    $('.matches .value').text(matches);
    $('.games-played .value').text(games_played);
    $('.numberOfAttempts .value').text(attempts);
    accuracy = matches/attempts;
    $('.howAccurate .value').text((accuracy*100).toFixed(0) + '%');
}

function resetStats(){
    accuracy = 0;
    matches = 0;
    attempts = 0;
    displayStats();
}

function reset(){
    console.log('resetTest');
    games_played+=1;
    resetStats();
    displayStats();
    $('div').removeClass('flip');
    shuffle();
    resetBoard();
    cards.forEach(card => card.addEventListener('click',  flipcard));
}

// function modal(){
//     $('.about').modal();
// }
