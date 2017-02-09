/**
 * Created by Паша on 07.02.2017.
 */
storeApp.factory('TeacherService', function($resource) {
    return $resource('/api/teacher/:id', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
});