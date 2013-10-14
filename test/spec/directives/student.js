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

    it('should render student div', function(){
        var element = compileEl($scope);
        expect(element.hasClass('student')).toBe(true);
        expect(element.find('.circle-img').length).toBe(1);
    });

    it('should display student name', function(){
        var element = compileEl($scope);
        $scope.student = {
            last_name : 'Harrison',
            first_name : 'Ford'
        };
        $scope.$digest();
        expect(element.html()).toMatch('Harrison Ford');
    });

    it('should show not-found img when student is null', function(){
        var element = compileEl($scope);
        $scope.student = undefined;
        $scope.$digest();
        expect(element.find('.circle-img').hasClass('not-found')).toBe(true);
    });
});
