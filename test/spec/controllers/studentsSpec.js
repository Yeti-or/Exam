'use strict';

describe('Controller:Students', function(){
    beforeEach(module('SHRIApp'));

    var studentsCtrl,scope,$httpBackend;

    beforeEach(inject(function($controller,$rootScope,_$httpBackend_,Students){
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('data/students.json')
            .respond(['student1','student2','student3']);
        scope = $rootScope.$new();
        studentsCtrl = $controller('StudentsCtrl',{
            $scope : scope,
            Students: Students
        });
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should create a list of students', function(){
        expect(scope.students).toBeUndefined();
        $httpBackend.flush();
        expect(scope.students.length).toBeGreaterThan(1);
    });
});
