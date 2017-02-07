/**
 * Created by Паша on 19.10.2016.
 */

storeApp.controller('DashBoardCtrl', function($rootScope, $scope, booksFactory, $location) {
    $scope.books = [];

    booksFactory.getBooks().then(function(data) {
        $scope.books = data.data.splice(0,4);
    });

    $scope.gotoDetail = function (book) {
        $location.path('books/' + book._id);
    }

});