'use strict';

app.controller('MainCtrl', function (Students,$scope) {
    Students.query(function(data){
        $scope.students = data;
    });
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
});
