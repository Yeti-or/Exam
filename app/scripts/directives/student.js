'use strict';

window.app.directive('student',function(){
    return {
        restict: 'EA',
        replace: true,
        scope: {
            student: '='
        },
        templateUrl: 'templates/student.html'
    };
});
