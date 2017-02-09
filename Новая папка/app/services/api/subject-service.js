/**
 * Created by Паша on 07.02.2017.
 */
storeApp.factory('SubjectService', function($resource) {
    return $resource('/api/subject/:id', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
});