'use strict';

window.app.directive('backImgSrc', function(){
    return function(scope, element, attrs) {
        attrs.$observe('backImgSrc', function(value) {
            if(value){
                element.css({
                    'background-image': 'url(' + value +')',
                });
            }
        });
    };
});

window.app.directive('githubBtn', function(){
    return {
        scope: {
            github: '@githubBtn'
        },
        replace: true,
        template: '<iframe allowtransparency="true" frameborder="0" scrolling="0" width="165" height="20"></iframe>',
        link: function(scope,element){
            function parse(gh){
                var name,arr = gh.split('/');
                name = arr[arr.length - 1];
                if(name === ''){
                    name = arr[arr.length - 2];
                }
                return name;
            }
            function getPath(){
                var path = 'http://ghbtns.com/github-btn.html?';
                path += 'user=';
                path += parse(scope.github);
                path += '&';
                path += 'type=follow';
                path += '&';
                path += 'count=true';
                element.attr('src', path);
            }

            scope.$watch(function(){
                return scope.github;
            }, function(newVal,oldVal){
                if(newVal !== oldVal){
                    getPath(newVal);
                }
            });
        }
    };
});
