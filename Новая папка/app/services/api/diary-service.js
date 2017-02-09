/**
 * Created by Паша on 07.02.2017.
 */
storeApp.factory('DiaryService', function($resource) {
    return $resource('/api/diary/:id', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
});