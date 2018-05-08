let books = require('./book_recommendations');

// List of recommended music albums
let musicAlubms = [
    { artist: "The Killers", title: "Live From The Royal Albert Hall" },
    { artist: "Eminem", title: "The Marshall Mathers LP" }
];

// function to return the best from books and musicAlbums
let bestOfEach = function () {
    return [musicAlubms[0], books.favoriteBook()]
}

//Print a message specifying the customer's recommended books and music albums

let selectedRecommendations = (function() {
    console.log("Your Recommended gifts are : \n");
    console.log("****MUSIC****");

    for (let i = 0, len = musicAlubms.length; i < len; i++) {
        console.log(musicAlubms[i].title + " by " + musicAlubms[i].artist);
    }

    console.log("****BOOKS****");

    let recommendedBooks = books.getBooksRecommendations();

    for (let i = 0, len = recommendedBooks.length; i < len; i++) {
        console.log(recommendedBooks[i].title + " by " + recommendedBooks[i].author);
    }
}());

// selectedRecommendations();

//