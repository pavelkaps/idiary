/**
 * Created by Паша on 21.10.2016.
 */
storeApp.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/',{
            redirectTo: '/child'
        })
        .when('/child',{
            templateUrl: '../../controllers/admin-controllers/child-controller/child-controller.html',
            controller: 'ChildCtrl',
            css: 'controllers/admin-controllers/admin-controller.css'
        })
        .when('/class',{
            templateUrl: '../../controllers/admin-controllers/class-controller/class-controller.html',
            controller: 'ClassCtrl',
            css: 'controllers/admin-controllers/admin-controller.css'
        })
        .when('/parent',{
            templateUrl: '../../controllers/admin-controllers/parent-controller/parent-controller.html',
            controller: 'ParentCtrl',
            css: 'controllers/admin-controllers/admin-controller.css'
        })
        .when('/teacher',{
            templateUrl: '../../controllers/admin-controllers/teacher-controller/teacher-controller.html',
            controller: 'TeacherCtrl',
            css: 'controllers/admin-controllers/admin-controller.css'
        }).otherwise({
            redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});
