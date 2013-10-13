'use strict';

describe('e2e: test route', function(){

    beforeEach(function(){
        browser().navigateTo('/');
    });

    it('should load students path on unknown path', function(){
        expect(browser().location().path()).toBe('/students');
        browser().navigateTo('#/404');
        expect(browser().location().path()).toBe('/students');
    });

    it('should have a working students route', function(){
        browser().navigateTo('#/students');
        expect(browser().location().path()).toBe('/students');
    });

    it('should have a working student route', function(){
        browser().navigateTo('#/students/1');
        expect(browser().location().path()).toBe('/students/1');
    });
});
