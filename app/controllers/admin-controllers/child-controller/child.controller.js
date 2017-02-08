/**
 * Created by Паша on 19.10.2016.
 */
storeApp.controller('ChildCtrl', function($rootScope, $scope, ChildService) {
    $scope.child = {};
    $scope.selectChild = null;

    $scope.childs = ChildService.query(function() {
        console.log($scope.childs);
    });

    $scope.deleteChild = function (_child) {
        _child.$delete(function () {
            console.log("delete");
        })
    };
    
    $scope.addChild = function () {
        ChildService.save($scope.child, function () {
            $scope.child = {};
        });
    };

    $scope.onSelect = function (_child) {
        $scope.selectChild = _child;
    };
});