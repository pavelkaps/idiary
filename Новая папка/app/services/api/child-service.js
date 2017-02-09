/**
 * Created by Паша on 07.02.2017.
 */

storeApp.factory('ChildService', function($resource) {
    return $resource('/api/child/:id', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
});