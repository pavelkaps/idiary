/**
 * Created by Паша on 08.02.2017.
 */
storeApp.controller('ParentCtrl', function($rootScope, $scope, ParentService) {
    $scope.parent = {};
    $scope.selectParent = null;

    $scope.parents = ParentService.query(function() {
        console.log($scope.parent);
    });

    $scope.deleteParent = function (_parent) {
        _parent.$delete(function () {
            console.log("delete");
        })
    };

    $scope.addParent = function () {
        ParentService.save($scope.parent, function () {
            $scope.parent = {};
        });
    };

    $scope.onSelect = function (_parent) {
        $scope.selectParent = _parent;
    };
});