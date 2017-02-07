/**
 * Created by Паша on 19.10.2016.
 */

storeApp.factory('booksFactory', function($http) {
    var urlBase = '/store/books';
    var _bookService = {};

    _bookService.getBooks = function() {
        return $http.get(urlBase);
    };

    _bookService.getBook = function(id) {
        return $http.get(urlBase+ '/' + id);
    };

    _bookService.saveBook = function(book) {
        return $http.post(urlBase, book);
    };

    _bookService.updateBook = function(book) {
        return $http.put(urlBase + '/' + book._id, book);
    };

    _bookService.deleteBook = function(id) {
        return $http.delete(urlBase + '/' + id);
    };

    return _bookService;
});