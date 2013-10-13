'use strict';

app.controller('StudentsCtrl', function(Students,$scope,$state) {
    Students.query(function(data){
        $scope.students = data;
    });

    $scope.showStudent = function(index){
        $state.go('student',{studentId:index});
    };
});

app.controller('StudentCtrl',function(Students,$scope,$state,$stateParams){
    var index = $stateParams.studentId;

    Students.query(function(data){
        $scope.student = data[index];
        $scope.firstOne = (index == 0) || !$scope.student;
        $scope.lastOne = (index == data.length - 1) || !$scope.student;
    });

    $scope.nextOne = function(){
        $state.go('student',{studentId:++index});
    };

    $scope.prevOne = function(){
        $state.go('student',{studentId:--index});
    };
});
