/**
 * Created by Паша on 19.10.2016.
 */
storeApp.controller('AddBookCtrl', function($rootScope, $scope, booksFactory, UpdateBookFactory) {
    
    $scope.updateBook = function (book) {
        booksFactory.saveBook(book).then(function (data) {
            UpdateBookFactory.get('BooksCtrl').addBook(data.data);
            $scope.reset();
        });
    };

    $scope.reset = function () {
        $scope.nullField = {author: '', title: '',year : ''};
        $scope.reset = function() {
            $scope.book = angular.copy($scope.nullField);
        };
    }

    
});