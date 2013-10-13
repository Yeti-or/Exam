'use strict';

window.app.directive('backImgSrc', function() {
    return function(scope, element, attrs) {
        attrs.$observe('backImgSrc', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
            });
        });
    };
});
