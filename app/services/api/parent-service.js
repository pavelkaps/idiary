/**
 * Created by Паша on 07.02.2017.
 */
storeApp.factory('ParentService', function($resource) {
    return $resource('/api/parent/:id', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
});