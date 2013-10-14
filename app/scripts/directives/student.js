'use strict';

window.app.directive('student',function(){
    return {
        restict: 'EA',
        replace: true,
        scope: {
            student: '='
        },
        templateUrl: 'templates/student.html',
        link: function(scope,element){
            scope.student = {};
            scope.$watch(function(){
                return scope.student;
            },function(newVal,oldVal){
                if(oldVal !== newVal && !newVal){
                    scope.student = {
                        'link_photo' : '/styles/img/questionMark.png',
                        about : 'Нет такого студента, может быть это ты?'
                    };
                    element.find('span').addClass('not-found');
                }
            });
        }
    };
});
