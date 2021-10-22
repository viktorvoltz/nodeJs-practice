const prompt = require('prompt-sync')();
const pin = prompt('enter pin for admin: ');

var isAdmin = false;

if (pin === '0000'){
    isAdmin = true;
    console.log('logged as admin')
}else{
    isAdmin = false;
    console.log('logged as user')
}



let movies = [
    {id: 0, title: "peaky blinders", rating: "4.5", pricing: 3},
    {id: 1, title: "strange angel", rating: "4.7", pricing: 4},
    {id: 2, title: "person of interest", rating: "4.8", pricing: 4},
    {id: 3, title: "django unchained", rating: "4.5", pricing: 4},
    {id: 4, title: "silicon valley", rating: "4.6", pricing: 5},
];

let rentedMovies = [];
let cost = 0;


//CRUD
// only admin can create a movie...

const createMovie = (title, rating, pricing) => {
    if (isAdmin == false){
        console.log('access denied for user');
    }else{
        movies.push({id: movies.length, title: title, rating: rating, pricing: pricing});
    }
    
}

const readMovie = (ID) => {
    return movies[ID];
}

const updateMovie = (ID, title, rating, pricing) => {
    if (ID > movies.length){
        return
    }else{
        return movies[ID] = {
            id: ID,
            title: title,
            rating: rating,
            pricing: pricing
        };
    }
}

const deleteMovie = (ID) => {
    movies.splice(ID, 1);
    return movies;
}


// rent movie from movie list
const rentMovie = (ID) => {
    rentedMovies.push(movies[ID]);
    rentedMovies.push(`total cost of renting is $${cost += movies[ID].pricing}`);
}

// to update rented movies list
const updateRentedMovie = (ID, title, rating, pricing) => {
    return rentedMovies[ID] = {
        id: ID,
        title: title,
        rating: rating,
        pricing: pricing
    };
}



createMovie("the witcher", "3.5", 6)
createMovie("atom", "3.5", 3)

updateMovie(3, "hello", "4.3", 5);
updateMovie(2, "the gym", "3.0", 6);
console.log(readMovie(3));
rentMovie(3);
console.log(deleteMovie(3));
console.log(movies);
console.log(rentedMovies);

