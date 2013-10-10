'use strict';

var app = angular.module('SHRIApp', ['ngResource']);

app.config(function ($routeProvider) {
    $routeProvider .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});
