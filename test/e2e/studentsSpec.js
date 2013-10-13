'use strict';

describe('e2e: students page', function(){
    beforeEach(function(){
        browser().navigateTo('#/students');
    });

    it('should render list of students', function(){
        expect(repeater('.students').count()).toBeGreaterThan(1);
    });

    it('should move us to student page with click on list', function(){
        element('div.student:first').click();
        expect(browser().location().path()).toBe('/students/0');
    });

});

describe('e2e: single student page', function(){
    beforeEach(function(){
        browser().navigateTo('#/students/12');
    });

    it('should render div with student info', function(){
        expect(element('div.student').html()).toBeDefined();
    });

    describe('navigation buttons:', function(){
        it('should have previous and next buttons', function(){
            expect(element('a.nav-prev').html()).toBeDefined();
            expect(element('a.nav-next').html()).toBeDefined();
        });

        it('should navigate to previous student', function(){
            element('a.nav-prev').click();
            expect(browser().location().path()).toBe('/students/11');
        });

        it('should navigate to next student', function(){
            element('a.nav-next').click();
            expect(browser().location().path()).toBe('/students/13');
        });

        it('should not have previous button for first student', function(){
            browser().navigateTo('#/students/0');
            expect(element('a.nav-prev').css('display')).toBe('none');
        });

        it('should not have next button for last student', function(){
            //Assume that there are only 29 students
            browser().navigateTo('#/students/28');
            expect(element('a.nav-next').css('display')).toBe('none');
        });

    });

});
