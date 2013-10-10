'use strict';

app.controller('StudentsCtrl', function (Students,$scope) {
    Students.query(function(data){
        $scope.students = data;
    });
});
