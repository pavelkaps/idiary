/**
 * Created by Паша on 19.10.2016.
 */
storeApp.controller('BooksCtrl', function($rootScope, $scope, booksFactory, $location, UpdateBookFactory) {
    UpdateBookFactory.insert('BooksCtrl', $scope);

    $scope.books = [];

    booksFactory.getBooks().then(function(data) {
        $scope.books = data.data;
    });
    
    $scope.onSelect = function(book) {
        $scope.selectedBook = book;
    };

    $scope.deleteBook = function(book) {

        booksFactory.deleteBook(book._id).then(function () {
            $scope.books = $scope.books.filter(function (bookFilter) {
                return bookFilter !== book;
            });
            
            if ($scope.selectedBook === book) {
                $scope.selectedBook = null
            };
        });
    };
    
    $scope.gotoDetail = function () {
        $location.path('books/' + $scope.selectedBook._id);
    }

    $scope.addBook = function (book) {
        $scope.books.push(book);
    }
});