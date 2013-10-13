'use strict';

window.app.factory('Students',function($resource){
    return $resource('data/students.json');
});
