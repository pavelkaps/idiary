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
        }).otherwise({
            redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});
