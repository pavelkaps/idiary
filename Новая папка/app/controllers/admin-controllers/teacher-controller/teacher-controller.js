/**
 * Created by Паша on 08.02.2017.
 */
storeApp.controller('TeacherCtrl', function($rootScope, $scope, TeacherService) {
    $scope.teacher = {};
    $scope.selectTeacher = null;

    $scope.teachers = TeacherService.query(function() {
        console.log($scope.teacher);
    });

    $scope.deleteTeacher = function (_teacher) {
        _teacher.$delete(function () {
            console.log("delete");
        })
    };

    $scope.addTeacher = function () {
        TeacherService.save($scope.teacher, function () {
            $scope.teacher = {};
        });
    };

    $scope.onSelect = function (_teacher) {
        $scope.selectTeacher = _teacher;
    };
});