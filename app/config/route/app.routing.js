/**
 * Created by Паша on 21.10.2016.
 */
storeApp.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/',{
            redirectTo: '/dashboard'
        })
        .when('/dashboard', {
            templateUrl: '../../controllers/dashboard/dashboard.html',
            controller: 'DashBoardCtrl',
            css: 'controllers/dashboard/dashboard.component.css'
        })
        .when('/books', {
            templateUrl: '../../controllers/books/books.html',
            controller: 'BooksCtrl',
            css: 'controllers/books/books.component.css'
        })
        .when('/books/:id', {
            templateUrl: '../../controllers/book-detail/book-detail.html',
            controller: 'BookDetailCtrl',
            css: 'controllers/book-detail/book-detail.component.css'
        })
        .when('/child',{
            templateUrl: '../../controllers/admin-controllers/child-controller/child-controller.html',
            controller: 'ChildCtrl',
            css: 'controllers/books/books.component.css'
        })
        .when('/class',{
            templateUrl: '../../controllers/admin-controllers/class-controller/class-controller.html',
            controller: 'ClassCtrl',
            css: 'controllers/books/books.component.css'
        })
        .when('/parent',{
            templateUrl: '../../controllers/admin-controllers/parent-controller/parent-controller.html',
            controller: 'ParentCtrl',
            css: 'controllers/books/books.component.css'
        })
        .when('/teacher',{
            templateUrl: '../../controllers/admin-controllers/teacher-controller/teacher-controller.html',
            controller: 'TeacherCtrl',
            css: 'controllers/books/books.component.css'
        }).otherwise({
            redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});
