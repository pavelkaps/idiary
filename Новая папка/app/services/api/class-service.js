/**
 * Created by Паша on 07.02.2017.
 */
storeApp.factory('ClassService', function($resource) {
    return $resource('/api/class/:id', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
});