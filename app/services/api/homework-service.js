/**
 * Created by Паша on 07.02.2017.
 */
storeApp.factory('HomeWorkService', function($resource) {
    return $resource('/api/homework/:id', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
});