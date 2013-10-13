'use strict';

window.app.factory('Students', ['$resource', function($resource){
    return $resource('data/students.json');
}]);
