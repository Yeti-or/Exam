'use strict';

var app = window.app = angular.module('SHRIApp', ['ngResource','ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('students');
    $stateProvider.state('students', {
        url:'/students',
        templateUrl:'views/students.html',
        controller: 'StudentsCtrl'
    }).state('student', {
        url:'/students/:studentId',
        templateUrl:'views/student.html',
        controller: 'StudentCtrl'
    });

}]);
