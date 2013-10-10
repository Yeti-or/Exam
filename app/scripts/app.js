'use strict';

var app = angular.module('SHRIApp', ['ngResource','ui.router']);

app.config(function ($stateProvider) {
    $stateProvider
        .state('students',{
            url:'/students',
            templateUrl:'views/students.html',
            controller: 'StudentsCtrl'
        });
});

app.directive('backImgSrc', function(){
        return function(scope, element, attrs){
        attrs.$observe('backImgSrc', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
            });
        });
    };
});
