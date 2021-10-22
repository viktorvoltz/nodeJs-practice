//using the module pattern

var borrowedBooks = [
    { 'id': 3, 'author': 'Napoleon', 'price': 55 },
    { 'id': 10, 'author': 'Mr Brown', 'price': 30 },
];
var totalCost = 0;

var lendingService = (function () {

    var storeBooks = [
        { 'id': 0, 'author': 'Chinonso', 'price': 30 },
        { 'id': 1, 'author': 'Dan Brown', 'price': 20 },
        { 'id': 2, 'author': 'Henry Ford', 'price': 40 },
        { 'id': 6, 'author': 'Gantt', 'price': 45 },
        { 'id': 8, 'author': 'Peter', 'price': 45 },
        { 'id': 12, 'author': 'Amadi Joseph', 'price': 20 },
    ];


    function viewBookStore() {
        return storeBooks;
    }

    function _borrowBook(id) {
        var check = storeBooks.find((books) => books['id'] === id); // check by id if book is in store
        if (check === undefined) {
            console.log('book id not in store, might have been borrowed'); //book not in store
        } else {
            index = storeBooks.indexOf(check); //get index of storebook
            borrowedBooks.push(check);
            totalCost += storeBooks[index]['price']; //imcrement totalcost
            storeBooks.splice(index, 1); // remove book from store
            console.log('book added to cart');
            return check;
        }
    }

    function _viewBorrowedBooks() {
        return borrowedBooks;
    }

    function _returnBorrowedBooks(id) {
        var check = borrowedBooks.find((books) => books['id'] === id);
        if (check === undefined) {
            console.log('book not in your cart or already returned');
        } else {
            index = borrowedBooks.indexOf(check);
            storeBooks.push(check);
            totalCost -= borrowedBooks[index]['price'];
            borrowedBooks.splice(index, 1)
            return check;
        }
    }

    function borrowBook(id) {
        return _borrowBook(id);
    }

    function viewBorrowedBooks() {
        if(borrowedBooks.length == 0){
            console.log("your cart is empty");
        }else{
            return _viewBorrowedBooks();
        }
    }

    function returnBorrowedBooks(id) {
        return _returnBorrowedBooks(id);
    }

    return {
        viewBookStore: viewBookStore,
        borrowBook: borrowBook,
        viewBorrowedBooks: viewBorrowedBooks,
        returnBorrowedBooks: returnBorrowedBooks,
    }
})();


console.log('Welcome to back our Book lending shop. Please pick a service');
const prompt = require('prompt-sync')();
//const choice = prompt("pick a service number: \n1: view our store. \n2: borrow a book. \n3: return a book \n4: view your cart. ");
console.log("for service: \n'one'- view our store. \n'two'- borrow a book. \n'three'- return a book \n'four'- view your cart.");
const choice = prompt("pick a service: ");

function askQ() {

    switch (choice) {
        case "one":
            console.log(lendingService.viewBookStore());
            break;

        case "two":
            id = prompt("please enter the id of the book you wish to borrow: ");
            console.log(lendingService.borrowBook(parseInt(id)));
            console.log(`cost $${totalCost}`);
            break;

        case "three":
            id = prompt("please enter the id of the book you wish to return: ");
            console.log(lendingService.returnBorrowedBooks(parseInt(id)));
            console.log(`book returned to store \n cost $${totalCost}`);
            break;

        case "four":
            console.log(lendingService.viewBorrowedBooks());
            break;

        default:
            console.log("enter valid word");
    }
}

askQ();