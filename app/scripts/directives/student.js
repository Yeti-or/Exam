'use strict';

app.directive('student',function(){
    return {
        restict: 'EA',
        replace: true,
        scope: {
            student: '='
        },
        templateUrl: 'templates/student.html',
        link: function (scope,element,attr){
        }
    };
});
