'use strict';

app.factory('Students',function($resource){
    return $resource('data/students.json');
});
