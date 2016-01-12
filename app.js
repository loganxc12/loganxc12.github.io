var app = angular.module('tripApp', ['ui.router', 'firebase']);

app.constant('url', "https://travel-timeline.firebaseio.com");

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
                url: '/',
                templateUrl: 'views/home.html'
        })
        .state('login', {
                url: '/login',
                templateUrl: 'views/login.html'
        })
        .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dash.html',
                controller: 'tripCtrl'
        })
        .state('trip', {
                url: '/trip/:tripId',
                templateUrl: 'views/trip.html',
                controller: 'tripCtrl'
        })
        .state('bucket', {
                url: '/bucket-list',
                templateUrl: 'views/bucket.html',
                controller: 'tripCtrl'
        })

})
