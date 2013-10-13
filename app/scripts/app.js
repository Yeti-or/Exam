'use strict';

var app = angular.module('SHRIApp', ['ngResource','ui.router']);

app.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('students');
    $stateProvider
        .state('students',{
            url:'/students',
            templateUrl:'views/students.html',
            controller: 'StudentsCtrl'
        })
        .state('student',{
            url:'/students/:studentId',
            templateUrl:'views/student.html',
            controller: 'StudentCtrl'
        });
});
