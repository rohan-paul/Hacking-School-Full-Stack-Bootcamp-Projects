/* In this file, I have defined a variable as well as a few functions. Later, I will access the functionality of these book recommendations from another module. */

const favoriteAuthor = {
    name : "Bill Gates",
    genre: "Business",
    nationality: "American"
}

function favoriteBook () {
    return {
        title: "The Road Ahead",
        author: "Bill Gates"
    }
}

// List of recommended books
function getBooksRecommendations() {
    return [
        {id: 1, title: "The Road Ahead", author: "Bill Gates"},
        {id: 2, title: "The Stand", author: "Steven King"},
        {id: 3, title: "The Postman Always Rings Twice", author: "James M. Cain"}

]
}

module.exports.favoriteAuthor = favoriteAuthor;
module.exports.favoriteBook = favoriteBook;
module.exports.getBooksRecommendations = getBooksRecommendations;