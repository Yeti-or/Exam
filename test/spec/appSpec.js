'use strict';

//just checking all dependencies

describe("Testing app modules", function(){
    describe("App module:", function(){
        var module;
        beforeEach(function(){
            module = angular.module("SHRIApp");
        });

        it("should be registered", function(){
            expect("module").not.toBeNull();
        });

        describe("App dependencies:", function(){
            var deps;
            function hasmodule(module){
                return deps.indexOf(module) >= 0;
            }
            beforeEach(function(){
                deps = module.value("SHRIApp").requires;
            });
            it("should have ngResource", function(){
                expect(hasmodule('ngResource')).toBe(true);
            });
            it("should load ngResource", function(){
                expect(angular.module('ngResource')).toBeDefined();
            });
            it("should have ui.router", function(){
                expect(hasmodule('ui.router')).toBe(true);
            });
            it("should load ui.router", function(){
                expect(angular.module('ui.router')).toBeDefined();
            });
        });
    });
});
