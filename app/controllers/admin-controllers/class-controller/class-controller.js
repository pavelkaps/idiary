/**
 * Created by Паша on 08.02.2017.
 */
storeApp.controller('ClassCtrl', function($rootScope, $scope, ClassService) {
    $scope.class = {};
    $scope.selectClass = null;

    $scope.classes = ClassService.query(function() {
        console.log($scope.class);
    });

    $scope.deleteChild = function (_class) {
        _class.$delete(function () {
            console.log("delete");
        })
    };

    $scope.addClass = function () {
        ClassService.save($scope.class, function () {
            $scope.class = {};
        });
    };

    $scope.onSelect = function (_class) {
        $scope.selectChild = _class;
    };
});