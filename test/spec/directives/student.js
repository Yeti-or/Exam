'use strict';

describe('directive student', function(){

    var $scope,$compile;

    beforeEach(module('SHRIApp'));

    beforeEach(module('templates/student.html'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $scope = _$rootScope_;
        $compile = _$compile_;
    }));

    var compileEl = function(scope){
        var element = $compile('<div student="student"></div>')(scope);
        scope.$digest();
        return element;
    };

    it('should display student name', function(){
        $scope.student = {
            last_name : 'Harrison',
            first_name : 'Ford'
        };
        var element = compileEl($scope);
        expect(element.html()).toMatch('Harrison Ford');
    });
});
