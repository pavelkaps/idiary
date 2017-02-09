/**
 * Created by Паша on 19.10.2016.
 */
storeApp.controller('BookDetailCtrl', function($rootScope, $scope, booksFactory, $routeParams, $window) {
    $scope.book = {};

    booksFactory.getBook($routeParams.id).then(function(data) {
        $scope.book = data.data;
    });
    
    $scope.saveBook = function () {
      booksFactory.updateBook($scope.book).then(function () {
          $scope.goBack();
      })
    };
    
   $scope.goBack = function () {
       $window.history.back();
   }
});