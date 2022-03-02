
const imagelist = ['../images/commodus.jpg', '../images/maximus.jpg']

class Game {
    constructor(cardlist){
        this.cardlist = cardlist;
    }
    loopForRender(cardlist){
        for(var i=0; i < cardlist.length; i++){
            var newCard = new Card(cardlist[i])
            newCard.render();
        }
    }
}

var newGame = new Game(imagelist);
newGame.loopForRender(imagelist);