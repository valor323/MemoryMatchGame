

class Card{
    constructor(frontimage, backImage){
        this.frontimage = frontimage;
    }
    render(){
       var newImage =  $('<img>').attr('src', this.frontimage);
       console.log('ran', newImage);
        $('body').append(newImage);
    }
}

// var cardLayout = new Card();
// cardLayout.render()


// console.log(cardLayout);
