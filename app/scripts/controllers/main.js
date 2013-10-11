'use strict';

app.controller('StudentsCtrl', function(Students,$scope,$state) {
    Students.query(function(data){
        $scope.students = data;
    });

    $scope.showStudent = function(index){
        console.log(index);
        $state.go('student',{studentId:index});
    };
});

app.controller('StudentCtrl',function(Students,$scope,$state,$stateParams){
    Students.query(function(data){
        $scope.student = data[$stateParams.studentId];
    });
});
